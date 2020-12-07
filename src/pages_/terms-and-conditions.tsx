import TermsAndConditions from '@components/landing/root/terms-and-conditions/TermsAndConditions';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import { FC } from 'react';

const TermsAndContionsPage: FC = () => {
    return (
        <DashboardLayout description="terms-and-conditions" title="terms-and-conditons">
            <TermsAndConditions />
        </DashboardLayout>
    );
};

export default TermsAndContionsPage;
