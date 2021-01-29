import {
    SearchableProgramSortableFields,
    SearchableProgramSortInput,
    SearchableSortDirection
} from '@applyfuture/graphql';
import { Button, Dropdown, DropdownItem } from '@applyfuture/ui';
import { faSort } from '@fortawesome/pro-light-svg-icons';
import useTranslation from 'next-translate/useTranslation';
import { FC, useState } from 'react';

type SortByOption = {
    direction: SearchableSortDirection | null | undefined;
    field: SearchableProgramSortableFields | null | undefined;
    label: string;
};

type Props = {
    handleSort: (sort: SearchableProgramSortInput) => void;
};

const SortBy: FC<Props> = (props) => {
    const { handleSort } = props;
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const [currentLabel, setCurrentLabel] = useState('programs:sort-by-option-alphabetical-order');

    const handleToggle = () => {
        setOpen((prev) => !prev);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClick = (option: SortByOption) => {
        setCurrentLabel(option.label);
        handleSort({ direction: option.direction, field: option.field });
    };

    const sortByOptions: Array<SortByOption> = [
        {
            direction: SearchableSortDirection['asc'],
            field: SearchableProgramSortableFields['schoolName'],
            label: 'programs:sort-by-option-alphabetical-order'
        },
        {
            direction: SearchableSortDirection['asc'],
            field: SearchableProgramSortableFields['country'],
            label: 'programs:sort-by-option-country-alphabetical-order'
        },
        {
            direction: SearchableSortDirection['asc'],
            field: SearchableProgramSortableFields['duration'],
            label: 'programs:sort-by-option-low-to-high-duration'
        },
        {
            direction: SearchableSortDirection['desc'],
            field: SearchableProgramSortableFields['fee'],
            label: 'programs:sort-by-option-high-to-low-fee'
        },
        {
            direction: SearchableSortDirection['asc'],
            field: SearchableProgramSortableFields['fee'],
            label: 'programs:sort-by-option-low-to-high-fee'
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
            handleClose={handleClose}
            items={items}
            open={open}
            trigger={trigger}
            onOutsideClick={handleClose}
        />
    );
};

export default SortBy;
