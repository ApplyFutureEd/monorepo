import { GetStudentByEmailQuery, SearchableProgramFilterInput } from '@applyfuture/graphql';
import { Button, Drawer } from '@applyfuture/ui';
import ProgramsFilterForm from '@components/forms/programs/filters/FiltersForm';
import Tabs from '@components/programs/filters/tabs/Tabs';
import { faFilter } from '@fortawesome/pro-light-svg-icons';
import useTranslation from 'next-translate/useTranslation';
import { FC, useState } from 'react';

type Props = {
    handleFilter: (filter: SearchableProgramFilterInput) => void;
    studentData: GetStudentByEmailQuery;
};

const Filters: FC<Props> = (props) => {
    const { handleFilter, studentData } = props;
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
                    <ProgramsFilterForm
                        currentTab={currentTab}
                        handleClose={handleClose}
                        handleFilter={handleFilter}
                        studentData={studentData}
                    />
                </div>
            </Drawer>
        </>
    );
};

export default Filters;
