/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSchool = /* GraphQL */ `
  query GetSchool($id: ID!) {
    getSchool(id: $id) {
      id
      slug
      name
      city
      country
      totalStudents
      internationalStudents
      institutionType
      creationYear
      description
      logo
      coverPhoto
      contactJobTitle
      contactName
      contactPhone
      contactEmail
      published
      programs {
        items {
          id
          schoolId
          schoolName
          slug
          name
          city
          country
          discipline
          degree
          duration
          durationUnit
          schedule
          languages
          fee
          feeUnit
          feeCurrency
          intakes
          intakeInformation
          submissionDeadline
          costOfLiving
          costOfLivingCurrency
          description
          gradePointAverage
          highestEducationLevel
          testToefl
          testIelts
          testToeic
          testTcftef
          testDelfdalf
          testGre
          testGmat
          testTagemage
          testCambridgeFirst
          testCambridgeAdvanced
          minimumAge
          minimumWorkExperience
          minimumWorkExperienceUnit
          otherRequirements
          applicationFee
          applicationFeeCurrency
          feesAndFinancing
          published
          createdAt
          updatedAt
        }
        nextToken
      }
      stepsTemplates {
        targets
        steps {
          id
          status
          date
          isMandatory
        }
      }
      contractStatus
      createdAt
      updatedAt
    }
  }
`;
export const listSchools = /* GraphQL */ `
  query ListSchools(
    $filter: ModelSchoolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSchools(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        slug
        name
        city
        country
        totalStudents
        internationalStudents
        institutionType
        creationYear
        description
        logo
        coverPhoto
        contactJobTitle
        contactName
        contactPhone
        contactEmail
        published
        programs {
          nextToken
        }
        stepsTemplates {
          targets
        }
        contractStatus
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProgram = /* GraphQL */ `
  query GetProgram($id: ID!) {
    getProgram(id: $id) {
      id
      schoolId
      schoolName
      school {
        id
        slug
        name
        city
        country
        totalStudents
        internationalStudents
        institutionType
        creationYear
        description
        logo
        coverPhoto
        contactJobTitle
        contactName
        contactPhone
        contactEmail
        published
        programs {
          nextToken
        }
        stepsTemplates {
          targets
        }
        contractStatus
        createdAt
        updatedAt
      }
      slug
      name
      city
      country
      discipline
      degree
      duration
      durationUnit
      schedule
      languages
      fee
      feeUnit
      feeCurrency
      intakes
      intakeInformation
      submissionDeadline
      costOfLiving
      costOfLivingCurrency
      description
      gradePointAverage
      highestEducationLevel
      testToefl
      testIelts
      testToeic
      testTcftef
      testDelfdalf
      testGre
      testGmat
      testTagemage
      testCambridgeFirst
      testCambridgeAdvanced
      requestedDocuments {
        name
        isMandatory
        storageKey
        description
        condition
        isSpecific
      }
      minimumAge
      minimumWorkExperience
      minimumWorkExperienceUnit
      otherRequirements
      applicationFee
      applicationFeeCurrency
      feesAndFinancing
      published
      createdAt
      updatedAt
    }
  }
`;
export const listPrograms = /* GraphQL */ `
  query ListPrograms(
    $filter: ModelProgramFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrograms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        schoolId
        schoolName
        school {
          id
          slug
          name
          city
          country
          totalStudents
          internationalStudents
          institutionType
          creationYear
          description
          logo
          coverPhoto
          contactJobTitle
          contactName
          contactPhone
          contactEmail
          published
          contractStatus
          createdAt
          updatedAt
        }
        slug
        name
        city
        country
        discipline
        degree
        duration
        durationUnit
        schedule
        languages
        fee
        feeUnit
        feeCurrency
        intakes
        intakeInformation
        submissionDeadline
        costOfLiving
        costOfLivingCurrency
        description
        gradePointAverage
        highestEducationLevel
        testToefl
        testIelts
        testToeic
        testTcftef
        testDelfdalf
        testGre
        testGmat
        testTagemage
        testCambridgeFirst
        testCambridgeAdvanced
        requestedDocuments {
          name
          isMandatory
          storageKey
          description
          condition
          isSpecific
        }
        minimumAge
        minimumWorkExperience
        minimumWorkExperienceUnit
        otherRequirements
        applicationFee
        applicationFeeCurrency
        feesAndFinancing
        published
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
      id
      email
      phoneNumber
      address
      city
      country
      firstName
      middleName
      lastName
      birthday
      firstLanguage
      passportNumber
      gender
      maritalStatus
      fatherFirstName
      fatherLastName
      motherFirstName
      motherMaidenName
      guardianLastName
      guardianFirstName
      parentsAddress
      parentsCity
      parentsCountry
      parentsPhoneNumber
      parentsEmail
      disciplines
      degrees
      nationality
      educationCountry
      highestEducationLevel
      gradePointAverage
      schoolsAttended {
        name
        address
        city
        country
        primaryLanguageInstruction
        educationLevel
        degreeAwarded
        degreeAwardedOn
        attendedInstitutionFrom
        attendedInstitutionTo
      }
      testToefl
      testIelts
      testToeic
      testTcftef
      testDelfdalf
      testGre
      testGmat
      testTagemage
      testCambridgeFirst
      testCambridgeAdvanced
      testToeflDate
      testIeltsDate
      testToeicDate
      testTcftefDate
      testDelfdalfDate
      testGreDate
      testGmatDate
      testTagemageDate
      testCambridgeFirstDate
      testCambridgeAdvancedDate
      testEnglishPending
      testFrenchPending
      testLogicAndReasoningPending
      validVisa
      refusedVisa
      refusedVisaReason
      workExperiences {
        title
        compagnyName
        address
        workedFrom
        workedTo
      }
      documents {
        items {
          id
          studentId
          name
          storageKey
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      favoritePrograms
      favoriteSchools
      applications {
        items {
          id
          studentId
          programId
          intake
          document
          interviewDate
          admissionResult
          tuitionsFeePaymentDate
          decisionLetterDate
          visaDate
          todo
          modalApplicationCompletedViewed
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      hasMandatoryDocuments
      modalProfileCompletedViewed
      notifications {
        title
        titleOptions
        description
        descriptionOptions
        date
        seen
        link
      }
      locale
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        phoneNumber
        address
        city
        country
        firstName
        middleName
        lastName
        birthday
        firstLanguage
        passportNumber
        gender
        maritalStatus
        fatherFirstName
        fatherLastName
        motherFirstName
        motherMaidenName
        guardianLastName
        guardianFirstName
        parentsAddress
        parentsCity
        parentsCountry
        parentsPhoneNumber
        parentsEmail
        disciplines
        degrees
        nationality
        educationCountry
        highestEducationLevel
        gradePointAverage
        schoolsAttended {
          name
          address
          city
          country
          primaryLanguageInstruction
          educationLevel
          degreeAwarded
          degreeAwardedOn
          attendedInstitutionFrom
          attendedInstitutionTo
        }
        testToefl
        testIelts
        testToeic
        testTcftef
        testDelfdalf
        testGre
        testGmat
        testTagemage
        testCambridgeFirst
        testCambridgeAdvanced
        testToeflDate
        testIeltsDate
        testToeicDate
        testTcftefDate
        testDelfdalfDate
        testGreDate
        testGmatDate
        testTagemageDate
        testCambridgeFirstDate
        testCambridgeAdvancedDate
        testEnglishPending
        testFrenchPending
        testLogicAndReasoningPending
        validVisa
        refusedVisa
        refusedVisaReason
        workExperiences {
          title
          compagnyName
          address
          workedFrom
          workedTo
        }
        documents {
          nextToken
        }
        favoritePrograms
        favoriteSchools
        applications {
          nextToken
        }
        hasMandatoryDocuments
        modalProfileCompletedViewed
        notifications {
          title
          titleOptions
          description
          descriptionOptions
          date
          seen
          link
        }
        locale
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getDocument = /* GraphQL */ `
  query GetDocument($id: ID!) {
    getDocument(id: $id) {
      id
      studentId
      student {
        id
        email
        phoneNumber
        address
        city
        country
        firstName
        middleName
        lastName
        birthday
        firstLanguage
        passportNumber
        gender
        maritalStatus
        fatherFirstName
        fatherLastName
        motherFirstName
        motherMaidenName
        guardianLastName
        guardianFirstName
        parentsAddress
        parentsCity
        parentsCountry
        parentsPhoneNumber
        parentsEmail
        disciplines
        degrees
        nationality
        educationCountry
        highestEducationLevel
        gradePointAverage
        schoolsAttended {
          name
          address
          city
          country
          primaryLanguageInstruction
          educationLevel
          degreeAwarded
          degreeAwardedOn
          attendedInstitutionFrom
          attendedInstitutionTo
        }
        testToefl
        testIelts
        testToeic
        testTcftef
        testDelfdalf
        testGre
        testGmat
        testTagemage
        testCambridgeFirst
        testCambridgeAdvanced
        testToeflDate
        testIeltsDate
        testToeicDate
        testTcftefDate
        testDelfdalfDate
        testGreDate
        testGmatDate
        testTagemageDate
        testCambridgeFirstDate
        testCambridgeAdvancedDate
        testEnglishPending
        testFrenchPending
        testLogicAndReasoningPending
        validVisa
        refusedVisa
        refusedVisaReason
        workExperiences {
          title
          compagnyName
          address
          workedFrom
          workedTo
        }
        documents {
          nextToken
        }
        favoritePrograms
        favoriteSchools
        applications {
          nextToken
        }
        hasMandatoryDocuments
        modalProfileCompletedViewed
        notifications {
          title
          titleOptions
          description
          descriptionOptions
          date
          seen
          link
        }
        locale
        createdAt
        updatedAt
        owner
      }
      name
      storageKey
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listDocuments = /* GraphQL */ `
  query ListDocuments(
    $filter: ModelDocumentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDocuments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        studentId
        student {
          id
          email
          phoneNumber
          address
          city
          country
          firstName
          middleName
          lastName
          birthday
          firstLanguage
          passportNumber
          gender
          maritalStatus
          fatherFirstName
          fatherLastName
          motherFirstName
          motherMaidenName
          guardianLastName
          guardianFirstName
          parentsAddress
          parentsCity
          parentsCountry
          parentsPhoneNumber
          parentsEmail
          disciplines
          degrees
          nationality
          educationCountry
          highestEducationLevel
          gradePointAverage
          testToefl
          testIelts
          testToeic
          testTcftef
          testDelfdalf
          testGre
          testGmat
          testTagemage
          testCambridgeFirst
          testCambridgeAdvanced
          testToeflDate
          testIeltsDate
          testToeicDate
          testTcftefDate
          testDelfdalfDate
          testGreDate
          testGmatDate
          testTagemageDate
          testCambridgeFirstDate
          testCambridgeAdvancedDate
          testEnglishPending
          testFrenchPending
          testLogicAndReasoningPending
          validVisa
          refusedVisa
          refusedVisaReason
          favoritePrograms
          favoriteSchools
          hasMandatoryDocuments
          modalProfileCompletedViewed
          locale
          createdAt
          updatedAt
          owner
        }
        name
        storageKey
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getApplication = /* GraphQL */ `
  query GetApplication($id: ID!) {
    getApplication(id: $id) {
      id
      studentId
      student {
        id
        email
        phoneNumber
        address
        city
        country
        firstName
        middleName
        lastName
        birthday
        firstLanguage
        passportNumber
        gender
        maritalStatus
        fatherFirstName
        fatherLastName
        motherFirstName
        motherMaidenName
        guardianLastName
        guardianFirstName
        parentsAddress
        parentsCity
        parentsCountry
        parentsPhoneNumber
        parentsEmail
        disciplines
        degrees
        nationality
        educationCountry
        highestEducationLevel
        gradePointAverage
        schoolsAttended {
          name
          address
          city
          country
          primaryLanguageInstruction
          educationLevel
          degreeAwarded
          degreeAwardedOn
          attendedInstitutionFrom
          attendedInstitutionTo
        }
        testToefl
        testIelts
        testToeic
        testTcftef
        testDelfdalf
        testGre
        testGmat
        testTagemage
        testCambridgeFirst
        testCambridgeAdvanced
        testToeflDate
        testIeltsDate
        testToeicDate
        testTcftefDate
        testDelfdalfDate
        testGreDate
        testGmatDate
        testTagemageDate
        testCambridgeFirstDate
        testCambridgeAdvancedDate
        testEnglishPending
        testFrenchPending
        testLogicAndReasoningPending
        validVisa
        refusedVisa
        refusedVisaReason
        workExperiences {
          title
          compagnyName
          address
          workedFrom
          workedTo
        }
        documents {
          nextToken
        }
        favoritePrograms
        favoriteSchools
        applications {
          nextToken
        }
        hasMandatoryDocuments
        modalProfileCompletedViewed
        notifications {
          title
          titleOptions
          description
          descriptionOptions
          date
          seen
          link
        }
        locale
        createdAt
        updatedAt
        owner
      }
      programId
      program {
        id
        schoolId
        schoolName
        school {
          id
          slug
          name
          city
          country
          totalStudents
          internationalStudents
          institutionType
          creationYear
          description
          logo
          coverPhoto
          contactJobTitle
          contactName
          contactPhone
          contactEmail
          published
          contractStatus
          createdAt
          updatedAt
        }
        slug
        name
        city
        country
        discipline
        degree
        duration
        durationUnit
        schedule
        languages
        fee
        feeUnit
        feeCurrency
        intakes
        intakeInformation
        submissionDeadline
        costOfLiving
        costOfLivingCurrency
        description
        gradePointAverage
        highestEducationLevel
        testToefl
        testIelts
        testToeic
        testTcftef
        testDelfdalf
        testGre
        testGmat
        testTagemage
        testCambridgeFirst
        testCambridgeAdvanced
        requestedDocuments {
          name
          isMandatory
          storageKey
          description
          condition
          isSpecific
        }
        minimumAge
        minimumWorkExperience
        minimumWorkExperienceUnit
        otherRequirements
        applicationFee
        applicationFeeCurrency
        feesAndFinancing
        published
        createdAt
        updatedAt
      }
      intake
      document
      steps {
        id
        status
        date
        isMandatory
      }
      interviewDate
      admissionResult
      tuitionsFeePaymentDate
      decisionLetterDate
      visaDate
      todo
      notifications {
        title
        titleOptions
        description
        descriptionOptions
        date
        seen
        link
      }
      modalApplicationCompletedViewed
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listApplications = /* GraphQL */ `
  query ListApplications(
    $filter: ModelApplicationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApplications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        studentId
        student {
          id
          email
          phoneNumber
          address
          city
          country
          firstName
          middleName
          lastName
          birthday
          firstLanguage
          passportNumber
          gender
          maritalStatus
          fatherFirstName
          fatherLastName
          motherFirstName
          motherMaidenName
          guardianLastName
          guardianFirstName
          parentsAddress
          parentsCity
          parentsCountry
          parentsPhoneNumber
          parentsEmail
          disciplines
          degrees
          nationality
          educationCountry
          highestEducationLevel
          gradePointAverage
          testToefl
          testIelts
          testToeic
          testTcftef
          testDelfdalf
          testGre
          testGmat
          testTagemage
          testCambridgeFirst
          testCambridgeAdvanced
          testToeflDate
          testIeltsDate
          testToeicDate
          testTcftefDate
          testDelfdalfDate
          testGreDate
          testGmatDate
          testTagemageDate
          testCambridgeFirstDate
          testCambridgeAdvancedDate
          testEnglishPending
          testFrenchPending
          testLogicAndReasoningPending
          validVisa
          refusedVisa
          refusedVisaReason
          favoritePrograms
          favoriteSchools
          hasMandatoryDocuments
          modalProfileCompletedViewed
          locale
          createdAt
          updatedAt
          owner
        }
        programId
        program {
          id
          schoolId
          schoolName
          slug
          name
          city
          country
          discipline
          degree
          duration
          durationUnit
          schedule
          languages
          fee
          feeUnit
          feeCurrency
          intakes
          intakeInformation
          submissionDeadline
          costOfLiving
          costOfLivingCurrency
          description
          gradePointAverage
          highestEducationLevel
          testToefl
          testIelts
          testToeic
          testTcftef
          testDelfdalf
          testGre
          testGmat
          testTagemage
          testCambridgeFirst
          testCambridgeAdvanced
          minimumAge
          minimumWorkExperience
          minimumWorkExperienceUnit
          otherRequirements
          applicationFee
          applicationFeeCurrency
          feesAndFinancing
          published
          createdAt
          updatedAt
        }
        intake
        document
        steps {
          id
          status
          date
          isMandatory
        }
        interviewDate
        admissionResult
        tuitionsFeePaymentDate
        decisionLetterDate
        visaDate
        todo
        notifications {
          title
          titleOptions
          description
          descriptionOptions
          date
          seen
          link
        }
        modalApplicationCompletedViewed
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getSearchAlert = /* GraphQL */ `
  query GetSearchAlert($id: ID!) {
    getSearchAlert(id: $id) {
      id
      query
      type
      studentId
      student {
        id
        email
        phoneNumber
        address
        city
        country
        firstName
        middleName
        lastName
        birthday
        firstLanguage
        passportNumber
        gender
        maritalStatus
        fatherFirstName
        fatherLastName
        motherFirstName
        motherMaidenName
        guardianLastName
        guardianFirstName
        parentsAddress
        parentsCity
        parentsCountry
        parentsPhoneNumber
        parentsEmail
        disciplines
        degrees
        nationality
        educationCountry
        highestEducationLevel
        gradePointAverage
        schoolsAttended {
          name
          address
          city
          country
          primaryLanguageInstruction
          educationLevel
          degreeAwarded
          degreeAwardedOn
          attendedInstitutionFrom
          attendedInstitutionTo
        }
        testToefl
        testIelts
        testToeic
        testTcftef
        testDelfdalf
        testGre
        testGmat
        testTagemage
        testCambridgeFirst
        testCambridgeAdvanced
        testToeflDate
        testIeltsDate
        testToeicDate
        testTcftefDate
        testDelfdalfDate
        testGreDate
        testGmatDate
        testTagemageDate
        testCambridgeFirstDate
        testCambridgeAdvancedDate
        testEnglishPending
        testFrenchPending
        testLogicAndReasoningPending
        validVisa
        refusedVisa
        refusedVisaReason
        workExperiences {
          title
          compagnyName
          address
          workedFrom
          workedTo
        }
        documents {
          nextToken
        }
        favoritePrograms
        favoriteSchools
        applications {
          nextToken
        }
        hasMandatoryDocuments
        modalProfileCompletedViewed
        notifications {
          title
          titleOptions
          description
          descriptionOptions
          date
          seen
          link
        }
        locale
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listSearchAlerts = /* GraphQL */ `
  query ListSearchAlerts(
    $filter: ModelSearchAlertFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSearchAlerts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        query
        type
        studentId
        student {
          id
          email
          phoneNumber
          address
          city
          country
          firstName
          middleName
          lastName
          birthday
          firstLanguage
          passportNumber
          gender
          maritalStatus
          fatherFirstName
          fatherLastName
          motherFirstName
          motherMaidenName
          guardianLastName
          guardianFirstName
          parentsAddress
          parentsCity
          parentsCountry
          parentsPhoneNumber
          parentsEmail
          disciplines
          degrees
          nationality
          educationCountry
          highestEducationLevel
          gradePointAverage
          testToefl
          testIelts
          testToeic
          testTcftef
          testDelfdalf
          testGre
          testGmat
          testTagemage
          testCambridgeFirst
          testCambridgeAdvanced
          testToeflDate
          testIeltsDate
          testToeicDate
          testTcftefDate
          testDelfdalfDate
          testGreDate
          testGmatDate
          testTagemageDate
          testCambridgeFirstDate
          testCambridgeAdvancedDate
          testEnglishPending
          testFrenchPending
          testLogicAndReasoningPending
          validVisa
          refusedVisa
          refusedVisaReason
          favoritePrograms
          favoriteSchools
          hasMandatoryDocuments
          modalProfileCompletedViewed
          locale
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getFeedback = /* GraphQL */ `
  query GetFeedback($id: ID!) {
    getFeedback(id: $id) {
      id
      rating
      applicationId
      application {
        id
        studentId
        student {
          id
          email
          phoneNumber
          address
          city
          country
          firstName
          middleName
          lastName
          birthday
          firstLanguage
          passportNumber
          gender
          maritalStatus
          fatherFirstName
          fatherLastName
          motherFirstName
          motherMaidenName
          guardianLastName
          guardianFirstName
          parentsAddress
          parentsCity
          parentsCountry
          parentsPhoneNumber
          parentsEmail
          disciplines
          degrees
          nationality
          educationCountry
          highestEducationLevel
          gradePointAverage
          testToefl
          testIelts
          testToeic
          testTcftef
          testDelfdalf
          testGre
          testGmat
          testTagemage
          testCambridgeFirst
          testCambridgeAdvanced
          testToeflDate
          testIeltsDate
          testToeicDate
          testTcftefDate
          testDelfdalfDate
          testGreDate
          testGmatDate
          testTagemageDate
          testCambridgeFirstDate
          testCambridgeAdvancedDate
          testEnglishPending
          testFrenchPending
          testLogicAndReasoningPending
          validVisa
          refusedVisa
          refusedVisaReason
          favoritePrograms
          favoriteSchools
          hasMandatoryDocuments
          modalProfileCompletedViewed
          locale
          createdAt
          updatedAt
          owner
        }
        programId
        program {
          id
          schoolId
          schoolName
          slug
          name
          city
          country
          discipline
          degree
          duration
          durationUnit
          schedule
          languages
          fee
          feeUnit
          feeCurrency
          intakes
          intakeInformation
          submissionDeadline
          costOfLiving
          costOfLivingCurrency
          description
          gradePointAverage
          highestEducationLevel
          testToefl
          testIelts
          testToeic
          testTcftef
          testDelfdalf
          testGre
          testGmat
          testTagemage
          testCambridgeFirst
          testCambridgeAdvanced
          minimumAge
          minimumWorkExperience
          minimumWorkExperienceUnit
          otherRequirements
          applicationFee
          applicationFeeCurrency
          feesAndFinancing
          published
          createdAt
          updatedAt
        }
        intake
        document
        steps {
          id
          status
          date
          isMandatory
        }
        interviewDate
        admissionResult
        tuitionsFeePaymentDate
        decisionLetterDate
        visaDate
        todo
        notifications {
          title
          titleOptions
          description
          descriptionOptions
          date
          seen
          link
        }
        modalApplicationCompletedViewed
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listFeedbacks = /* GraphQL */ `
  query ListFeedbacks(
    $filter: ModelFeedbackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeedbacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        rating
        applicationId
        application {
          id
          studentId
          programId
          intake
          document
          interviewDate
          admissionResult
          tuitionsFeePaymentDate
          decisionLetterDate
          visaDate
          todo
          modalApplicationCompletedViewed
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getSchoolBySlug = /* GraphQL */ `
  query GetSchoolBySlug(
    $slug: String
    $sortDirection: ModelSortDirection
    $filter: ModelSchoolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getSchoolBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        slug
        name
        city
        country
        totalStudents
        internationalStudents
        institutionType
        creationYear
        description
        logo
        coverPhoto
        contactJobTitle
        contactName
        contactPhone
        contactEmail
        published
        programs {
          nextToken
        }
        stepsTemplates {
          targets
        }
        contractStatus
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProgramBySlug = /* GraphQL */ `
  query GetProgramBySlug(
    $slug: String
    $sortDirection: ModelSortDirection
    $filter: ModelProgramFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getProgramBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        schoolId
        schoolName
        school {
          id
          slug
          name
          city
          country
          totalStudents
          internationalStudents
          institutionType
          creationYear
          description
          logo
          coverPhoto
          contactJobTitle
          contactName
          contactPhone
          contactEmail
          published
          contractStatus
          createdAt
          updatedAt
        }
        slug
        name
        city
        country
        discipline
        degree
        duration
        durationUnit
        schedule
        languages
        fee
        feeUnit
        feeCurrency
        intakes
        intakeInformation
        submissionDeadline
        costOfLiving
        costOfLivingCurrency
        description
        gradePointAverage
        highestEducationLevel
        testToefl
        testIelts
        testToeic
        testTcftef
        testDelfdalf
        testGre
        testGmat
        testTagemage
        testCambridgeFirst
        testCambridgeAdvanced
        requestedDocuments {
          name
          isMandatory
          storageKey
          description
          condition
          isSpecific
        }
        minimumAge
        minimumWorkExperience
        minimumWorkExperienceUnit
        otherRequirements
        applicationFee
        applicationFeeCurrency
        feesAndFinancing
        published
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStudentByEmail = /* GraphQL */ `
  query GetStudentByEmail(
    $email: String
    $sortDirection: ModelSortDirection
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getStudentByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        email
        phoneNumber
        address
        city
        country
        firstName
        middleName
        lastName
        birthday
        firstLanguage
        passportNumber
        gender
        maritalStatus
        fatherFirstName
        fatherLastName
        motherFirstName
        motherMaidenName
        guardianLastName
        guardianFirstName
        parentsAddress
        parentsCity
        parentsCountry
        parentsPhoneNumber
        parentsEmail
        disciplines
        degrees
        nationality
        educationCountry
        highestEducationLevel
        gradePointAverage
        schoolsAttended {
          name
          address
          city
          country
          primaryLanguageInstruction
          educationLevel
          degreeAwarded
          degreeAwardedOn
          attendedInstitutionFrom
          attendedInstitutionTo
        }
        testToefl
        testIelts
        testToeic
        testTcftef
        testDelfdalf
        testGre
        testGmat
        testTagemage
        testCambridgeFirst
        testCambridgeAdvanced
        testToeflDate
        testIeltsDate
        testToeicDate
        testTcftefDate
        testDelfdalfDate
        testGreDate
        testGmatDate
        testTagemageDate
        testCambridgeFirstDate
        testCambridgeAdvancedDate
        testEnglishPending
        testFrenchPending
        testLogicAndReasoningPending
        validVisa
        refusedVisa
        refusedVisaReason
        workExperiences {
          title
          compagnyName
          address
          workedFrom
          workedTo
        }
        documents {
          nextToken
        }
        favoritePrograms
        favoriteSchools
        applications {
          nextToken
        }
        hasMandatoryDocuments
        modalProfileCompletedViewed
        notifications {
          title
          titleOptions
          description
          descriptionOptions
          date
          seen
          link
        }
        locale
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getDocumentByStudent = /* GraphQL */ `
  query GetDocumentByStudent(
    $studentId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelDocumentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getDocumentByStudent(
      studentId: $studentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        studentId
        student {
          id
          email
          phoneNumber
          address
          city
          country
          firstName
          middleName
          lastName
          birthday
          firstLanguage
          passportNumber
          gender
          maritalStatus
          fatherFirstName
          fatherLastName
          motherFirstName
          motherMaidenName
          guardianLastName
          guardianFirstName
          parentsAddress
          parentsCity
          parentsCountry
          parentsPhoneNumber
          parentsEmail
          disciplines
          degrees
          nationality
          educationCountry
          highestEducationLevel
          gradePointAverage
          testToefl
          testIelts
          testToeic
          testTcftef
          testDelfdalf
          testGre
          testGmat
          testTagemage
          testCambridgeFirst
          testCambridgeAdvanced
          testToeflDate
          testIeltsDate
          testToeicDate
          testTcftefDate
          testDelfdalfDate
          testGreDate
          testGmatDate
          testTagemageDate
          testCambridgeFirstDate
          testCambridgeAdvancedDate
          testEnglishPending
          testFrenchPending
          testLogicAndReasoningPending
          validVisa
          refusedVisa
          refusedVisaReason
          favoritePrograms
          favoriteSchools
          hasMandatoryDocuments
          modalProfileCompletedViewed
          locale
          createdAt
          updatedAt
          owner
        }
        name
        storageKey
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getByStorageKey = /* GraphQL */ `
  query GetByStorageKey(
    $storageKey: String
    $sortDirection: ModelSortDirection
    $filter: ModelDocumentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getByStorageKey(
      storageKey: $storageKey
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        studentId
        student {
          id
          email
          phoneNumber
          address
          city
          country
          firstName
          middleName
          lastName
          birthday
          firstLanguage
          passportNumber
          gender
          maritalStatus
          fatherFirstName
          fatherLastName
          motherFirstName
          motherMaidenName
          guardianLastName
          guardianFirstName
          parentsAddress
          parentsCity
          parentsCountry
          parentsPhoneNumber
          parentsEmail
          disciplines
          degrees
          nationality
          educationCountry
          highestEducationLevel
          gradePointAverage
          testToefl
          testIelts
          testToeic
          testTcftef
          testDelfdalf
          testGre
          testGmat
          testTagemage
          testCambridgeFirst
          testCambridgeAdvanced
          testToeflDate
          testIeltsDate
          testToeicDate
          testTcftefDate
          testDelfdalfDate
          testGreDate
          testGmatDate
          testTagemageDate
          testCambridgeFirstDate
          testCambridgeAdvancedDate
          testEnglishPending
          testFrenchPending
          testLogicAndReasoningPending
          validVisa
          refusedVisa
          refusedVisaReason
          favoritePrograms
          favoriteSchools
          hasMandatoryDocuments
          modalProfileCompletedViewed
          locale
          createdAt
          updatedAt
          owner
        }
        name
        storageKey
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getApplicationByStudent = /* GraphQL */ `
  query GetApplicationByStudent(
    $studentId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelApplicationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getApplicationByStudent(
      studentId: $studentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        studentId
        student {
          id
          email
          phoneNumber
          address
          city
          country
          firstName
          middleName
          lastName
          birthday
          firstLanguage
          passportNumber
          gender
          maritalStatus
          fatherFirstName
          fatherLastName
          motherFirstName
          motherMaidenName
          guardianLastName
          guardianFirstName
          parentsAddress
          parentsCity
          parentsCountry
          parentsPhoneNumber
          parentsEmail
          disciplines
          degrees
          nationality
          educationCountry
          highestEducationLevel
          gradePointAverage
          testToefl
          testIelts
          testToeic
          testTcftef
          testDelfdalf
          testGre
          testGmat
          testTagemage
          testCambridgeFirst
          testCambridgeAdvanced
          testToeflDate
          testIeltsDate
          testToeicDate
          testTcftefDate
          testDelfdalfDate
          testGreDate
          testGmatDate
          testTagemageDate
          testCambridgeFirstDate
          testCambridgeAdvancedDate
          testEnglishPending
          testFrenchPending
          testLogicAndReasoningPending
          validVisa
          refusedVisa
          refusedVisaReason
          favoritePrograms
          favoriteSchools
          hasMandatoryDocuments
          modalProfileCompletedViewed
          locale
          createdAt
          updatedAt
          owner
        }
        programId
        program {
          id
          schoolId
          schoolName
          slug
          name
          city
          country
          discipline
          degree
          duration
          durationUnit
          schedule
          languages
          fee
          feeUnit
          feeCurrency
          intakes
          intakeInformation
          submissionDeadline
          costOfLiving
          costOfLivingCurrency
          description
          gradePointAverage
          highestEducationLevel
          testToefl
          testIelts
          testToeic
          testTcftef
          testDelfdalf
          testGre
          testGmat
          testTagemage
          testCambridgeFirst
          testCambridgeAdvanced
          minimumAge
          minimumWorkExperience
          minimumWorkExperienceUnit
          otherRequirements
          applicationFee
          applicationFeeCurrency
          feesAndFinancing
          published
          createdAt
          updatedAt
        }
        intake
        document
        steps {
          id
          status
          date
          isMandatory
        }
        interviewDate
        admissionResult
        tuitionsFeePaymentDate
        decisionLetterDate
        visaDate
        todo
        notifications {
          title
          titleOptions
          description
          descriptionOptions
          date
          seen
          link
        }
        modalApplicationCompletedViewed
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const searchSchools = /* GraphQL */ `
  query SearchSchools(
    $filter: SearchableSchoolFilterInput
    $sort: SearchableSchoolSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchSchools(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        slug
        name
        city
        country
        totalStudents
        internationalStudents
        institutionType
        creationYear
        description
        logo
        coverPhoto
        contactJobTitle
        contactName
        contactPhone
        contactEmail
        published
        programs {
          nextToken
        }
        stepsTemplates {
          targets
        }
        contractStatus
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
export const searchPrograms = /* GraphQL */ `
  query SearchPrograms(
    $filter: SearchableProgramFilterInput
    $sort: SearchableProgramSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchPrograms(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        schoolId
        schoolName
        school {
          id
          slug
          name
          city
          country
          totalStudents
          internationalStudents
          institutionType
          creationYear
          description
          logo
          coverPhoto
          contactJobTitle
          contactName
          contactPhone
          contactEmail
          published
          contractStatus
          createdAt
          updatedAt
        }
        slug
        name
        city
        country
        discipline
        degree
        duration
        durationUnit
        schedule
        languages
        fee
        feeUnit
        feeCurrency
        intakes
        intakeInformation
        submissionDeadline
        costOfLiving
        costOfLivingCurrency
        description
        gradePointAverage
        highestEducationLevel
        testToefl
        testIelts
        testToeic
        testTcftef
        testDelfdalf
        testGre
        testGmat
        testTagemage
        testCambridgeFirst
        testCambridgeAdvanced
        requestedDocuments {
          name
          isMandatory
          storageKey
          description
          condition
          isSpecific
        }
        minimumAge
        minimumWorkExperience
        minimumWorkExperienceUnit
        otherRequirements
        applicationFee
        applicationFeeCurrency
        feesAndFinancing
        published
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
