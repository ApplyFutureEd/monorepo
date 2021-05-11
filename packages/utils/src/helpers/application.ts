import { GetApplicationQuery } from '@applyfuture/graphql';

import { applicationSteps } from '../constants/applicationSteps';
import {
    englishTestDocumentsIds,
    frenchTestDocumentsIds,
    germanTestDocumentsIds,
    italianTestDocumentsIds,
    spanishTestDocumentsIds
} from './../constants/documents';
import { hasBypass } from './eligibility';

export const getStepsLabels = (application: GetApplicationQuery['getApplication']): string[] => {
    const steps = [...applicationSteps.map((step) => step.label)];

    if (application?.program?.applicationFee && application?.program?.applicationFee > 0) {
        steps.length = 4;
    } else {
        steps.splice(2, 1);
        steps.length = 3;
    }

    return steps;
};

export const conditionFilter = (document: any, _student: any): boolean => {
    if (!document.condition) {
        return true;
    }
    // eslint-disable-next-line no-eval
    return eval(document.condition);
};

export const languagesBypassFilter = (document: any, student: any): boolean => {
    const bypasses = hasBypass(student);

    if (document.isMandatory) {
        if (englishTestDocumentsIds.includes(document.name) && bypasses.english) {
            return false;
        }
        if (frenchTestDocumentsIds.includes(document.name) && bypasses.french) {
            return false;
        }
        if (italianTestDocumentsIds.includes(document.name) && bypasses.italian) {
            return false;
        }
        if (germanTestDocumentsIds.includes(document.name) && bypasses.german) {
            return false;
        }
        if (spanishTestDocumentsIds.includes(document.name) && bypasses.spanish) {
            return false;
        }
    }
    return true;
};
