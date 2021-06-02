import { Head } from '@applyfuture/ui';
import OnboardingHeader from '@components/onboarding/onboarding-header/OnboardingHeader';
import { FC, ReactNode } from 'react';

type Props = {
    children: ReactNode;
    description?: string;
    title: string;
};

export const OnboardingLayout: FC<Props> = (props) => {
    const { children, description, title } = props;

    return (
        <>
            <Head description={description} title={title} />
            <OnboardingHeader />
            <main className="pt-header container">{children}</main>
        </>
    );
};

export default OnboardingLayout;
