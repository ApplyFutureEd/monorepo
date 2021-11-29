import { Button } from '@applyfuture/ui';
import { faArrowLeft } from '@fortawesome/pro-solid-svg-icons';
import { faArrowRight } from '@fortawesome/pro-solid-svg-icons';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

type Props = {
    currentPage: number;
    paginate?: (pageNumber: number) => void;
    paginateBack?: () => void;
    paginateFront?: () => void;
    postsPerPage: number;
    totalPosts: number;
};

const Pagination: FC<Props> = (props) => {
    const { t } = useTranslation();
    const { currentPage, paginate, paginateBack, paginateFront, postsPerPage, totalPosts } = props;

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="flex items-center justify-between mt-16 px-4 border-t border-gray-200 sm:px-0">
            <div className="flex flex-1 mt-2 w-0">
                {currentPage !== 1 ? (
                    <Button
                        startIcon={faArrowLeft}
                        variant="text"
                        onClick={() => {
                            paginateBack && paginateBack();
                        }}>
                        {t('blog:pagination-previous')}
                    </Button>
                ) : (
                    ''
                )}
            </div>
            <nav className="hidden md:flex md:-mt-4">
                <ul className="flex pl-0 rounded list-none">
                    <li>
                        {pageNumbers.map((number) => (
                            <button
                                key={number}
                                className={
                                    currentPage === number
                                        ? 'border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium'
                                }
                                onClick={() => {
                                    paginate && paginate(number);
                                }}>
                                {number}
                            </button>
                        ))}
                    </li>
                </ul>
            </nav>
            <div className="flex flex-1 justify-end mt-2 w-0">
                {Math.ceil(totalPosts / postsPerPage) === currentPage ? (
                    ''
                ) : (
                    <Button
                        endIcon={faArrowRight}
                        variant="text"
                        onClick={() => {
                            paginateFront && paginateFront();
                        }}>
                        {t('blog:pagination-next')}
                    </Button>
                )}
            </div>
        </nav>
    );
};

export default Pagination;
