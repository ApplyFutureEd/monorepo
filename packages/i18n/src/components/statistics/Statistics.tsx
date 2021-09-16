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
    const totalTranslations = translations.length;

    const getNonCompleteTranslations = (translations: Translation[]) => {
        const isCompleteValue: Array<any> = [];
        const nonCompleteValue: Array<any> = [];
        translations.forEach((translation) => {
            const value = Object.values(translation.values);
            // value has 3 values
            // value is an object
            isCompleteValue.push(Object.entries(value).some(([_k, value]) => value === ''));
        });
        for (const value of isCompleteValue) {
            if (value === true) {
                nonCompleteValue.push(value);
            }
        }
        return nonCompleteValue;
    };

    const nonCompleteTranslations = getNonCompleteTranslations(translations).length;
    const completeTranslations = totalTranslations - nonCompleteTranslations;
    const completeTranslationsPercentage = Math.floor(
        (completeTranslations * 100) / totalTranslations
    );

    // TODO : useState ? to be synchronous with data manipulation

    return (
        <div>
            <h1>Statistics</h1>
            <p>Total translations : {totalTranslations}</p>
            <p>completeTranslations : {completeTranslations}</p>
            <p>Non complete translations : {nonCompleteTranslations}</p>
            <p>Completion : {completeTranslationsPercentage} %</p>
        </div>
    );
};

export default Statistics;
