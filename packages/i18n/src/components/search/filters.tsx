import { Button } from '@applyfuture/ui';
import { faFilter } from '@fortawesome/pro-light-svg-icons';
import React, { FC } from 'react';

type Props = {
    title: string;
    setTranslated: any;
    setUntranslated: any;
    translated: boolean;
    untranslated: boolean;
};

const Filters: FC<Props> = (props) => {
    const { title, setTranslated, setUntranslated, translated, untranslated } = props;
    const handleClick = () => {
        if (title === 'Translated') {
            setTranslated(!translated);
        } else if (title === 'Untranslated') {
            setUntranslated(!untranslated);
        }
    };
    return (
        <div className="flex items-center">
            <div className="relative">
                <Button startIcon={faFilter} variant="secondary" onClick={handleClick}>
                    {title}
                </Button>
            </div>
        </div>
    );
};

export default Filters;
