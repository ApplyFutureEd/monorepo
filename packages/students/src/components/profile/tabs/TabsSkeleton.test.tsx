import TabsSkeleton from '@components/profile/tabs/TabsSkeleton';
import { render } from '@testing-library/react';

describe.skip('TabsSkeleton', () => {
    it('can render without crashing', () => {
        const { container } = render(<TabsSkeleton />);

        const skeleton = container.querySelector('.react-loading-skeleton');

        expect(skeleton).toBeInTheDocument();
    });
});
