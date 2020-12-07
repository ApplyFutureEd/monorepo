import TermsOfUse from '@components/landing/root/terms-of-use/TermsOfUse';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import { FC } from 'react';

const TermsOfUsePage: FC = () => {
    return (
        <DashboardLayout description="terms-of-use" title="terms-of-use">
            <TermsOfUse />
        </DashboardLayout>
    );
};

export default TermsOfUsePage;
