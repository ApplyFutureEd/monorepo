import { Button, Modal } from '@applyfuture/ui';
import {
    englishTests,
    logicAndReasoningTests,
    NonEligibilityReason,
    otherLanguagesTests
} from '@applyfuture/utils';
import { faExclamationCircle } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

type Props = {
    handleClose: () => void;
    isCompleted: boolean;
    open: boolean;
    reasons: Array<NonEligibilityReason>;
};

const EligibilityWarningModal: FC<Props> = (props) => {
    const { handleClose, isCompleted, open, reasons } = props;
    const { t } = useTranslation();

    return (
        <Modal open={open} onClose={handleClose}>
            <div className="sm:flex sm:items-start">
                <div className="text-orange-600 bg-orange-100 flex flex-shrink-0 items-center justify-center mx-auto w-12 h-12 rounded-full sm:mx-0 sm:w-10 sm:h-10">
                    <FontAwesomeIcon icon={faExclamationCircle} size="lg" />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3 className="text-gray-900 text-lg font-medium leading-6" id="modal-headline">
                        {t('programs:not-eligible')}
                    </h3>
                    <div className="mt-2">
                        <div className="text-gray-500 text-sm leading-5">
                            <div className="font-bold">{t('programs:not-eligible-headline')}</div>
                            <ul className="my-4 list-inside list-disc">
                                {!isCompleted && (
                                    <li className="pl-8">
                                        {t('programs:complete-your-profile-first')}
                                    </li>
                                )}
                                {reasons
                                    ?.filter(
                                        (reason) =>
                                            !englishTests.includes(reason.id) &&
                                            !otherLanguagesTests.includes(reason.id) &&
                                            !logicAndReasoningTests.includes(reason.id)
                                    )
                                    .map((reason) => (
                                        <li key={reason.id} className="pl-8">
                                            {reason.message}
                                        </li>
                                    ))}
                                {reasons?.filter((reason) => englishTests.includes(reason.id))
                                    .length > 0 && (
                                    <li className="pl-8">{t('programs:fulfill-english-tests')}</li>
                                )}
                                {reasons
                                    ?.filter((reason) => englishTests.includes(reason.id))
                                    .map((reason) => (
                                        <li key={reason.id} className="pl-16">
                                            {reason.message}
                                        </li>
                                    ))}
                                {reasons?.filter((reason) =>
                                    otherLanguagesTests.includes(reason.id)
                                ).length > 0 && (
                                    <li className="pl-8">
                                        {t('programs:fulfill-other-languages-tests')}
                                    </li>
                                )}
                                {reasons
                                    ?.filter((reason) => otherLanguagesTests.includes(reason.id))
                                    .map((reason) => (
                                        <li key={reason.id} className="pl-16">
                                            {reason.message}
                                        </li>
                                    ))}
                                {reasons?.filter((reason) =>
                                    logicAndReasoningTests.includes(reason.id)
                                ).length > 0 && (
                                    <li className="pl-8">
                                        {t('programs:fulfill-logic-and-reasoning-tests')}
                                    </li>
                                )}
                                {reasons
                                    ?.filter((reason) => logicAndReasoningTests.includes(reason.id))
                                    .map((reason) => (
                                        <li key={reason.id} className="pl-16">
                                            {reason.message}
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-end mt-2 w-full">
                        <Link href="/profile/test-scores">
                            <Button type="button" variant="primary">
                                {t('programs:complete-my-profile')}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default EligibilityWarningModal;
