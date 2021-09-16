import { Translation } from '@pages/index';
import { FC } from 'react';

type Props = {
    isLoading: boolean;
    translations: Translation[];
};

// expected :
// nb traductions
// nb complete
// nb incomplete
// % completion

const Statistics: FC<Props> = (props) => {
    const { isLoading, translations } = props;

    const getTotalTranslation = (file: Translation[]) => file.length;

    const getNonCompleteTranslations = (file: Translation[]) => {
        const stateValues: Array<any> = [];
        const nonCompleteValues: Array<any> = [];
        file.forEach((translation) => {
            const value = Object.values(translation.values);
            // value has 3 values
            // value is an object
            stateValues.push(Object.entries(value).some(([_k, value]) => value === ''));
        });
        for (const value of stateValues) {
            if (value === true) {
                nonCompleteValues.push(value);
            }
        }
        return nonCompleteValues;
    };

    const getCompleteTranslations = (totalValues: number, nonCompleteValues: number) =>
        totalValues - nonCompleteValues;

    const getTranslationsPercentage = (completeValues: number, totalValues: number) =>
        Math.floor((completeValues * 100) / totalValues);

    const totalTranslations = getTotalTranslation(translations);
    const nonCompleteTranslations = getNonCompleteTranslations(translations).length;
    const completeTranslations = getCompleteTranslations(
        totalTranslations,
        nonCompleteTranslations
    );
    const completeTranslationsPercentage = getTranslationsPercentage(
        completeTranslations,
        totalTranslations
    );

    return (
        <div>
            <h1>Statistics</h1>
            <p>Total translations : {totalTranslations}</p>
            <p>complete translations : {completeTranslations}</p>
            <p>Non complete translations : {nonCompleteTranslations}</p>
            <p>Completion : {completeTranslationsPercentage} %</p>
        </div>
    );
};

export default Statistics;
