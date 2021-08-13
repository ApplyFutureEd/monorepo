import { Input } from '@applyfuture/ui';
import { faSearch } from '@fortawesome/pro-light-svg-icons';
import { Field, FieldProps, Form, Formik } from 'formik';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

type Props = {
    handleSearch: (query: string) => void;
};

const Search: FC<Props> = (props) => {
    const { handleSearch } = props;
    const { t } = useTranslation();
    type FormValues = {
        query: string;
    };
    const initialValues: FormValues = {
        query: ''
    };
    const onSubmit = (values: FormValues) => {
        const { query } = values;
        handleSearch(query);
        console.log(`recherche demandée: ${query}`);
    };
    return (
        <div style={{ width: '40vw' }}>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {() => {
                    return (
                        <Form>
                            <Field id="query" name="query">
                                {(fieldProps: FieldProps) => (
                                    <Input
                                        debounce={500}
                                        placeholder={t('programs:search-placeholder')}
                                        startIcon={faSearch}
                                        {...fieldProps}
                                    />
                                )}
                            </Field>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default Search;
