import { isObjectValuesEmpty, useWindowSize } from '@applyfuture/utils';
import { Filter, Translation } from '@pages/index';
import React, { FC } from 'react';
import { FixedSizeList as List } from 'react-window';

import TranslationRow from './TranslationRow';
import TranslationRowSkeleton from './TranslationRowSkeleton';

type Props = {
    filter: Filter;
    isLoading: boolean;
    listRef: any;
    search: string;
    selected: string;
    translations: Translation[];
};

const TranslationsList: FC<Props> = (props) => {
    const { filter, isLoading, listRef, search, selected, translations } = props;
    const { width: windowWidth, height: windowHeight } = useWindowSize();
    const headerHeight = 490;
    const smBreakpoint = 640;
    const listHeight = windowHeight ? windowHeight - headerHeight : 700;
    const itemSize = windowWidth && windowWidth < smBreakpoint ? 510 : 415;

    const searchValue = (value: Translation) =>
        Boolean(
            value.key.includes(search) ||
                value?.values?.en?.includes(search) ||
                value?.values?.fr?.includes(search) ||
                value?.values?.zh?.includes(search)
        );

    const filterValue = (accumulator: Translation[], value: Translation) => {
        if (filter === 'UNTRANSLATED' && isObjectValuesEmpty(value.values)) {
            accumulator.push(value);
        }
        if (filter === 'TRANSLATED' && !isObjectValuesEmpty(value.values)) {
            accumulator.push(value);
        }
        if (!filter) {
            accumulator.push(value);
        }
    };

    const filteredTranslations = translations.reduce(
        (accumulator: Translation[], value: Translation) => {
            if (search) {
                searchValue(value) && filterValue(accumulator, value);
            } else {
                filterValue(accumulator, value);
            }

            return accumulator;
        },
        []
    );

    return (
        <>
            {isLoading ? (
                <TranslationRowSkeleton isLoading={isLoading} />
            ) : (
                <div className="py-12">
                    <List
                        ref={listRef}
                        height={listHeight}
                        itemCount={
                            filter || search ? filteredTranslations.length : translations.length
                        }
                        itemSize={itemSize}
                        width={'100%'}>
                        {(props) => (
                            <TranslationRow
                                selected={selected}
                                translations={
                                    filter || search ? filteredTranslations : translations
                                }
                                {...props}
                            />
                        )}
                    </List>
                </div>
            )}
        </>
    );
};

export default TranslationsList;
