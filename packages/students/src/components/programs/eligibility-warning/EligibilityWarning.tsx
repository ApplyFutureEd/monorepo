import { Button, Container } from '@applyfuture/ui';
import {
    englishTests,
    frenchTests,
    logicAndReasoningTests,
    NonEligibilityReason
} from '@applyfuture/utils';
import { faArrowLeft } from '@fortawesome/pro-solid-svg-icons';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

type Props = {
    isCompleted: boolean;
    isEligible: boolean;
    reasons: Array<NonEligibilityReason>;
};

const EligibilityWarning: FC<Props> = (props) => {
    const { isCompleted, isEligible, reasons } = props;
    const { t } = useTranslation();

    if ((isCompleted && isEligible) || reasons.length === 0) {
        return null;
    }

    return (
        <Container>
            <div className="font-bold">{t('programs:not-eligible-headline')}</div>
            <ul className="my-4 list-inside list-disc">
                {!isCompleted && (
                    <li className="pl-8">{t('programs:complete-your-profile-first')}</li>
                )}
                {reasons
                    ?.filter(
                        (reason) =>
                            !englishTests.includes(reason.id) &&
                            !frenchTests.includes(reason.id) &&
                            !logicAndReasoningTests.includes(reason.id)
                    )
                    .map((reason) => (
                        <li key={reason.id} className="pl-8">
                            {reason.message}
                        </li>
                    ))}
                {reasons?.filter((reason) => englishTests.includes(reason.id)).length > 0 && (
                    <li className="pl-8">{t('programs:fulfill-english-tests')}</li>
                )}
                {reasons
                    ?.filter((reason) => englishTests.includes(reason.id))
                    .map((reason) => (
                        <li key={reason.id} className="pl-16">
                            {reason.message}
                        </li>
                    ))}
                {reasons?.filter((reason) => frenchTests.includes(reason.id)).length > 0 && (
                    <li className="pl-8">{t('programs:fulfill-french-tests')}</li>
                )}
                {reasons
                    ?.filter((reason) => frenchTests.includes(reason.id))
                    .map((reason) => (
                        <li key={reason.id} className="pl-16">
                            {reason.message}
                        </li>
                    ))}
                {reasons?.filter((reason) => logicAndReasoningTests.includes(reason.id)).length >
                    0 && (
                    <li className="pl-8">{t('programs:fulfill-logic-and-reasoning-tests')}</li>
                )}
                {reasons
                    ?.filter((reason) => logicAndReasoningTests.includes(reason.id))
                    .map((reason) => (
                        <li key={reason.id} className="pl-16">
                            {reason.message}
                        </li>
                    ))}
            </ul>

            <div className="flex justify-end w-full space-x-4">
                <Link href="/programs">
                    <Button startIcon={faArrowLeft} type="button" variant="secondary">
                        {t('programs:back-to-programs')}
                    </Button>
                </Link>
                <Link href="/profile/test-scores">
                    <Button type="button" variant="primary">
                        {t('programs:complete-my-profile')}
                    </Button>
                </Link>
            </div>
        </Container>
    );
};

export default EligibilityWarning;
