/* eslint-disable @typescript-eslint/ban-types */
import { API, graphqlOperation } from 'aws-amplify';
import { useState } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';

type UseQueryType<ResultType> = {
    isLoading: boolean;
    error: any;
    data: ResultType;
    refetch: () => void;
};

export const useQuery = <ResultType extends {}, VariablesType extends {} = {}>(
    query: string,
    variables?: VariablesType
): UseQueryType<ResultType> => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [data, setData] = useState({} as ResultType);

    const fetchQuery = async (query: string, variables?: VariablesType) => {
        try {
            setIsLoading(true);
            const { data } = (await API.graphql(graphqlOperation(query, variables))) as {
                data: ResultType;
            };

            setData(data);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    const refetch = () => {
        fetchQuery(query, variables);
    };

    useDeepCompareEffect(() => {
        fetchQuery(query, variables);
    }, [query, variables]);

    return {
        data,
        error,
        isLoading,
        refetch
    };
};
