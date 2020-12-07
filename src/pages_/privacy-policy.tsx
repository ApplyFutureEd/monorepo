import PrivacyPolicy from '@components/landing/root/privacy-policy/PrivacyPolicy';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import { FC } from 'react';

const PrivacyPolicyPage: FC = () => {
    return (
        <DashboardLayout description="privacy-policy" title="privacy-policy">
            <PrivacyPolicy />
        </DashboardLayout>
    );
};

export default PrivacyPolicyPage;
