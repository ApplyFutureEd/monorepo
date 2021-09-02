import { render } from '@testing-library/react';

import SkeletonApplicationRow from './SkeletonApplicationRow';

describe('SkeletonApplicationRow', () => {
    it('can render without crashing', () => {
        const { container } = render(<SkeletonApplicationRow />);

        const skeleton = container.querySelector('.react-loading-skeleton');

        expect(skeleton).toBeInTheDocument();
    });
});
