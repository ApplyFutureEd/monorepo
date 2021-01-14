import { Collapse } from '..';
import React, { ReactNode, useState } from 'react';

export default {
    component: Collapse,
    title: 'Collapse'
};

export const Default = (): ReactNode => {
    const [open, setOpen] = useState(false);

    const title = 'What happens after I submit all of my documents and pay my application fees?';
    const content = (
        <div>
            <p>
                After you have submitted all of your documents and paid your application fees,
                ApplyFuture will send your documents to the institutions that you selected for
                processing.
            </p>
            <br />
            <p>
                At this point, you have done everything you need to do. We will look after
                everything, including communicating with the institution(s) of your choice.
            </p>
            <br />
            <p>
                When ApplyFuture obtains your acceptance letter, we will notify you and help you
                through the visa application process.
            </p>
        </div>
    );

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    return <Collapse content={content} open={open} title={title} onClick={handleClick} />;
};
