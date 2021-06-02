import {
    createFeedback,
    GetApplicationByStudentQuery,
    GetApplicationQuery,
    updateApplication
} from '@applyfuture/graphql';
import { Modal } from '@applyfuture/ui';
import { graphql, toast } from '@applyfuture/utils';
import Star from '@components/applications/completion-modal/star/Star';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useEffect, useState } from 'react';
import Rater from 'react-rater';

type Props = {
    application:
        | NonNullable<
              NonNullable<GetApplicationByStudentQuery['getApplicationByStudent']>['items']
          >[0]
        | NonNullable<NonNullable<GetApplicationQuery['getApplication']>>
        | null
        | undefined;
};

const CompletionModal: FC<Props> = (props) => {
    const { application } = props;

    const { t } = useTranslation();
    const [open, setOpen] = useState(false);

    const handleViewed = async () => {
        await graphql(updateApplication, {
            input: {
                id: application?.id,
                modalApplicationCompletedViewed: true
            }
        });
    };

    const handleCreateFeedback = async (rating: number) => {
        await graphql(createFeedback, {
            input: {
                applicationId: application?.id,
                rating: rating
            }
        });
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = async () => {
        setOpen(false);
        handleViewed();
    };

    useEffect(() => {
        if (!application) {
            return;
        }

        const visaStep = application.steps.find((step) => step.id === 'visa');
        if (visaStep?.status === 'done' && !application.modalApplicationCompletedViewed) {
            handleOpen();
        }
    }, [application]);

    const handleRate = async (event: any) => {
        const { rating } = event;
        try {
            handleClose();
            handleCreateFeedback(rating);
        } catch (error) {
            toast({
                description: `${error.message}`,
                title: t('common:toast-error-generic-message'),
                variant: 'error'
            });
        }
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <div className="p-6 sm:p-0">
                <div className="flex justify-center">
                    <img
                        alt={t('application:completed-modal-illustration-alt')}
                        className="h-48"
                        src="assets/images/application/close.svg"
                    />
                </div>
                <h2 className="mt-4 text-gray-900 text-2xl font-extrabold tracking-tight leading-9 sm:text-3xl sm:leading-10">
                    {t('application:completed-modal-title')}
                </h2>
                <p className="mt-4">{t('application:completed-modal-content')}</p>
                <p className="mt-2">{t('application:completed-modal-rate-cta')}</p>
                <div className="flex justify-center mt-4">
                    <Rater total={5} onRate={handleRate}>
                        <Star />
                    </Rater>
                </div>
            </div>
        </Modal>
    );
};

export default CompletionModal;
