import { CardExpiryElement } from '@stripe/react-stripe-js';
import cx from 'classnames';
import { FieldInputProps } from 'formik';
import { FC, ReactNode } from 'react';
import Skeleton from 'react-loading-skeleton';

import { Tooltip } from '../tooltip/Tooltip';

type Props = {
    /**
     * An object containing `onChange`, `onBlur`, `name`, and `value` of the field.
     *
     * https://formik.org/docs/api/useField#fieldinputpropsvalue
     */
    field: FieldInputProps<string>;
    /**
     * If `true`, the component will display a loading skeleton.
     */
    isLoading?: boolean;
    /**
     * The label displayed above the input.
     */
    label?: string;
    /**
     * The tooltip displayed when hovering the label.
     */
    tooltip?: ReactNode;
};

export const CardExpireDateInput: FC<Props> = (props) => {
    const { field, isLoading, label, tooltip, ...rest } = props;

    const withLabelClasses = 'mt-1';

    if (isLoading) {
        return (
            <div>
                {label && (
                    <div>
                        <Skeleton height="15px" width="120px" />
                    </div>
                )}
                <div className="rounded-md">
                    <Skeleton height="47px" width="100%" />
                </div>
            </div>
        );
    }

    return (
        <label className="block font-sans" htmlFor={field.name} {...rest}>
            {label && (
                <Tooltip content={tooltip}>
                    <div>
                        <span className="text-gray-700 text-sm font-medium leading-5">{label}</span>
                    </div>
                </Tooltip>
            )}
            <div
                className={cx({
                    [`${withLabelClasses}`]: label
                })}>
                <CardExpiryElement id={field?.name} />
            </div>
        </label>
    );
};
