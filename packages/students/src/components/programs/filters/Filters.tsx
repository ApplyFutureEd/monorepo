import { SearchableProgramFilterInput } from '@applyfuture/graphql';
import FiltersForm from '@applyfuture/students/components/programs/filters/FiltersForm';
import Tabs from '@applyfuture/students/components/programs/filters/Tabs';
import { Button, Drawer } from '@applyfuture/ui';
import { faFilter } from '@fortawesome/pro-light-svg-icons';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useState } from 'react';

type Props = {
    handleFilter: (filter: SearchableProgramFilterInput) => void;
};

const Filters: FC<Props> = (props) => {
    const { handleFilter } = props;
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const [currentTab, setCurrentTab] = useState(0);

    const handleClose = () => {
        setOpen(false);
    };

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleCurrentTab = (index: number) => {
        setCurrentTab(index);
    };

    return (
        <>
            <div className="flex items-center">
                <div className="relative">
                    <Button startIcon={faFilter} variant="secondary" onClick={handleClick}>
                        {t('programs:filters')}
                    </Button>
                </div>
            </div>
            <Drawer open={open} title={t('programs:filters')} onClose={handleClose}>
                <Tabs currentTab={currentTab} handleCurrentTab={handleCurrentTab} />
                <div className="px-4 py-6 h-full sm:px-6">
                    <FiltersForm
                        currentTab={currentTab}
                        handleClose={handleClose}
                        handleFilter={handleFilter}
                    />
                </div>
            </Drawer>
        </>
    );
};

export default Filters;
