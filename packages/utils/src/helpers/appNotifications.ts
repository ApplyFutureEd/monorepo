import {
    getStudent,
    GetStudentQuery,
    GetStudentQueryVariables,
    updateStudent,
    UpdateStudentMutation,
    UpdateStudentMutationVariables
} from '@applyfuture/graphql';

import { graphql } from './graphql';

type Options = {
    id: string;
    link: string;
    studentId?: string;
    variables: any;
};

export const sendAppNotification = async (options: Options): Promise<void> => {
    const { id, link, studentId, variables } = options;

    if (!studentId) {
        throw Error('studentId required');
    }

    const student = await graphql<GetStudentQuery, GetStudentQueryVariables>(getStudent, {
        id: studentId
    });
    const currentNotifications = student?.getStudent?.notifications || [];
    const notifications = [
        ...currentNotifications,
        {
            date: new Date().toString(),
            id: id,
            link: link,
            seen: false,
            variables: JSON.stringify(variables)
        }
    ];
    await graphql<UpdateStudentMutation, UpdateStudentMutationVariables>(updateStudent, {
        input: { id: studentId, notifications }
    });
};
