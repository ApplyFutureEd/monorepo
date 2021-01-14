import { useOutsideAlerter } from '@applyfuture/utils';
import { FC, ReactNode, useRef } from 'react';

type Props = {
    callback: () => void;
    children: ReactNode;
};

export const OutsideAlerter: FC<Props> = (props) => {
    const { callback, children } = props;

    const wrapperRef = useRef(null);
    useOutsideAlerter({ callback, wrapperRef });

    return <div ref={wrapperRef}>{children}</div>;
};
