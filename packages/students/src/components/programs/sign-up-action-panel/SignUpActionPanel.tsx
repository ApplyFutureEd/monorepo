import { ActionPanel, Button } from '@applyfuture/ui';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const SignUpActionPanel: FC = () => {
    const { t } = useTranslation();

    const actions = [
        <Link key={0} href="/onboarding/country">
            <Button>{t('programs:sign-up-action-panel-cta')}</Button>
        </Link>
    ];

    return (
        <div className="mb-4">
            <ActionPanel
                actions={actions}
                backgroundClass="profile-action-panel"
                description={t('programs:sign-up-action-panel-description')}
                title={t('programs:sign-up-action-panel-title')}
            />
        </div>
    );
};

export default SignUpActionPanel;
