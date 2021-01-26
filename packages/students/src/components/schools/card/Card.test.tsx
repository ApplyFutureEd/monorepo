import { Country } from '@applyfuture/models';
import Card from '@components/schools/card/Card';
import { render, screen } from '@testing-library/react';
import React from 'react';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            locale: 'en'
        };
    }
}));

describe('Card', () => {
    const school = {
        city: 'Roma',
        country: 'IT' as Country,
        logo: '8ddb88ed-8510-460b-a51f-860d345cfbea',
        name: 'Accademia delle Arti e Nuove Tecnologie',
        slug: 'aant-accademia-delle-arti-e-nuove-tecnologie-roma'
    };

    it('can render without crashing', () => {
        render(<Card {...school} />);

        const name = screen.getByText('Accademia delle Arti e Nuove Tecnologie');

        expect(name).toBeInTheDocument();
    });
});
