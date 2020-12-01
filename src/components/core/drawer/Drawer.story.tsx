import Button from '@components/core/button/Button';
import Drawer from '@components/core/drawer/Drawer';
import React, { ReactNode, useState } from 'react';

export default {
    component: Drawer,
    title: 'Drawer'
};

export const Default = (): ReactNode => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    return (
        <div>
            <Button onClick={handleClick}>Toggle Drawer</Button>
            <Drawer open={open} title="Filters" onClose={handleClose}>
                <div className="px-4 py-6 sm:px-6">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus
                        neque id elit dapibus suscipit. Pellentesque ornare elit sed augue
                        vestibulum egestas. Sed vehicula mauris nec ullamcorper fringilla. Nullam at
                        turpis sed nisl volutpat porta.
                    </p>
                    <br />
                    <p>
                        Etiam condimentum ipsum velit, id commodo nulla convallis in. Nunc eros dui,
                        vestibulum sed purus sed, malesuada ullamcorper augue. Pellentesque habitant
                        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </p>
                    <br />
                    <p>
                        Etiam tempor dolor ut est tincidunt, in rutrum purus rutrum. Vivamus viverra
                        porttitor nisl a accumsan. Vestibulum fringilla, dui at blandit rutrum, arcu
                        massa porttitor purus, id venenatis lectus mi sed metus.
                    </p>
                </div>
            </Drawer>
        </div>
    );
};
