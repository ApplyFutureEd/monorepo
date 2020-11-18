import { createContext, FC, useContext, useEffect, useRef } from 'react';
import { CSSTransition as ReactCSSTransition } from 'react-transition-group';

type TransitionContextProps = {
    parent: {
        appear?: boolean;
        isInitialRender: boolean;
        show: boolean;
    };
};

const TransitionContext = createContext<Partial<TransitionContextProps>>({
    parent: {
        isInitialRender: true,
        show: false
    }
});

const useIsInitialRender = (): boolean => {
    const isInitialRender = useRef(true);

    useEffect(() => {
        isInitialRender.current = false;
    }, []);

    return isInitialRender.current;
};

type CSSTransitionProps = {
    appear?: boolean;
    children: React.ReactNode;
    enter?: string;
    enterFrom?: string;
    enterTo?: string;
    leave?: string;
    leaveFrom?: string;
    leaveTo?: string;
    show?: boolean;
};

const CSSTransition: FC<CSSTransitionProps> = (props) => {
    const {
        appear,
        children,
        enter = '',
        enterFrom = '',
        enterTo = '',
        leave = '',
        leaveFrom = '',
        leaveTo = '',
        show
    } = props;

    const enterClasses = enter.split(' ').filter((s) => s.length);
    const enterFromClasses = enterFrom.split(' ').filter((s) => s.length);
    const enterToClasses = enterTo.split(' ').filter((s) => s.length);
    const leaveClasses = leave.split(' ').filter((s) => s.length);
    const leaveFromClasses = leaveFrom.split(' ').filter((s) => s.length);
    const leaveToClasses = leaveTo.split(' ').filter((s) => s.length);

    const addClasses = (node: HTMLElement, classes: string[]): void => {
        if (classes.length) {
            node.classList.add(...classes);
        }
    };

    const removeClasses = (node: HTMLElement, classes: string[]): void => {
        if (classes.length) {
            node.classList.remove(...classes);
        }
    };

    const noderef = useRef<HTMLDivElement>(null);

    const addEndListener = (done: () => void): void => {
        noderef.current?.addEventListener('transitionend', done, false);
    };

    const onEnter = (): void => {
        if (noderef.current) {
            addClasses(noderef.current, [...enterClasses, ...enterFromClasses]);
        }
    };

    const onEntering = (): void => {
        if (noderef.current) {
            removeClasses(noderef.current, enterFromClasses);
            addClasses(noderef.current, enterToClasses);
        }
    };

    const onEntered = (): void => {
        if (noderef.current) {
            removeClasses(noderef.current, [...enterToClasses, ...enterClasses]);
        }
    };

    const onExit = (): void => {
        if (noderef.current) {
            addClasses(noderef.current, [...leaveClasses, ...leaveFromClasses]);
        }
    };

    const onExiting = (): void => {
        if (noderef.current) {
            removeClasses(noderef.current, leaveFromClasses);
            addClasses(noderef.current, leaveToClasses);
        }
    };

    const onExited = (): void => {
        if (noderef.current) {
            removeClasses(noderef.current, [...leaveToClasses, ...leaveClasses]);
        }
    };

    return (
        <ReactCSSTransition
            unmountOnExit
            addEndListener={addEndListener}
            appear={appear}
            in={show}
            nodeRef={noderef}
            onEnter={onEnter}
            onEntered={onEntered}
            onEntering={onEntering}
            onExit={onExit}
            onExited={onExited}
            onExiting={onExiting}>
            <div ref={noderef}>{children}</div>
        </ReactCSSTransition>
    );
};

const Transition: FC<CSSTransitionProps> = (props) => {
    const { appear, show, ...rest } = props;
    const { parent } = useContext(TransitionContext);
    const isInitialRender = useIsInitialRender();
    const isChild = show === undefined;

    if (isChild) {
        return (
            <CSSTransition
                appear={parent ? parent.appear || !parent.isInitialRender : false}
                show={parent?.show ? parent.show : false}
                {...rest}
            />
        );
    }

    return (
        <TransitionContext.Provider
            value={{
                parent: {
                    appear,
                    isInitialRender,
                    show: Boolean(show)
                }
            }}>
            <CSSTransition appear={appear} show={show} {...rest} />
        </TransitionContext.Provider>
    );
};

export default Transition;
