import { GetApplicationQuery, GetStudentQuery } from '@applyfuture/graphql';
import { Button, FileUploader } from '@applyfuture/ui';
import { hasBypass } from '@applyfuture/utils';
import { faDownload } from '@fortawesome/pro-light-svg-icons';
import { Field } from 'formik';
import camelCase from 'lodash/camelCase';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

type Props = {
    isLoading: boolean;
    application: GetApplicationQuery['getApplication'];
    student: GetStudentQuery['getStudent'];
};

const Documents: FC<Props> = (props) => {
    const { application, student, isLoading } = props;
    const { t } = useTranslation();
    const skeletons = Array.from({ length: 12 }, (v, k) => k + 1);

    return (
        <div className="inside w-full bg-white rounded-lg shadow overflow-hidden md:w-2/3">
            <div className="hidden px-4 py-5 border-b border-gray-200 sm:px-6 md:block">
                <h3 className="text-gray-900 text-lg font-medium leading-6">
                    {t('application:documents-requested')}
                </h3>
                <p className="mt-1 max-w-2xl text-gray-500 text-sm leading-5">
                    {t('application:documents-requested-details')}
                </p>
            </div>

            <div className="inside-scroll px-4 py-5 overflow-y-scroll sm:p-0">
                <dl>
                    {isLoading
                        ? skeletons.map((document: any, index: number) => {
                              return (
                                  <div
                                      key={index}
                                      className={`${index % 2 ? 'bg-white' : 'bg-gray-50'} ${
                                          index === 0 ? 'mt-2' : 'mt-8'
                                      } sm:mt-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5`}>
                                      <dt className="text-gray-600 text-sm font-medium leading-5">
                                          <div>
                                              <Skeleton height="16px" width="120px" />
                                          </div>
                                      </dt>
                                      <dd className="mt-1 text-gray-900 text-sm leading-5 sm:col-span-1 sm:mt-0">
                                          <div className="mb-2 space-y-8">
                                              <Skeleton height="40px" width="100%" />
                                          </div>
                                      </dd>
                                  </div>
                              );
                          })
                        : application?.program?.requestedDocuments
                              ?.filter((document: any) => {
                                  if (!document.condition) {
                                      return true;
                                  }
                                  // eslint-disable-next-line no-eval
                                  return eval(document.condition);
                              })
                              .filter((document: any) => {
                                  const bypasses = hasBypass(student);

                                  if (document.isMandatory) {
                                      if (
                                          ['toefl', 'ielts', 'toeic', 'fce', 'cae'].includes(
                                              document.name
                                          ) &&
                                          bypasses.english
                                      ) {
                                          return false;
                                      }
                                      if (
                                          ['tef-tcf', 'dalf-delf'].includes(document.name) &&
                                          bypasses.french
                                      ) {
                                          return false;
                                      }
                                  }
                                  return true;
                              })
                              .map((document: any, index: number) => {
                                  return (
                                      <div
                                          key={document.name}
                                          className={`${index % 2 ? 'bg-white' : 'bg-gray-50'} ${
                                              index === 0 ? 'mt-2' : 'mt-8'
                                          } sm:mt-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5`}
                                          id={
                                              isNaN(Number(document.name.charAt(0)))
                                                  ? camelCase(document.name)
                                                  : camelCase(document.name.substring(1))
                                          }>
                                          <dt className="text-gray-600 text-sm font-medium leading-5">
                                              <div className="flex space-x-2">
                                                  <span>
                                                      {/last-3-transcript/.test(document.name)
                                                          ? t(`profile:last-3-transcript`, {
                                                                number:
                                                                    document.name[
                                                                        document.name.length - 1
                                                                    ]
                                                            })
                                                          : t(`profile:${document.name}`)}
                                                  </span>
                                                  {!document.isMandatory && (
                                                      <span
                                                          className="py-0.5 inline-block flex-shrink-0 px-2 text-teal-800 text-xs font-medium leading-4 bg-teal-100 rounded-full"
                                                          style={{ maxHeight: '20px' }}>
                                                          {t('application:optional')}
                                                      </span>
                                                  )}
                                              </div>
                                              <div className="mt-2 text-gray-500 text-sm font-normal leading-5">
                                                  {[
                                                      'toefl',
                                                      'ielts',
                                                      'toeic',
                                                      'fce',
                                                      'cae'
                                                  ].includes(document.name) &&
                                                      t('application:english-test-proof-details')}
                                                  {['tef-tcf', 'dalf-delf'].includes(
                                                      document.name
                                                  ) && t('application:french-test-proof-details')}
                                                  {['gre', 'gmat', 'tage-mage'].includes(
                                                      document.name
                                                  ) &&
                                                      t(
                                                          'application:logic-and-reasoning-test-proof-details'
                                                      )}
                                                  {document.description}
                                              </div>
                                              {document.storageKey && (
                                                  <div className="mt-2">
                                                      <Button
                                                          startIcon={faDownload}
                                                          startIcon={faDownload}
                                                          type="button"
                                                          variant="secondary">
                                                          {t('application:download-template')}
                                                      </Button>
                                                  </div>
                                              )}
                                          </dt>
                                          <dd className="mt-1 text-gray-900 text-sm leading-5 sm:col-span-1 sm:mt-0">
                                              <div className="mb-2 space-y-8">
                                                  <Field
                                                      key={document.name}
                                                      id={document.name}
                                                      name={document.name}>
                                                      {(props: any) => (
                                                          <FileUploader
                                                              isSpecific={document.isSpecific}
                                                              program={application?.program}
                                                              student={student}
                                                              {...props}
                                                          />
                                                      )}
                                                  </Field>
                                              </div>
                                          </dd>
                                      </div>
                                  );
                              })}
                </dl>
            </div>
        </div>
    );
};

export default Documents;
