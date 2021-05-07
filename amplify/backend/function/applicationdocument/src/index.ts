import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import AWS from 'aws-sdk';
import kebabCase from 'lodash/kebabCase';
import PDFDocument from 'pdfkit';

import { Student } from './packages/graphql/src/API';
import { getCambridgeAdvancedLabel } from './packages/utils/src/constants/cambridgeAdvancedResults';
import { getCambridgeFirstLabel } from './packages/utils/src/constants/cambridgeFirstResults';
import { getCountryLabel } from './packages/utils/src/constants/countries';
import { getEducationLevelLabel } from './packages/utils/src/constants/educationLevels';
import { getLanguageLabel } from './packages/utils/src/constants/languages';
import { getLanguageLevelLabel } from './packages/utils/src/constants/languagesLevels';
import { date } from './packages/utils/src/helpers/date';
import { toShortId } from './packages/utils/src/helpers/id';

const s3 = new AWS.S3();

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        if (!event.body) {
            return {
                body: JSON.stringify(event.body),
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                statusCode: 500
            };
        }

        const { application } = JSON.parse(event.body);

        // Generate PDF file
        const pdfBuffer = await new Promise((resolve) => {
            const doc = new PDFDocument();

            doc.image('./logo.jpg', {
                fit: [160, 32]
            });
            doc.moveDown();
            doc.moveDown();

            doc.fontSize(8);
            doc.text(`Application ID : ${toShortId(application.id)}`);
            doc.text(`School : ${application.program.school.name}`);
            doc.text(`Program : ${application.program.name}`);
            doc.text(`Campus : ${application.program.city}`);
            doc.text(`Intake : ${date({ value: application.intake })}`);
            doc.moveDown();

            doc.fontSize(14);
            doc.text(`I. General Information`);
            doc.moveDown();

            doc.fontSize(12);
            doc.text(`a) Personal Information`);
            doc.moveDown();

            doc.fontSize(8);
            doc.text(`Name : ${application.student.firstName}`);
            doc.text(`Middle Name : ${application.student.middleName || 'N/A'}`);
            doc.text(`Last Name : ${application.student.lastName}`);
            doc.moveDown();

            doc.text(`Email : ${application.student.email}`);
            doc.text(`Phone Number : ${application.student.phoneNumber}`);
            doc.moveDown();

            doc.text(`Date of Birth : ${date({ value: application.student.birthday })}`);
            doc.text(`First Language : ${getLanguageLabel(application.student.firstLanguage)}`);
            doc.text(`Nationality : ${getCountryLabel(application.student.nationality)}`);
            doc.moveDown();

            doc.text(`Passport Number : ${application.student.passportNumber}`);
            doc.text(`Gender : ${application.student.gender}`);
            doc.text(`Marital Status : ${application.student.maritalStatus}`);
            doc.moveDown();

            doc.fontSize(12);
            doc.text(`b) Parents' Information`);
            doc.moveDown();

            doc.fontSize(8);
            doc.text(`Father's First Name : ${application.student.fatherFirstName}`);
            doc.text(`Father's Last Name  : ${application.student.fatherLastName}`);
            doc.moveDown();

            doc.text(`Mother's First Name : ${application.student.motherFirstName}`);
            doc.text(`Mother's Maiden Name  : ${application.student.motherMaidenName}`);
            doc.moveDown();

            doc.text(
                `Guardian/Sponsor's First Name : ${application.student.guardianFirstName || 'N/A'}`
            );
            doc.text(
                `Guardian/Sponsor's Last Name  : ${application.student.guardianLastName || 'N/A'}`
            );
            doc.moveDown();

            doc.text(`Parent's Address  : ${application.student.parentsAddress}`);
            doc.text(`Parent's Phone Number  : ${application.student.parentsPhoneNumber}`);
            doc.text(`Parent's Email  : ${application.student.parentsEmail}`);
            doc.moveDown();
            doc.moveDown();

            doc.fontSize(14);
            doc.text(`II. Education History`);
            doc.moveDown();

            doc.fontSize(12);
            doc.text(`a) Education Summary`);
            doc.moveDown();

            doc.fontSize(8);
            doc.text(
                `Education Country : ${getCountryLabel(application.student.educationCountry)}`
            );
            doc.text(getEducationLevelLabel(application.student.highestEducationLevel));
            doc.text(`GPA (0 - 4): ${application.student.gradePointAverage}`);
            doc.moveDown();

            doc.fontSize(12);
            doc.text(`b) School Attended`);
            doc.moveDown();

            application.student.schoolsAttended.length > 0 &&
                application.student.schoolsAttended.forEach(
                    (school: NonNullable<Student['schoolsAttended']>[0]) => {
                        doc.fontSize(8);
                        doc.text(`Name : ${school?.name}`);
                        doc.text(`Address : ${school?.address}`);
                        doc.text(
                            `Level of Education : ${getEducationLevelLabel(school?.educationLevel)}`
                        );
                        doc.text(
                            `Primary Language Instruction : ${getLanguageLabel(
                                school?.primaryLanguageInstruction
                            )}`
                        );
                        doc.text(
                            `Degree Awarded : ${getEducationLevelLabel(school?.degreeAwarded)}`
                        );
                        doc.text(`Degree Awarded On : ${date({ value: school?.degreeAwardedOn })}`);
                        doc.text(
                            `Attended Institution From : ${date({
                                value: school?.attendedInstitutionFrom
                            })}`
                        );
                        doc.text(
                            `Attended Institution To : ${date({
                                value: school?.attendedInstitutionTo
                            })}`
                        );
                        doc.moveDown();
                    }
                );
            doc.moveDown();

            doc.fontSize(14);
            doc.text(`III. Test Scores`);
            doc.moveDown();

            doc.fontSize(12);
            doc.text(`a) English tests`);
            doc.moveDown();

            doc.fontSize(8);
            doc.text(`TOEFL (310 - 667) : ${application.student.testToefl || 'N/A'}`);
            doc.text(
                `TOEFL Exam Date : ${date({ value: application.student.testToeflDate }) || 'N/A'}`
            );
            doc.moveDown();

            doc.text(`IELTS (0 - 9) : ${application.student.testIelts || 'N/A'}`);
            doc.text(
                `IELTS Exam Date : ${date({ value: application.student.testIeltsDate }) || 'N/A'}`
            );
            doc.moveDown();

            doc.text(`TOEIC (0 - 990) : ${application.student.testToeic || 'N/A'}`);
            doc.text(
                `TOEIC Exam Date : ${date({ value: application.student.tesToeicDate }) || 'N/A'}`
            );
            doc.moveDown();

            doc.text(
                `FCE (A - E) : ${
                    getCambridgeFirstLabel(application.student.testCambridgeFirst) || 'N/A'
                }`
            );
            doc.text(
                `FCE Exam Date : ${
                    date({ value: application.student.testCambridgeFirstDate }) || 'N/A'
                }`
            );
            doc.moveDown();

            doc.text(
                `CAE (A - C) : ${
                    getCambridgeAdvancedLabel(application.student.testCambridgeAdvanced) || 'N/A'
                }`
            );
            doc.text(
                `CAE Exam Date : ${
                    date({ value: application.student.testCambridgeAdvancedDate }) || 'N/A'
                }`
            );
            doc.moveDown();

            doc.fontSize(12);
            doc.text(`b) Other languages tests`);
            doc.moveDown();

            doc.fontSize(8);
            doc.text(
                `TCF / TEF (C2 - A1) : ${
                    getLanguageLevelLabel(application.student.testTcftef) || 'N/A'
                }`
            );
            doc.text(
                `TCF / TEF Exam Date : ${
                    date({ value: application.student.testTcftefDate }) || 'N/A'
                }`
            );
            doc.moveDown();

            doc.text(
                `DELF / DALF (C2 - A1) : ${
                    getLanguageLevelLabel(application.student.testDelfdalf) || 'N/A'
                }`
            );
            doc.text(
                `DELF / DALF Exam Date : ${
                    date({ value: application.student.testDalfdelfDate }) || 'N/A'
                }`
            );
            doc.moveDown();

            doc.text(
                `Goethe (C2 - A1) : ${
                    getLanguageLevelLabel(application.student.testGoethe) || 'N/A'
                }`
            );
            doc.text(
                `Goethe Exam Date : ${date({ value: application.student.testGoetheDate }) || 'N/A'}`
            );
            doc.moveDown();

            doc.text(
                `DELE (C2 - A1) : ${getLanguageLevelLabel(application.student.testDele) || 'N/A'}`
            );
            doc.text(
                `DELE Exam Date : ${date({ value: application.student.testDeleDate }) || 'N/A'}`
            );
            doc.moveDown();

            doc.text(
                `CELI / CILS / IT / PLIDA (C2 - A1) : ${
                    getLanguageLevelLabel(application.student.testCeliCilsItPlida) || 'N/A'
                }`
            );
            doc.text(
                `CELI / CILS / IT / PLIDA Exam Date : ${
                    date({ value: application.student.testCeliCilsItPlidaDate }) || 'N/A'
                }`
            );
            doc.moveDown();

            doc.fontSize(12);
            doc.text(`c) Logic and Reasoning tests`);
            doc.moveDown();

            doc.fontSize(8);
            doc.text(`GRE (260 - 344) : ${application.student.testGre || 'N/A'}`);
            doc.text(
                `GRE Exam Date : ${date({ value: application.student.testGreDate }) || 'N/A'}`
            );
            doc.moveDown();

            doc.text(`GMAT (200 - 800) : ${application.student.testGmat || 'N/A'}`);
            doc.text(
                `GMAT Exam Date : ${date({ value: application.student.testGmatDate }) || 'N/A'}`
            );
            doc.moveDown();

            doc.text(`TAGE MAGE (0 - 600) : ${application.student.testTagemage || 'N/A'}`);
            doc.text(
                `TAGE MAGE Exam Date : ${
                    date({ value: application.student.testTagemageDate }) || 'N/A'
                }`
            );
            doc.moveDown();
            doc.moveDown();

            doc.fontSize(14);
            doc.text(`IV. Background Information`);
            doc.moveDown();

            doc.fontSize(12);
            doc.text(`a) Background Information`);
            doc.moveDown();

            doc.fontSize(8);
            doc.text(
                `Do you have a valid Study Permit / Visa? : ${
                    application.student.validVisa ? 'Yes' : 'No'
                }`
            );
            doc.text(
                `Have you been refused a Visa from a european country? : ${
                    application.student.refusedVisa ? 'Yes' : 'No'
                }`
            );
            doc.text(
                `If you answered Yes to the previous question, please provide more details below : ${
                    application.student.refusedVisaReason
                        ? application.student.refusedVisaReason
                        : 'N/A'
                }`
            );
            doc.moveDown();

            doc.fontSize(12);
            doc.text(`b) Work Experiences`);
            doc.moveDown();
            doc.fontSize(8);

            application.student.workExperiences > 0
                ? application.student.workExperiences.forEach(
                      (workExperience: NonNullable<Student['workExperiences']>[0]) => {
                          doc.text(`Job title : ${workExperience?.title}`);
                          doc.text(`Compagny Name : ${workExperience?.compagnyName}`);
                          doc.text(`Address : ${workExperience?.address}`);
                          doc.text(`Worked From : ${date({ value: workExperience?.workedFrom })}`);
                          doc.text(`Worked To : ${date({ value: workExperience?.workedTo })}`);
                          doc.moveDown();
                      }
                  )
                : doc.text(`No work experience has been provided for this application`);
            doc.moveDown();

            doc.fontSize(8);
            doc.text(`Date: ${date({ value: new Date() })}`);
            doc.moveDown();
            doc.text(
                `The Student declares under his word of honour that the information provided above is true and complete and the Student is aware that any incorrect statement may invalidate my application at any point in the selection process.`
            );
            doc.moveDown();
            doc.text(
                ` The Student agree that, if in declarations is proved something false, the Student accept the consequences provided by the law in force.`
            );
            doc.end();

            const buffers: Buffer[] = [];
            doc.on('data', buffers.push.bind(buffers));
            doc.on('end', () => {
                const pdfData = Buffer.concat(buffers);
                resolve(pdfData);
            });
        });

        // Upload PDF file to S3 bucket
        const programId = toShortId(application.program.id);
        const studentId = toShortId(application.student.id);
        const studentName = kebabCase(
            `${application.student.firstName}-${application.student.lastName}`
        );
        const storageKey = `${studentName}-${programId}-${studentId}-application-document.pdf`;

        await s3
            .putObject({
                Body: pdfBuffer as Body | undefined,
                Bucket: 'students26f486968b06451e8ce6eb060f37114a14722-dev',
                ContentType: 'application/pdf',
                Key: `public/${storageKey}`,
                Metadata: {}
            })
            .promise();

        return {
            body: JSON.stringify({ storageKey }),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'content-type': 'application/pdf'
            },
            statusCode: 200
        };
    } catch (error) {
        return {
            body: JSON.stringify(event.body),
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            statusCode: 500
        };
    }
};
