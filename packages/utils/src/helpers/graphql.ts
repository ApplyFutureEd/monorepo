/* eslint-disable @typescript-eslint/ban-types */
import { API, graphqlOperation } from 'aws-amplify';

export const graphql = async <ResultType extends {}, VariablesType extends {} = {}>(
    query: string,
    variables?: VariablesType
): Promise<ResultType> => gqlOp<ResultType, VariablesType>(query, variables);

const gqlOp = async <ResultType extends {}, VariablesType extends {} = {}>(
    query: string,
    variables?: VariablesType
): Promise<ResultType> => {
    const { data } = (await API.graphql(graphqlOperation(query, variables))) as {
        data: ResultType;
    };
    return data;
};
