import {
    SearchableSchoolSortableFields,
    SearchableSchoolSortInput,
    SearchableSortDirection
} from '@applyfuture/graphql';
import { Button, Dropdown, DropdownItem } from '@applyfuture/ui';
import { faSort } from '@fortawesome/pro-light-svg-icons';
import useTranslation from 'next-translate/useTranslation';
import { FC, useState } from 'react';

type SortByOption = {
    direction: SearchableSortDirection | null | undefined;
    field: SearchableSchoolSortableFields | null | undefined;
    label: string;
};

type Props = {
    handleSort: (sort: SearchableSchoolSortInput) => void;
};

const SortBy: FC<Props> = (props) => {
    const { handleSort } = props;
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const [currentLabel, setCurrentLabel] = useState('schools:sort-by-option-alphabetical-order');

    const handleToggle = () => {
        setOpen((prev) => !prev);
    };

    /*   const handleClose = () => {
        setOpen(false);
    }; */

    const handleClick = (option: SortByOption) => {
        setCurrentLabel(option.label);
        handleSort({ direction: option.direction, field: option.field });
        setOpen(false);
    };

    const sortByOptions: Array<SortByOption> = [
        {
            direction: SearchableSortDirection['asc'],
            field: SearchableSchoolSortableFields['name'],
            label: 'schools:sort-by-option-alphabetical-order'
        },
        {
            direction: SearchableSortDirection['asc'],
            field: SearchableSchoolSortableFields['country'],
            label: 'schools:sort-by-option-country-alphabetical-order'
        }
    ];

    const trigger = (
        <Button startIcon={faSort} variant="secondary" onClick={handleToggle}>
            {t(currentLabel)}
        </Button>
    );

    const items: Array<DropdownItem> = sortByOptions.map((option) => {
        const { label } = option;

        return {
            label: t(label),
            onClick: () => handleClick(option)
        };
    });

    return (
        <Dropdown
            items={items}
            open={open}
            trigger={trigger}
            onOutsideClick={() => setOpen(false)}
        />
    );
};

export default SortBy;
