import { ActionPanel, Button } from '@applyfuture/ui';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const ProfileActionPanel: FC = () => {
    const { t } = useTranslation();

    const actions = [
        <Link key={0} href="/profile/general-information">
            <Button>{t('programs:profile-action-panel-cta')}</Button>
        </Link>
    ];

    return (
        <div className="mb-4">
            <ActionPanel
                actions={actions}
                backgroundClass="profile-action-panel"
                description={t('programs:profile-action-panel-description')}
                title={t('programs:profile-action-panel-title')}
            />
        </div>
    );
};

export default ProfileActionPanel;
