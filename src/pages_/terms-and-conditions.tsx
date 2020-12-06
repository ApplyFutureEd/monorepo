import TermsAndConditions from '@components/landing/root/termsAndConditions/TermsAndConditions';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import { FC } from 'react';

const HelpPage: FC = () => {
    return (
        <DashboardLayout description="terms-and-conditions" title="terms-and-conditons">
            <TermsAndConditions />
        </DashboardLayout>
    );
};

export default HelpPage;