import Input from '@components/core/input/Input';
import { faSearch } from '@fortawesome/pro-light-svg-icons';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';
import { object, string } from 'yup';

type Props = {
    handleSearch: (query: string) => void;
};

const Search: FC<Props> = (props) => {
    const { handleSearch } = props;
    const { t } = useTranslation();

    const validationSchema = object().shape({
        query: string()
    });

    type FormValues = {
        query: string;
    };

    const initialValues: FormValues = {
        query: ''
    };

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        const { query } = values;
        handleSearch(query);
        actions.setSubmitting(false);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {() => {
                return (
                    <Form>
                        <Field id="query" name="query">
                            {(fieldProps: FieldProps) => (
                                <Input
                                    debounce={2000}
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
    );
};

export default Search;
