export const applicationSteps = [
    {
        date: new Date().toString(),
        id: 'upload-documents',
        isMandatory: true,
        label: 'application:step-upload-documents',
        status: 'PROGRESS',
        timelineLabel: 'application:timeline-step-opened-label'
    },
    {
        date: '',
        id: 'review-documents',
        isMandatory: true,
        label: 'application:step-review-documents',
        status: 'IDLE',
        timelineLabel: 'application:timeline-step-signed-label'
    },
    {
        date: '',
        id: 'fees-payment',
        isMandatory: true,
        label: 'application:step-payment',
        status: 'IDLE',
        timelineLabel: 'application:timeline-step-fees-paid-label'
    },
    {
        date: '',
        id: 'submission',
        isMandatory: true,
        label: 'application:step-submission',
        status: 'IDLE',
        timelineLabel: 'application:timeline-step-submitted-label'
    },
    {
        date: '',
        id: 'internal-review',
        isMandatory: true,
        label: 'application:timeline-step-internal-review-label',
        status: 'IDLE',
        timelineLabel: 'application:timeline-step-internal-review-label'
    },
    {
        date: '',
        id: 'school-review',
        isMandatory: true,
        label: 'application:timeline-step-internal-review-label',
        status: 'IDLE',
        timelineLabel: 'application:timeline-step-school-review-label'
    },
    {
        date: '',
        id: 'school-interview',
        isMandatory: true,
        label: 'application:timeline-step-school-interview-label',
        status: 'IDLE',
        timelineLabel: 'application:timeline-step-school-interview-label'
    },
    {
        date: '',
        id: 'school-result',
        isMandatory: true,
        label: 'application:timeline-step-school-result-label',
        status: 'IDLE',
        timelineLabel: 'application:timeline-step-school-result-label'
    },
    {
        date: '',
        id: 'school-tuitions-fee-payment',
        isMandatory: true,
        label: 'application:timeline-step-tuitions-fee-label',
        status: 'IDLE',
        timelineLabel: 'application:timeline-step-tuitions-fee-label'
    },
    {
        date: '',
        id: 'decision-letter',
        isMandatory: true,
        label: 'application:timeline-step-decision-letter-label',
        status: 'IDLE',
        timelineLabel: 'application:timeline-step-decision-letter-label'
    },
    {
        date: '',
        id: 'visa',
        isMandatory: true,
        label: 'application:timeline-step-visa-label',
        status: 'IDLE',
        timelineLabel: 'application:timeline-step-visa-label'
    }
];
