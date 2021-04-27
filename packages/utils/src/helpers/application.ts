import { GetApplicationQuery } from '@applyfuture/graphql';

import { applicationSteps } from '../constants/applicationSteps';
import { hasBypass } from './eligibility';

export const getStepsLabels = (application: GetApplicationQuery['getApplication']): string[] => {
    const steps = [...applicationSteps.map((step) => step.label)];

    if (application?.program?.applicationFee === -1) {
        steps.splice(2, 1);
        steps.length = 3;
    } else {
        steps.length = 4;
    }

    return steps;
};

export const conditionFilter = (document: any) => {
    if (!document.condition) {
        return true;
    }
    // eslint-disable-next-line no-eval
    return eval(document.condition);
};

export const languagesBypassFilter = (document: any, student: any) => {
    const bypasses = hasBypass(student);

    if (document.isMandatory) {
        if (['toefl', 'ielts', 'toeic', 'fce', 'cae'].includes(document.name) && bypasses.english) {
            return false;
        }
        if (['tef-tcf', 'dalf-delf'].includes(document.name) && bypasses.french) {
            return false;
        }
    }
    return true;
};
