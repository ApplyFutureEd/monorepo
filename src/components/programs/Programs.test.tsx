import Programs from '@components/programs/Programs';
import { render, screen } from '@testing-library/react';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            locale: 'en'
        };
    }
}));

jest.mock('@utils/hooks/useQuery', () => ({
    useQuery() {
        return {
            data: {}
        };
    }
}));

describe('Programs', () => {
    it('can render without crashing', () => {
        render(<Programs />);

        const title = screen.getByText(/programs/);

        expect(title).toBeInTheDocument();
    });
});
