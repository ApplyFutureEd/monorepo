import { GetDocumentByStudentQuery } from '@applyfuture/graphql';
import camelCase from 'lodash/camelCase';

export const findDocument = (
    documents:
        | NonNullable<GetDocumentByStudentQuery['getDocumentByStudent']>['items']
        | null
        | undefined,
    id: string
): string | null | undefined => {
    return documents?.find((document) => document?.name === id)?.storageKey;
};

export const getIdentifier = (name: string): string => {
    return isNaN(Number(name.charAt(0))) ? camelCase(name) : camelCase(name.substring(1));
};
