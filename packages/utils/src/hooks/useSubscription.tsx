/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-types */
import { API, graphqlOperation } from 'aws-amplify';
import { useEffect, useState } from 'react';

type ConfigType<VariableType extends {}> = {
    query: string;
    key: string;
    variables?: VariableType;
};

export const useSubscription = <ItemType extends { id: string }, VariablesType extends {} = {}>({
    config,
    itemData
}: {
    config?: ConfigType<VariablesType>;
    itemData?: ItemType;
} = {}) => {
    const [item, update] = useState<ItemType | undefined>(itemData);

    useEffect(() => {
        let unsubscribe;
        if (config) {
            const { query, key, variables } = config;
            const subscription = API.graphql(graphqlOperation(query, variables)) as any;
            const sub = subscription.subscribe({
                next: (payload: any) => {
                    try {
                        const {
                            value: {
                                data: { [key]: item }
                            }
                        }: {
                            value: { data: { [key: string]: ItemType } };
                        } = payload;

                        update(item);
                    } catch (error) {
                        console.error(
                            `${error.message} - Check the key property: the current value is ${key}`
                        );
                    }
                }
            });
            unsubscribe = () => {
                sub.unsubscribe();
            };
        }
        return unsubscribe;
    }, [JSON.stringify(config)]);

    return [item];
};
