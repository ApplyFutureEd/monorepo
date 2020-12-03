import ProgramCard from '@components/programs/program-card/ProgramCard';
import React, { ReactNode } from 'react';

export default {
    component: ProgramCard,
    title: 'ProgramCard'
};

export const Default = (): ReactNode => {
    return <ProgramCard program={'toto'} />;
};
