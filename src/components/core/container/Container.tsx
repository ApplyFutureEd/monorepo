import cx from 'classnames';
import { FC, ReactNode } from 'react';

type Props = {
    /**
     * Content of the container.
     */
    children: ReactNode;
    /**
     * Components displayed in the header of the container.
     */
    headerComponents?: Array<ReactNode>;
    /**
     * If `false` the inner padding is not applied to the content of the container
     * */
    innerPadding?: boolean;
    /**
     * The title of the container.
     */
    title: string;
};

const Container: FC<Props> = (props) => {
    const { children, headerComponents, innerPadding = true, title } = props;

    const classes = cx({ ['px-4 py-5 sm:px-6']: innerPadding });

    return (
        <div className="bg-white rounded-md shadow overflow-hidden overflow-hidden">
            <div className="px-4 py-5 bg-white border-b border-gray-200 rounded-t-md sm:px-6">
                <div className="flex flex-wrap items-center justify-between -ml-4 -mt-2 sm:flex-no-wrap">
                    <div className="ml-4 mt-2">
                        <div className="flex items-center space-x-4">
                            <h3 className="text-gray-900 text-lg font-medium leading-6">{title}</h3>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex flex-shrink-0 items-center ml-4 mt-2 space-x-2">
                            {headerComponents}
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes}>{children}</div>
        </div>
    );
};

export default Container;
