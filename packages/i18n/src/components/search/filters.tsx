import { Button } from '@applyfuture/ui';
import { faFilter } from '@fortawesome/pro-light-svg-icons';
import React, { FC } from 'react';

type Props = {
    title: string;
    setTranslated: any;
    setUntranslated: any;
};

const Filters: FC<Props> = (props) => {
    const { title, setTranslated, setUntranslated } = props;
    const handleClick = () => {
        if (title === 'Translated') {
            setTranslated(true);
            console.log("I've clicked on translated button");
        } else if (title === 'Untranslated') {
            setUntranslated(true);
            console.log("I've clicked on untranslated button");
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
