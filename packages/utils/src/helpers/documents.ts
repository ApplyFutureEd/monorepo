import { GetDocumentByStudentQuery } from '@applyfuture/graphql';

export const findDocument = (
    documents:
        | NonNullable<GetDocumentByStudentQuery['getDocumentByStudent']>['items']
        | null
        | undefined,
    id: string
): string | null | undefined => {
    return documents?.find((document) => document?.name === id)?.storageKey;
};
