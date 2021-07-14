import { Collapse } from '@applyfuture/ui';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import useTranslation from 'next-translate/useTranslation';
import { FC, useState } from 'react';

const HelpPage: FC = () => {
    const { t } = useTranslation();

    const [open, setOpen] = useState(-1);

    const questions = [
        {
            answer: (
                <div className="markdown">
                    <p>{t('help:answer-1-p-1')}</p>
                    <p>{t('help:answer-1-p-2')}</p>
                    <p>{t('help:answer-1-p-3')}</p>
                    <h3>{t('help:answer-1-h-1')}</h3>
                    <p>{t('help:answer-1-p-4')}</p>
                    <p>{t('help:answer-1-p-5')}</p>
                    <p>{t('help:answer-1-p-6')}</p>
                    <h3>{t('help:answer-1-h-2')}</h3>
                    <p>{t('help:answer-1-p-7')}</p>
                    <p>{t('help:answer-1-p-8')}</p>
                    <p>{t('help:answer-1-p-9')}</p>
                    <p>{t('help:answer-1-p-10')}</p>
                    <p>{t('help:answer-1-p-11')}</p>
                    <p>{t('help:answer-1-p-12')}</p>
                </div>
            ),
            title: t('help:question-1')
        },
        {
            answer: (
                <div className="markdown">
                    <p>{t('help:answer-2-p-1')}</p>
                    <p>{t('help:answer-2-p-2')}</p>
                    <p>{t('help:answer-2-p-3')}</p>
                </div>
            ),
            title: t('help:question-2')
        },
        {
            answer: (
                <div className="markdown">
                    <p>{t('help:answer-3-p-1')}</p>
                    <ul>
                        <li>{t('help:answer-3-li-1')}</li>
                        <li>{t('help:answer-3-li-2')}</li>
                        <li>{t('help:answer-3-li-3')}</li>
                    </ul>
                </div>
            ),
            title: t('help:question-3')
        },
        {
            answer: (
                <div className="markdown">
                    <p>{t('help:answer-4-p-1')}</p>
                </div>
            ),
            title: t('help:question-4')
        },
        {
            answer: (
                <div className="markdown">
                    <p>{t('help:answer-5-p-1')}</p>
                </div>
            ),
            title: t('help:question-5')
        },
        {
            answer: (
                <div className="markdown">
                    <p>{t('help:answer-6-p-1')}</p>
                    <p>{t('help:answer-6-p-2')}</p>
                    <p>{t('help:answer-6-p-3')}</p>
                </div>
            ),
            title: t('help:question-6')
        },
        {
            answer: (
                <div className="markdown">
                    <p>{t('help:answer-7-p-1')}</p>
                    <p>{t('help:answer-7-p-2')}</p>
                </div>
            ),
            title: t('help:question-7')
        },
        {
            answer: (
                <div className="markdown">
                    <p>{t('help:answer-8-p-1')}</p>
                    <p>{t('help:answer-8-p-2')}</p>
                    <p>{t('help:answer-8-p-3')}</p>
                    <p>{t('help:answer-8-p-4')}</p>
                    <p>{t('help:answer-8-p-5')}</p>
                    <p>{t('help:answer-8-p-6')}</p>
                    <p>{t('help:answer-8-p-7')}</p>
                    <p>{t('help:answer-8-p-8')}</p>
                </div>
            ),
            title: t('help:question-8')
        },
        {
            answer: (
                <div className="markdown">
                    <p>{t('help:answer-9-p-1')}</p>
                    <p>{t('help:answer-9-p-2')}</p>
                    <p>{t('help:answer-9-p-3')}</p>
                </div>
            ),
            title: t('help:question-9')
        },
        {
            answer: (
                <div className="markdown">
                    <p>{t('help:answer-10-p-1')}</p>
                    <p>{t('help:answer-10-p-2')}</p>
                </div>
            ),
            title: t('help:question-10')
        }
    ];

    return (
        <DashboardLayout description={t('help:meta-description')} title={t('help:page-title')}>
            <div className="lg-px-8 mx-auto px-4 max-w-screen-xl sm:px-6">
                <div className="mx-auto max-w-3xl">
                    <h2 className="text-center text-gray-900 text-3xl font-extrabold leading-9 sm:text-4xl sm:leading-10">
                        {t('help:page-title')}
                    </h2>
                    {questions.map((question, index) => {
                        const { answer, title } = question;
                        const handleClick = () => {
                            setOpen((prevIndex: number) => (index === prevIndex ? -1 : index));
                        };

                        return (
                            <Collapse
                                key={index}
                                content={answer}
                                open={index === open}
                                title={title}
                                onClick={handleClick}
                            />
                        );
                    })}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default HelpPage;
