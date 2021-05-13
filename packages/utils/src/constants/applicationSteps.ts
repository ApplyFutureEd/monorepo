export const applicationSteps = [
    {
        date: '',
        id: 'upload-documents',
        isMandatory: true,
        label: 'application:step-upload-documents',
        status: 'IDLE'
    },
    {
        date: '',
        id: 'review-documents',
        isMandatory: true,
        label: 'application:step-review-documents',
        status: 'IDLE'
    },
    {
        date: '',
        id: 'fees-payment',
        isMandatory: true,
        label: 'application:step-payment',
        status: 'IDLE'
    },
    {
        date: '',
        id: 'submission',
        isMandatory: true,
        label: 'application:step-submission',
        status: 'IDLE'
    },
    {
        date: '',
        id: 'application-internal-review',
        isMandatory: true,
        label: 'application:timeline-step-internal-review-label',
        status: 'IDLE'
    },
    {
        date: '',
        id: 'school-review',
        isMandatory: true,
        label: 'application:timeline-step-internal-review-label',
        status: 'IDLE'
    },
    {
        date: '',
        id: 'school-interview',
        isMandatory: true,
        label: 'application:timeline-step-school-interview-label',
        status: 'IDLE'
    },
    {
        date: '',
        id: 'school-result',
        isMandatory: true,
        label: 'application:timeline-step-school-result-label',
        status: 'IDLE'
    },
    {
        date: '',
        id: 'school-tuitions-fee-payment',
        isMandatory: true,
        label: 'application:timeline-step-tuitions-fee-label',
        status: 'IDLE'
    },
    {
        date: '',
        id: 'decision-letter',
        isMandatory: true,
        label: 'application:timeline-step-decision-letter-label',
        status: 'IDLE'
    },
    {
        date: '',
        id: 'visa',
        isMandatory: true,
        label: 'application:timeline-step-visa-label',
        status: 'IDLE'
    }
];

export const getApplicationStepLabel = (id: string | undefined): string =>
    applicationSteps.find((step) => step.id === id)?.label || '';
