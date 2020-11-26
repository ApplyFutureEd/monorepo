import { FieldInputProps } from 'formik';
import { FC } from 'react';

type Props = {
    /**
     * An object containing `onChange`, `onBlur`, `name`, and `value` of the field.
     *
     * https://formik.org/docs/api/useField#fieldinputpropsvalue
     */
    field: FieldInputProps<string>;
    /**
     * The label displayed next to the input.
     */
    label: string;
    /**
     * The optional details displayed under the label.
     */
    details?: string;
};

const Checkbox: FC<Props> = (props) => {
    const { field, label, details } = props;

    return (
        <div className="relative flex items-start">
            <div className="flex items-center h-5">
                <input
                    checked={Boolean(field.value)}
                    className="form-checkbox ease-in-out` w-4 h-4 text-indigo-600 transition duration-150"
                    id={field.name}
                    name={field.name}
                    type="checkbox"
                    onBlur={field.onBlur}
                    onChange={field.onChange}
                />
            </div>
            <div className="ml-3 text-sm leading-5">
                <label className="text-gray-700 font-medium" htmlFor={field.name}>
                    {label}
                </label>
                {details && <div className="text-gray-500">{details}</div>}
            </div>
        </div>
    );
};

export default Checkbox;
