import Statistics from '@components/statistics/Statistics';
import { Translation, Values } from '@pages/index';
import { render, screen } from '@testing-library/react';

import StatisticsSkeleton from './StatisticsSkeleton';

describe('Statistics', () => {
    const isLoading = false;
    const translations = [
        {
            key: 'bonjour',
            namespace: 'namespace',
            values: { en: 'hello', fr: 'bonjour', zh: '你好' } as Values
        },
        {
            key: 'au revoir',
            namespace: 'namespace',
            values: { en: 'goodbye', fr: 'au revoir', zh: '' } as Values
        }
    ] as Translation[];

    it('can display statistics label without crashing', () => {
        render(<Statistics isLoading={isLoading} translations={translations} />);
        const label = 'Translations';
        const statistics = screen.getByText(label).closest('dt');
        expect(statistics).toBeInTheDocument();
    });

    it('can display translations statistics without crashing', () => {
        render(<Statistics isLoading={isLoading} translations={translations} />);
        const total = '2';
        const complete = '1';
        const uncomplete = '1';
        const completion = '50 %';
        const totalStatistics = screen.getAllByText(total);
        expect(totalStatistics[0]).toBeInTheDocument();
        const completeStatistics = screen.getAllByText(complete);
        expect(completeStatistics[0]).toBeInTheDocument();
        const uncompleteStatistics = screen.getAllByText(uncomplete);
        expect(uncompleteStatistics[0]).toBeInTheDocument();
        const completionStatistics = screen.getAllByText(completion);
        expect(completionStatistics[0]).toBeInTheDocument();
    });

    it('can display skeleton without crashing when loading is true', () => {
        const { container } = render(<StatisticsSkeleton />);
        const skeleton = container.querySelector('.react-loading-skeleton');
        expect(skeleton).toBeInTheDocument();
    });
});
