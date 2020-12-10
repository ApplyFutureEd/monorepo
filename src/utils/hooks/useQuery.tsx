/* eslint-disable @typescript-eslint/ban-types */
import { API, graphqlOperation } from 'aws-amplify';
import { isArray, merge, mergeWith } from 'lodash';
import { useState } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';

type UseQueryType<ResultType> = {
    data: ResultType;
    error: any;
    fetchMore: (nextToken: string) => void;
    isLoading: boolean;
    refetch: () => void;
};

const customizer = (objValue: any, srcValue: any) => {
    if (isArray(objValue)) {
        return objValue.concat(srcValue);
    }
};

export const useQuery = <ResultType extends {}, VariablesType extends {} = {}>(
    query: string,
    variables?: VariablesType
): UseQueryType<ResultType> => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [data, setData] = useState({} as ResultType);

    const fetchQuery = async (query: string, variables?: VariablesType, nextToken?: string) => {
        try {
            setIsLoading(true);
            const { data } = (await API.graphql(
                graphqlOperation(query, { ...variables, nextToken })
            )) as {
                data: ResultType;
            };
            if (nextToken) {
                setData((prevData) => mergeWith(prevData, data, customizer));
            } else {
                setData(data);
            }
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchMore = (nextToken: string) => {
        fetchQuery(query, variables, nextToken);
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
        fetchMore,
        isLoading,
        refetch
    };
};
