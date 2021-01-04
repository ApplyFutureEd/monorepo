export const schema = {
    "models": {
        "School": {
            "name": "School",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "city": {
                    "name": "city",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "country": {
                    "name": "country",
                    "isArray": false,
                    "type": {
                        "enum": "Country"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "coverPhoto": {
                    "name": "coverPhoto",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "contactEmail": {
                    "name": "contactEmail",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "contactJobTitle": {
                    "name": "contactJobTitle",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "contactName": {
                    "name": "contactName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "contactPhone": {
                    "name": "contactPhone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "creationYear": {
                    "name": "creationYear",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "institutionType": {
                    "name": "institutionType",
                    "isArray": false,
                    "type": {
                        "enum": "InstitutionType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "internationalStudents": {
                    "name": "internationalStudents",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "logo": {
                    "name": "logo",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "totalStudents": {
                    "name": "totalStudents",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "slug": {
                    "name": "slug",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "published": {
                    "name": "published",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "programs": {
                    "name": "programs",
                    "isArray": true,
                    "type": {
                        "model": "Program"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "school"
                    }
                },
                "stepsTemplates": {
                    "name": "stepsTemplates",
                    "isArray": true,
                    "type": {
                        "nonModel": "ApplicationStepsTemplate"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "contractStatus": {
                    "name": "contractStatus",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Schools",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "searchable",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "bySlug",
                        "fields": [
                            "slug"
                        ],
                        "queryField": "getSchoolBySlug"
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "read"
                                ],
                                "provider": "apiKey"
                            },
                            {
                                "allow": "private",
                                "operations": [
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "admin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "read",
                                    "delete"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Program": {
            "name": "Program",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "applicationFee": {
                    "name": "applicationFee",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "applicationFeeCurrency": {
                    "name": "applicationFeeCurrency",
                    "isArray": false,
                    "type": {
                        "enum": "Currency"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "city": {
                    "name": "city",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "costOfLiving": {
                    "name": "costOfLiving",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "costOfLivingCurrency": {
                    "name": "costOfLivingCurrency",
                    "isArray": false,
                    "type": {
                        "enum": "Currency"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "country": {
                    "name": "country",
                    "isArray": false,
                    "type": {
                        "enum": "Country"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "degree": {
                    "name": "degree",
                    "isArray": false,
                    "type": {
                        "enum": "Degree"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "discipline": {
                    "name": "discipline",
                    "isArray": false,
                    "type": {
                        "enum": "Discipline"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "duration": {
                    "name": "duration",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "durationUnit": {
                    "name": "durationUnit",
                    "isArray": false,
                    "type": {
                        "enum": "DurationUnit"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "fee": {
                    "name": "fee",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "feeCurrency": {
                    "name": "feeCurrency",
                    "isArray": false,
                    "type": {
                        "enum": "Currency"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "feesAndFinancing": {
                    "name": "feesAndFinancing",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "feeUnit": {
                    "name": "feeUnit",
                    "isArray": false,
                    "type": {
                        "enum": "FeeUnit"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "gradePointAverage": {
                    "name": "gradePointAverage",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "highestEducationLevel": {
                    "name": "highestEducationLevel",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "intakes": {
                    "name": "intakes",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "intakeInformation": {
                    "name": "intakeInformation",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "languages": {
                    "name": "languages",
                    "isArray": true,
                    "type": {
                        "enum": "Language"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "minimumAge": {
                    "name": "minimumAge",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "minimumWorkExperience": {
                    "name": "minimumWorkExperience",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "minimumWorkExperienceUnit": {
                    "name": "minimumWorkExperienceUnit",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "otherRequirements": {
                    "name": "otherRequirements",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "published": {
                    "name": "published",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "requestedDocuments": {
                    "name": "requestedDocuments",
                    "isArray": true,
                    "type": {
                        "nonModel": "RequestedDocument"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "schedule": {
                    "name": "schedule",
                    "isArray": false,
                    "type": {
                        "enum": "Schedule"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "school": {
                    "name": "school",
                    "isArray": false,
                    "type": {
                        "model": "School"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "schoolId"
                    }
                },
                "schoolName": {
                    "name": "schoolName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "slug": {
                    "name": "slug",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "submissionDeadline": {
                    "name": "submissionDeadline",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "testCambridgeAdvanced": {
                    "name": "testCambridgeAdvanced",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "testCambridgeFirst": {
                    "name": "testCambridgeFirst",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "testDelfdalf": {
                    "name": "testDelfdalf",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "testGmat": {
                    "name": "testGmat",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "testGre": {
                    "name": "testGre",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "testIelts": {
                    "name": "testIelts",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "testTagemage": {
                    "name": "testTagemage",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "testTcftef": {
                    "name": "testTcftef",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "testToefl": {
                    "name": "testToefl",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "testToeic": {
                    "name": "testToeic",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Programs",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "searchable",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "bySlug",
                        "fields": [
                            "slug"
                        ],
                        "queryField": "getProgramBySlug"
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "bySchool",
                        "fields": [
                            "schoolId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "read"
                                ],
                                "provider": "apiKey"
                            },
                            {
                                "allow": "private",
                                "operations": [
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "admin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "read",
                                    "delete"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Student": {
            "name": "Student",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "phoneNumber": {
                    "name": "phoneNumber",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "address": {
                    "name": "address",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "city": {
                    "name": "city",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "country": {
                    "name": "country",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "firstName": {
                    "name": "firstName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "middleName": {
                    "name": "middleName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "lastName": {
                    "name": "lastName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "birthday": {
                    "name": "birthday",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "firstLanguage": {
                    "name": "firstLanguage",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "passportNumber": {
                    "name": "passportNumber",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "gender": {
                    "name": "gender",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "maritalStatus": {
                    "name": "maritalStatus",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "fatherFirstName": {
                    "name": "fatherFirstName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "fatherLastName": {
                    "name": "fatherLastName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "motherFirstName": {
                    "name": "motherFirstName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "motherMaidenName": {
                    "name": "motherMaidenName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "guardianLastName": {
                    "name": "guardianLastName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "guardianFirstName": {
                    "name": "guardianFirstName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "parentsAddress": {
                    "name": "parentsAddress",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "parentsCity": {
                    "name": "parentsCity",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "parentsCountry": {
                    "name": "parentsCountry",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "parentsPhoneNumber": {
                    "name": "parentsPhoneNumber",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "parentsEmail": {
                    "name": "parentsEmail",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "disciplines": {
                    "name": "disciplines",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "degrees": {
                    "name": "degrees",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "nationality": {
                    "name": "nationality",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "educationCountry": {
                    "name": "educationCountry",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "highestEducationLevel": {
                    "name": "highestEducationLevel",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "gradePointAverage": {
                    "name": "gradePointAverage",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "schoolsAttended": {
                    "name": "schoolsAttended",
                    "isArray": true,
                    "type": {
                        "nonModel": "SchoolAttended"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "testToefl": {
                    "name": "testToefl",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "testIelts": {
                    "name": "testIelts",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "testToeic": {
                    "name": "testToeic",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "testTcftef": {
                    "name": "testTcftef",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "testDelfdalf": {
                    "name": "testDelfdalf",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "testGre": {
                    "name": "testGre",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "testGmat": {
                    "name": "testGmat",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "testTagemage": {
                    "name": "testTagemage",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "testCambridgeFirst": {
                    "name": "testCambridgeFirst",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "testCambridgeAdvanced": {
                    "name": "testCambridgeAdvanced",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "testToeflDate": {
                    "name": "testToeflDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "testIeltsDate": {
                    "name": "testIeltsDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "testToeicDate": {
                    "name": "testToeicDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "testTcftefDate": {
                    "name": "testTcftefDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "testDelfdalfDate": {
                    "name": "testDelfdalfDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "testGreDate": {
                    "name": "testGreDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "testGmatDate": {
                    "name": "testGmatDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "testTagemageDate": {
                    "name": "testTagemageDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "testCambridgeFirstDate": {
                    "name": "testCambridgeFirstDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "testCambridgeAdvancedDate": {
                    "name": "testCambridgeAdvancedDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "testEnglishPending": {
                    "name": "testEnglishPending",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "testFrenchPending": {
                    "name": "testFrenchPending",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "testLogicAndReasoningPending": {
                    "name": "testLogicAndReasoningPending",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "validVisa": {
                    "name": "validVisa",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "refusedVisa": {
                    "name": "refusedVisa",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "refusedVisaReason": {
                    "name": "refusedVisaReason",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "workExperiences": {
                    "name": "workExperiences",
                    "isArray": true,
                    "type": {
                        "nonModel": "WorkExperience"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "documents": {
                    "name": "documents",
                    "isArray": true,
                    "type": {
                        "model": "Document"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "student"
                    }
                },
                "favoritePrograms": {
                    "name": "favoritePrograms",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "favoriteSchools": {
                    "name": "favoriteSchools",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "applications": {
                    "name": "applications",
                    "isArray": true,
                    "type": {
                        "model": "Application"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "student"
                    }
                },
                "hasMandatoryDocuments": {
                    "name": "hasMandatoryDocuments",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "modalProfileCompletedViewed": {
                    "name": "modalProfileCompletedViewed",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "notifications": {
                    "name": "notifications",
                    "isArray": true,
                    "type": {
                        "nonModel": "Notification"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "locale": {
                    "name": "locale",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Students",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEmail",
                        "fields": [
                            "email"
                        ],
                        "queryField": "getStudentByEmail"
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "operations": [
                                    "create",
                                    "update",
                                    "read"
                                ],
                                "identityClaim": "cognito:username"
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "admin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "read",
                                    "delete"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Document": {
            "name": "Document",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "student": {
                    "name": "student",
                    "isArray": false,
                    "type": {
                        "model": "Student"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "studentId"
                    }
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "storageKey": {
                    "name": "storageKey",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Documents",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byStudent",
                        "fields": [
                            "studentId"
                        ],
                        "queryField": "getDocumentByStudent"
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byStorageKey",
                        "fields": [
                            "storageKey"
                        ],
                        "queryField": "getByStorageKey"
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "operations": [
                                    "create",
                                    "update",
                                    "read",
                                    "delete"
                                ],
                                "identityClaim": "cognito:username"
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "admin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "read",
                                    "delete"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Application": {
            "name": "Application",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "student": {
                    "name": "student",
                    "isArray": false,
                    "type": {
                        "model": "Student"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "studentId"
                    }
                },
                "programId": {
                    "name": "programId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "program": {
                    "name": "program",
                    "isArray": false,
                    "type": {
                        "model": "Program"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": "id"
                    }
                },
                "intake": {
                    "name": "intake",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "document": {
                    "name": "document",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "steps": {
                    "name": "steps",
                    "isArray": true,
                    "type": {
                        "nonModel": "ApplicationStep"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "interviewDate": {
                    "name": "interviewDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "admissionResult": {
                    "name": "admissionResult",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "tuitionsFeePaymentDate": {
                    "name": "tuitionsFeePaymentDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "decisionLetterDate": {
                    "name": "decisionLetterDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "visaDate": {
                    "name": "visaDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "todo": {
                    "name": "todo",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "notifications": {
                    "name": "notifications",
                    "isArray": true,
                    "type": {
                        "nonModel": "Notification"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "modalApplicationCompletedViewed": {
                    "name": "modalApplicationCompletedViewed",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Applications",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byStudent",
                        "fields": [
                            "studentId"
                        ],
                        "queryField": "getApplicationByStudent"
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "operations": [
                                    "create",
                                    "update",
                                    "read",
                                    "delete"
                                ],
                                "identityClaim": "cognito:username"
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "admin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "read",
                                    "delete"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "SearchAlert": {
            "name": "SearchAlert",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "query": {
                    "name": "query",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "student": {
                    "name": "student",
                    "isArray": false,
                    "type": {
                        "model": "Student"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "studentId"
                    }
                }
            },
            "syncable": true,
            "pluralName": "SearchAlerts",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "operations": [
                                    "create",
                                    "update",
                                    "read",
                                    "delete"
                                ],
                                "identityClaim": "cognito:username"
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "admin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "read",
                                    "delete"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Feedback": {
            "name": "Feedback",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "rating": {
                    "name": "rating",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "applicationId": {
                    "name": "applicationId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "application": {
                    "name": "application",
                    "isArray": false,
                    "type": {
                        "model": "Application"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": "id"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Feedbacks",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "operations": [
                                    "create",
                                    "update",
                                    "read"
                                ],
                                "identityClaim": "cognito:username"
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "admin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "read",
                                    "delete"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Post": {
            "name": "Post",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "category": {
                    "name": "category",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "published": {
                    "name": "published",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "slug": {
                    "name": "slug",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Posts",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "bySlug",
                        "fields": [
                            "slug"
                        ],
                        "queryField": "getPostBySlug"
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "read"
                                ],
                                "provider": "apiKey"
                            },
                            {
                                "allow": "private",
                                "operations": [
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "admin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "read",
                                    "delete"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "Country": {
            "name": "Country",
            "values": [
                "AF",
                "AL",
                "DZ",
                "AD",
                "AO",
                "AG",
                "AR",
                "AM",
                "AU",
                "AT",
                "AZ",
                "BS",
                "BH",
                "BD",
                "BB",
                "BY",
                "BE",
                "BZ",
                "BJ",
                "BT",
                "BO",
                "BA",
                "BW",
                "BR",
                "BG",
                "BF",
                "BI",
                "KH",
                "CM",
                "CA",
                "CV",
                "CF",
                "TD",
                "CL",
                "CN",
                "CO",
                "KM",
                "CG",
                "CD",
                "CR",
                "CI",
                "HR",
                "CU",
                "CY",
                "CZ",
                "DK",
                "DJ",
                "DM",
                "DO",
                "EC",
                "EG",
                "SV",
                "GQ",
                "ER",
                "EE",
                "ET",
                "FJ",
                "FI",
                "FR",
                "GA",
                "GM",
                "GE",
                "DE",
                "GH",
                "GR",
                "GD",
                "GP",
                "GT",
                "GN",
                "GW",
                "GY",
                "HT",
                "VA",
                "HN",
                "HK",
                "HU",
                "IS",
                "IN",
                "ID",
                "IR",
                "IQ",
                "IE",
                "IL",
                "IT",
                "JM",
                "JP",
                "JO",
                "KZ",
                "KE",
                "KI",
                "KP",
                "KR",
                "KW",
                "KG",
                "LA",
                "LV",
                "LB",
                "LS",
                "LR",
                "LY",
                "LI",
                "LT",
                "LU",
                "MO",
                "MK",
                "MG",
                "MW",
                "MY",
                "MV",
                "ML",
                "MT",
                "MH",
                "MR",
                "MU",
                "MX",
                "FM",
                "MD",
                "MC",
                "MN",
                "ME",
                "MA",
                "MZ",
                "MM",
                "NA",
                "NR",
                "NP",
                "NL",
                "NZ",
                "NI",
                "NE",
                "NG",
                "NO",
                "OM",
                "PK",
                "PW",
                "PS",
                "PA",
                "PG",
                "PY",
                "PE",
                "PH",
                "PL",
                "PT",
                "QA",
                "RO",
                "RU",
                "RW",
                "KN",
                "LC",
                "VC",
                "WS",
                "SM",
                "ST",
                "SA",
                "SN",
                "RS",
                "SC",
                "SL",
                "SG",
                "SK",
                "SI",
                "SB",
                "SO",
                "ZA",
                "SS",
                "ES",
                "LK",
                "SD",
                "SR",
                "SE",
                "CH",
                "SY",
                "TW",
                "TJ",
                "TZ",
                "TH",
                "TL",
                "TG",
                "TO",
                "TT",
                "TN",
                "TR",
                "TM",
                "TV",
                "UG",
                "UA",
                "AE",
                "GB",
                "US",
                "UY",
                "UZ",
                "VU",
                "VE",
                "VN",
                "YE",
                "ZM",
                "ZW"
            ]
        },
        "ContractStatus": {
            "name": "ContractStatus",
            "values": [
                "PRIORITY",
                "CONTACTED",
                "IN_NEGOCIATION",
                "SIGNED"
            ]
        },
        "Currency": {
            "name": "Currency",
            "values": [
                "CHF",
                "CNY",
                "EUR",
                "GBP"
            ]
        },
        "Degree": {
            "name": "Degree",
            "values": [
                "BACHELOR",
                "MASTER",
                "DOCTORATE"
            ]
        },
        "Discipline": {
            "name": "Discipline",
            "values": [
                "BUSINESS_MANAGEMENT_AND_ECONOMICS",
                "ENGINEERING_AND_TECHNOLOGY",
                "SCIENCES",
                "CULINARY_ARTS",
                "LAW_POLITICS_SOCIAL_COMMUNITY_SERVICE_AND_TEACHING",
                "ARTS",
                "HEALTH_SCIENCES_MEDICINE_NURSING_PARAMEDIC_AND_KINESIOLOGY",
                "ENGLISH_FOR_ACADEMIC_STUDIES"
            ]
        },
        "DurationUnit": {
            "name": "DurationUnit",
            "values": [
                "DAY",
                "MONTH",
                "YEAR",
                "WEEK"
            ]
        },
        "FeeUnit": {
            "name": "FeeUnit",
            "values": [
                "YEAR",
                "TOTAL"
            ]
        },
        "InstitutionType": {
            "name": "InstitutionType",
            "values": [
                "PRIVATE",
                "PUBLIC"
            ]
        },
        "Language": {
            "name": "Language",
            "values": [
                "AF",
                "SQ",
                "AR",
                "HY",
                "EU",
                "BN",
                "BG",
                "CA",
                "KM",
                "ZH",
                "HR",
                "CS",
                "DA",
                "NL",
                "EN",
                "ET",
                "FJ",
                "FI",
                "FR",
                "KA",
                "DE",
                "EL",
                "GU",
                "HE",
                "HI",
                "HU",
                "IS",
                "ID",
                "GA",
                "IT",
                "JA",
                "JW",
                "KO",
                "LA",
                "LV",
                "LT",
                "MK",
                "MS",
                "ML",
                "MT",
                "MI",
                "MR",
                "MN",
                "NE",
                "NO",
                "FA",
                "PL",
                "PT",
                "PA",
                "QU",
                "RO",
                "RU",
                "SM",
                "SR",
                "SK",
                "SL",
                "ES",
                "SW",
                "SV",
                "TA",
                "TT",
                "TE",
                "TH",
                "BO",
                "TO",
                "TR",
                "UK",
                "UR",
                "UZ",
                "VI",
                "CY",
                "XH"
            ]
        },
        "Schedule": {
            "name": "Schedule",
            "values": [
                "FULL_TIME",
                "PART_TIME"
            ]
        }
    },
    "nonModels": {
        "RequestedDocument": {
            "name": "RequestedDocument",
            "fields": {
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "isMandatory": {
                    "name": "isMandatory",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "storageKey": {
                    "name": "storageKey",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "condition": {
                    "name": "condition",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "isSpecific": {
                    "name": "isSpecific",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ApplicationStepsTemplate": {
            "name": "ApplicationStepsTemplate",
            "fields": {
                "targets": {
                    "name": "targets",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "steps": {
                    "name": "steps",
                    "isArray": true,
                    "type": {
                        "nonModel": "ApplicationStep"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ApplicationStep": {
            "name": "ApplicationStep",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "isMandatory": {
                    "name": "isMandatory",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "SchoolAttended": {
            "name": "SchoolAttended",
            "fields": {
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "address": {
                    "name": "address",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "city": {
                    "name": "city",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "country": {
                    "name": "country",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "primaryLanguageInstruction": {
                    "name": "primaryLanguageInstruction",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "educationLevel": {
                    "name": "educationLevel",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "degreeAwarded": {
                    "name": "degreeAwarded",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "degreeAwardedOn": {
                    "name": "degreeAwardedOn",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "attendedInstitutionFrom": {
                    "name": "attendedInstitutionFrom",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "attendedInstitutionTo": {
                    "name": "attendedInstitutionTo",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "WorkExperience": {
            "name": "WorkExperience",
            "fields": {
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "compagnyName": {
                    "name": "compagnyName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "address": {
                    "name": "address",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "workedFrom": {
                    "name": "workedFrom",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "workedTo": {
                    "name": "workedTo",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Notification": {
            "name": "Notification",
            "fields": {
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "titleOptions": {
                    "name": "titleOptions",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "descriptionOptions": {
                    "name": "descriptionOptions",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "seen": {
                    "name": "seen",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "link": {
                    "name": "link",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "version": "9f5060978cacc65bfb83e1edfa68db50"
};