/* eslint-disable sort-keys */
import { render, screen } from '@testing-library/react';

import StepFormatter from './StepFormatter';

describe('StepFormatter', () => {
    const column = {
        getCellValue: jest.fn(),
        name: 'step',
        title: 'Step'
    };

    const value = [
        {
            id: 'upload-documents',
            date: '',
            isMandatory: true,
            label: 'application:step-upload-documents',
            status: 'DONE'
        },
        {
            id: 'review-documents',
            date: 'Mon May 10 2021 16:04:15 GMT+0200 (heure d’été d’Europe centrale)',
            isMandatory: true,
            label: 'application:step-review-documents',
            status: 'DONE'
        },
        {
            id: 'fees-payment',
            date: 'Mon May 10 2021 16:04:26 GMT+0200 (heure d’été d’Europe centrale)',
            isMandatory: true,
            label: 'application:step-payment',
            status: 'DONE'
        },
        {
            id: 'submission',
            date: 'Mon May 10 2021 16:05:57 GMT+0200 (heure d’été d’Europe centrale)',
            isMandatory: true,
            label: 'application:step-submission',
            status: 'DONE'
        },
        {
            id: 'application-internal-review',
            date: 'Mon May 10 2021 16:05:57 GMT+0200 (heure d’été d’Europe centrale)',
            isMandatory: true,
            label: 'application:timeline-step-internal-review-label',
            status: 'PROGRESS'
        },
        {
            id: 'school-review',
            date: '',
            isMandatory: true,
            label: 'TBD',
            status: 'idle'
        },
        {
            id: 'school-interview',
            date: '',
            isMandatory: true,
            label: 'TBD',
            status: 'idle'
        },
        {
            id: 'school-result',
            date: '',
            isMandatory: true,
            label: 'TBD',
            status: 'idle'
        },
        {
            id: 'school-tuitions-fee-payment',
            date: '',
            isMandatory: true,
            label: 'TBD',
            status: 'idle'
        },
        {
            id: 'decision-letter',
            date: '',
            isMandatory: true,
            label: 'TBD',
            status: 'idle'
        },
        {
            id: 'visa',
            date: '',
            isMandatory: true,
            label: 'TBD',
            status: 'idle'
        }
    ];

    it('can render without crashing', async () => {
        render(<StepFormatter column={column} value={value} />);

        const date = screen.getByText('application:timeline-step-internal-review-label');

        expect(date).toBeInTheDocument();
    });
});
