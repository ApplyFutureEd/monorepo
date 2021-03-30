import { FormikErrors } from 'formik';

export const scrollToErrors = <FormValues>(errors: FormikErrors<FormValues>): void => {
    const errorKeys = Object.keys(errors);
    if (errorKeys.length > 0) {
        document.getElementsByName(errorKeys[0])[0].focus();
    }
};
