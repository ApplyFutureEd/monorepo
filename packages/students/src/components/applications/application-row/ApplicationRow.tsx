import { GetApplicationByStudentQuery } from '@applyfuture/graphql';
import { SupportedLocale } from '@applyfuture/models';
import { Timeline } from '@applyfuture/ui';
import { date, toShortId } from '@applyfuture/utils';
import CompletionModal from '@components/applications/completion-modal/CompletionModal';
import { config } from '@components/applications/timeline/config';
import {
    faChevronDown,
    faChevronUp,
    faMapMarkerAlt,
    faUniversity
} from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

type Props = {
    application: NonNullable<
        NonNullable<GetApplicationByStudentQuery['getApplicationByStudent']>['items']
    >[0];
    onClick: () => void;
    open: boolean;
};

const ApplicationRow: FC<Props> = (props) => {
    const { application, onClick, open } = props;
    const router = useRouter();
    const locale = router.locale as SupportedLocale;
    const { t } = useTranslation();

    return (
        <div>
            <button
                className="hover:bg-gray-50 focus:bg-gray-50 block w-full focus:outline-none cursor-pointer transition duration-150 ease-in-out"
                onClick={onClick}>
                <div className="flex items-center px-4 py-4 sm:px-6">
                    <div className="flex flex-1 items-center min-w-0">
                        <div className="flex-shrink-0">
                            <img
                                alt={`${application?.program?.school?.logo} logo`}
                                className="w-12 h-12"
                                src={`${process.env.ASSETS_CDN_URL}/${application?.program?.school?.logo}`}
                            />
                        </div>
                        <div className="flex-1 px-4 min-w-0 md:grid md:gap-16 md:grid-cols-2">
                            <div>
                                <div className="text-left text-gray-900 hover:text-indigo-500 text-sm font-bold leading-5">
                                    <Link href={`/programs/${application?.program?.slug}`}>
                                        {application?.program?.name}
                                    </Link>
                                </div>
                                <div className="flex items-center mt-2 text-left text-gray-500 text-sm leading-5">
                                    <Link href={`/schools/${application?.program?.school?.slug}`}>
                                        <div className="flex flex-col hover:text-indigo-500 space-y-2 md:flex-row md:space-x-4 md:space-y-0">
                                            <div className="flex items-baseline space-x-1">
                                                <FontAwesomeIcon icon={faUniversity} />
                                                <div>{application?.program?.school?.name}</div>
                                            </div>
                                            <div className="flex items-baseline space-x-1">
                                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                                <div>
                                                    {application?.program?.city},{' '}
                                                    {application?.program?.country}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <div className="text-left text-gray-900 text-sm leading-5">
                                    {t('application:id')}: <b>{toShortId(application?.id)}</b>
                                </div>
                                <div className="mt-2 text-left text-gray-900 text-sm leading-5">
                                    {t('application:intake')}:{' '}
                                    <b>{date({ locale: locale, value: application?.intake })}</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        {open ? (
                            <FontAwesomeIcon icon={faChevronDown} />
                        ) : (
                            <FontAwesomeIcon icon={faChevronUp} />
                        )}
                    </div>
                </div>
            </button>
            {open && application?.steps && (
                <div className="px-4 py-4 sm:px-6">
                    <Timeline
                        ModalComponent={CompletionModal}
                        application={application}
                        config={config}
                    />
                </div>
            )}
        </div>
    );
};

export default ApplicationRow;
