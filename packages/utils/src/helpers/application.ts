import {
    getApplicationByStudent,
    GetApplicationByStudentQuery,
    GetApplicationQuery
} from '@applyfuture/graphql';
import intersection from 'lodash/intersection';

import { applicationSteps } from '../constants/applicationSteps';
import {
    englishTestDocumentsIds,
    frenchTestDocumentsIds,
    germanTestDocumentsIds,
    italianTestDocumentsIds,
    logicAndReasoningTestDocumentsIds,
    spanishTestDocumentsIds
} from './../constants/documents';
import { hasBypass } from './eligibility';
import { graphql } from './graphql';

export const checkApplicationExistance = async (
    studentId?: string,
    programId?: string
): Promise<{ applicationId: string | null; stepId: string | null }> => {
    if (!studentId) {
        throw Error('Missing studentId');
    }
    if (!programId) {
        throw Error('Missing programId');
    }

    const result = await graphql<GetApplicationByStudentQuery>(getApplicationByStudent, {
        studentId: studentId
    });

    const currentApplications = result.getApplicationByStudent?.items || [];

    for (let index = 0; index < currentApplications.length; index++) {
        const application = currentApplications[index];
        if (application?.program?.id === programId) {
            const currentStep =
                application?.steps?.find((step: any) => step?.status === 'PROGRESS') ||
                application?.steps?.find((step: any) => step?.status === 'ERROR');

            if (!currentStep) {
                return { applicationId: application?.id, stepId: 'visa' };
            }

            return { applicationId: application?.id, stepId: currentStep?.id };
        }
    }

    return { applicationId: null, stepId: null };
};

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

export const oneOfDocumentKindFilter = (document: any, documentsIds: (string | undefined)[]) => {
    if (
        englishTestDocumentsIds.includes(document.name) &&
        intersection(documentsIds, englishTestDocumentsIds).length > 0
    ) {
        return false;
    }
    if (
        frenchTestDocumentsIds.includes(document.name) &&
        intersection(documentsIds, frenchTestDocumentsIds).length > 0
    ) {
        return false;
    }
    if (
        logicAndReasoningTestDocumentsIds.includes(document.name) &&
        intersection(documentsIds, logicAndReasoningTestDocumentsIds).length > 0
    ) {
        return false;
    }
    return true;
};
