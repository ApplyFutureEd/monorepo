import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import { FC } from 'react';

type Props = {
    title: string;
};

const posts: FC<Props> = (props) => {
    const { title } = props;
    return <DashboardLayout title={title}>Hello</DashboardLayout>;
};

export default posts;
