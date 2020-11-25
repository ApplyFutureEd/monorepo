import useOutsideAlerter from '@utils/hooks/useOutsideAlerter';
import { FC, ReactNode, useRef } from 'react';

type Props = {
    callback: () => void;
    children: ReactNode;
};

const OutsideAlerter: FC<Props> = (props) => {
    const { callback, children } = props;

    const wrapperRef = useRef(null);
    useOutsideAlerter({ callback, wrapperRef });

    return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideAlerter;
