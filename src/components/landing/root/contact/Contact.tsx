import ContactForm from '@components/landing/root/contact/ContactForm';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const Contact: FC = () => {
    const { t } = useTranslation();

    return (
        <section className="-mt-16 pt-16" id="contact">
            <div className="relative bg-white">
                <div className="absolute inset-0">
                    <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50"></div>
                </div>
                <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
                    <div className="px-4 py-8 bg-gray-50 sm:px-6 lg:col-span-2 lg:px-8 lg:py-8 xl:pr-12">
                        <div className="mx-auto max-w-lg">
                            <h2 className="text-gray-900 text-2xl font-extrabold tracking-tight leading-8 sm:text-3xl sm:leading-9">
                                {t('landing:contact-headline')}
                            </h2>
                            <p className="mt-3 text-gray-500 text-lg leading-6">
                                {t('landing:contact-paragraph-1')}
                            </p>
                            <p className="mt-3 text-gray-500 text-lg leading-6">
                                {t('landing:contact-paragraph-2')}
                            </p>
                            <dl className="mt-8 text-gray-500 text-base leading-6">
                                <div className="mt-6">
                                    <dt className="sr-only">Postal address</dt>
                                    <dd className="flex">
                                        <FontAwesomeIcon
                                            className="flex-shrink-0 w-6 h-6 text-gray-400"
                                            fixedWidth={true}
                                            icon={faMapMarkerAlt}
                                            size="lg"
                                        />
                                        <span className="ml-3">
                                            87 rue de Rome, 75017 Paris, France
                                        </span>
                                    </dd>
                                </div>
                                <div className="mt-3">
                                    <dt className="sr-only">Email</dt>
                                    <dd className="flex items-center">
                                        <FontAwesomeIcon
                                            className="flex-shrink-0 w-6 h-6 text-gray-400"
                                            fixedWidth={true}
                                            icon={faEnvelope}
                                            size="lg"
                                        />
                                        <a
                                            className="ml-3 text-indigo-600 underline"
                                            href="mailto:hello@applyfuture.com">
                                            hello@applyfuture.com
                                        </a>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <div className="px-4 py-8 bg-white sm:px-6 lg:col-span-3 lg:px-8 lg:py-8 xl:pl-12">
                        <div className="mx-auto max-w-lg lg:max-w-none">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
