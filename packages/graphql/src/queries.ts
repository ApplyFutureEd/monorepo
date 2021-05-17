/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
      id
      address
      applications {
        items {
          id
          admissionResult
          document
          decisionLetterDate
          intake
          interviewDate
          lastUpdate
          modalApplicationCompletedViewed
          programId
          studentId
          todo
          tuitionsFeePaymentDate
          visaDate
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      birthday
      city
      country
      degrees
      disciplines
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
      educationCountry
      email
      fatherFirstName
      fatherLastName
      firstLanguage
      firstName
      favoritePrograms
      favoriteSchools
      gender
      gradePointAverage
      guardianFirstName
      guardianLastName
      hasMandatoryDocuments
      highestEducationLevel
      lastName
      lastUpdate
      locale
      maritalStatus
      middleName
      modalProfileCompletedViewed
      phoneNumber
      motherFirstName
      motherMaidenName
      nationality
      notifications {
        date
        description
        descriptionOptions
        link
        seen
        title
        titleOptions
      }
      parentsAddress
      parentsCity
      parentsCountry
      parentsEmail
      parentsPhoneNumber
      passportNumber
      refusedVisa
      refusedVisaReason
      schoolsAttended {
        address
        attendedInstitutionFrom
        attendedInstitutionTo
        city
        country
        degreeAwarded
        degreeAwardedOn
        educationLevel
        name
        primaryLanguageInstruction
      }
      testCambridgeAdvanced
      testCambridgeAdvancedDate
      testCambridgeFirst
      testCambridgeFirstDate
      testCeliCilsItPlida
      testCeliCilsItPlidaDate
      testDele
      testDeleDate
      testDelfdalf
      testDelfdalfDate
      testEnglishPending
      testGmat
      testGmatDate
      testGoethe
      testGoetheDate
      testGre
      testGreDate
      testIelts
      testIeltsDate
      testLogicAndReasoningPending
      testOtherLanguagesPending
      testTagemage
      testTagemageDate
      testTcftef
      testTcftefDate
      testToefl
      testToeflDate
      testToeic
      testToeicDate
      validVisa
      workExperiences {
        address
        compagnyName
        title
        workedFrom
        workedTo
      }
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
        address
        applications {
          nextToken
        }
        birthday
        city
        country
        degrees
        disciplines
        documents {
          nextToken
        }
        educationCountry
        email
        fatherFirstName
        fatherLastName
        firstLanguage
        firstName
        favoritePrograms
        favoriteSchools
        gender
        gradePointAverage
        guardianFirstName
        guardianLastName
        hasMandatoryDocuments
        highestEducationLevel
        lastName
        lastUpdate
        locale
        maritalStatus
        middleName
        modalProfileCompletedViewed
        phoneNumber
        motherFirstName
        motherMaidenName
        nationality
        notifications {
          date
          description
          descriptionOptions
          link
          seen
          title
          titleOptions
        }
        parentsAddress
        parentsCity
        parentsCountry
        parentsEmail
        parentsPhoneNumber
        passportNumber
        refusedVisa
        refusedVisaReason
        schoolsAttended {
          address
          attendedInstitutionFrom
          attendedInstitutionTo
          city
          country
          degreeAwarded
          degreeAwardedOn
          educationLevel
          name
          primaryLanguageInstruction
        }
        testCambridgeAdvanced
        testCambridgeAdvancedDate
        testCambridgeFirst
        testCambridgeFirstDate
        testCeliCilsItPlida
        testCeliCilsItPlidaDate
        testDele
        testDeleDate
        testDelfdalf
        testDelfdalfDate
        testEnglishPending
        testGmat
        testGmatDate
        testGoethe
        testGoetheDate
        testGre
        testGreDate
        testIelts
        testIeltsDate
        testLogicAndReasoningPending
        testOtherLanguagesPending
        testTagemage
        testTagemageDate
        testTcftef
        testTcftefDate
        testToefl
        testToeflDate
        testToeic
        testToeicDate
        validVisa
        workExperiences {
          address
          compagnyName
          title
          workedFrom
          workedTo
        }
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
        address
        applications {
          nextToken
        }
        birthday
        city
        country
        degrees
        disciplines
        documents {
          nextToken
        }
        educationCountry
        email
        fatherFirstName
        fatherLastName
        firstLanguage
        firstName
        favoritePrograms
        favoriteSchools
        gender
        gradePointAverage
        guardianFirstName
        guardianLastName
        hasMandatoryDocuments
        highestEducationLevel
        lastName
        lastUpdate
        locale
        maritalStatus
        middleName
        modalProfileCompletedViewed
        phoneNumber
        motherFirstName
        motherMaidenName
        nationality
        notifications {
          date
          description
          descriptionOptions
          link
          seen
          title
          titleOptions
        }
        parentsAddress
        parentsCity
        parentsCountry
        parentsEmail
        parentsPhoneNumber
        passportNumber
        refusedVisa
        refusedVisaReason
        schoolsAttended {
          address
          attendedInstitutionFrom
          attendedInstitutionTo
          city
          country
          degreeAwarded
          degreeAwardedOn
          educationLevel
          name
          primaryLanguageInstruction
        }
        testCambridgeAdvanced
        testCambridgeAdvancedDate
        testCambridgeFirst
        testCambridgeFirstDate
        testCeliCilsItPlida
        testCeliCilsItPlidaDate
        testDele
        testDeleDate
        testDelfdalf
        testDelfdalfDate
        testEnglishPending
        testGmat
        testGmatDate
        testGoethe
        testGoetheDate
        testGre
        testGreDate
        testIelts
        testIeltsDate
        testLogicAndReasoningPending
        testOtherLanguagesPending
        testTagemage
        testTagemageDate
        testTcftef
        testTcftefDate
        testToefl
        testToeflDate
        testToeic
        testToeicDate
        validVisa
        workExperiences {
          address
          compagnyName
          title
          workedFrom
          workedTo
        }
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
          address
          birthday
          city
          country
          degrees
          disciplines
          educationCountry
          email
          fatherFirstName
          fatherLastName
          firstLanguage
          firstName
          favoritePrograms
          favoriteSchools
          gender
          gradePointAverage
          guardianFirstName
          guardianLastName
          hasMandatoryDocuments
          highestEducationLevel
          lastName
          lastUpdate
          locale
          maritalStatus
          middleName
          modalProfileCompletedViewed
          phoneNumber
          motherFirstName
          motherMaidenName
          nationality
          parentsAddress
          parentsCity
          parentsCountry
          parentsEmail
          parentsPhoneNumber
          passportNumber
          refusedVisa
          refusedVisaReason
          testCambridgeAdvanced
          testCambridgeAdvancedDate
          testCambridgeFirst
          testCambridgeFirstDate
          testCeliCilsItPlida
          testCeliCilsItPlidaDate
          testDele
          testDeleDate
          testDelfdalf
          testDelfdalfDate
          testEnglishPending
          testGmat
          testGmatDate
          testGoethe
          testGoetheDate
          testGre
          testGreDate
          testIelts
          testIeltsDate
          testLogicAndReasoningPending
          testOtherLanguagesPending
          testTagemage
          testTagemageDate
          testTcftef
          testTcftefDate
          testToefl
          testToeflDate
          testToeic
          testToeicDate
          validVisa
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
      admissionResult
      document
      decisionLetterDate
      intake
      interviewDate
      lastUpdate
      modalApplicationCompletedViewed
      notifications {
        date
        description
        descriptionOptions
        link
        seen
        title
        titleOptions
      }
      programId
      steps {
        date
        id
        isMandatory
        label
        status
        timelineLabel
      }
      studentId
      student {
        id
        address
        applications {
          nextToken
        }
        birthday
        city
        country
        degrees
        disciplines
        documents {
          nextToken
        }
        educationCountry
        email
        fatherFirstName
        fatherLastName
        firstLanguage
        firstName
        favoritePrograms
        favoriteSchools
        gender
        gradePointAverage
        guardianFirstName
        guardianLastName
        hasMandatoryDocuments
        highestEducationLevel
        lastName
        lastUpdate
        locale
        maritalStatus
        middleName
        modalProfileCompletedViewed
        phoneNumber
        motherFirstName
        motherMaidenName
        nationality
        notifications {
          date
          description
          descriptionOptions
          link
          seen
          title
          titleOptions
        }
        parentsAddress
        parentsCity
        parentsCountry
        parentsEmail
        parentsPhoneNumber
        passportNumber
        refusedVisa
        refusedVisaReason
        schoolsAttended {
          address
          attendedInstitutionFrom
          attendedInstitutionTo
          city
          country
          degreeAwarded
          degreeAwardedOn
          educationLevel
          name
          primaryLanguageInstruction
        }
        testCambridgeAdvanced
        testCambridgeAdvancedDate
        testCambridgeFirst
        testCambridgeFirstDate
        testCeliCilsItPlida
        testCeliCilsItPlidaDate
        testDele
        testDeleDate
        testDelfdalf
        testDelfdalfDate
        testEnglishPending
        testGmat
        testGmatDate
        testGoethe
        testGoetheDate
        testGre
        testGreDate
        testIelts
        testIeltsDate
        testLogicAndReasoningPending
        testOtherLanguagesPending
        testTagemage
        testTagemageDate
        testTcftef
        testTcftefDate
        testToefl
        testToeflDate
        testToeic
        testToeicDate
        validVisa
        workExperiences {
          address
          compagnyName
          title
          workedFrom
          workedTo
        }
        createdAt
        updatedAt
        owner
      }
      todo
      tuitionsFeePaymentDate
      visaDate
      createdAt
      updatedAt
      owner
      program {
        id
        applicationFee
        applicationFeeCurrency
        city
        costOfLiving
        costOfLivingCurrency
        country
        degree
        description
        discipline
        duration
        durationUnit
        fee
        feeCurrency
        feeUnit
        feesAndFinancing
        gradePointAverage
        highestEducationLevel
        intakeInformation
        intakes
        languages
        lastUpdate
        minimumAge
        minimumWorkExperience
        minimumWorkExperienceUnit
        name
        otherRequirements
        published
        requestedDocuments {
          name
          isMandatory
          storageKey
          description
          condition
          isSpecific
        }
        schedule
        schoolId
        schoolName
        slug
        submissionDeadline
        testCambridgeAdvanced
        testCambridgeFirst
        testCeliCilsItPlida
        testDele
        testDelfdalf
        testGmat
        testGoethe
        testGre
        testIelts
        testTagemage
        testTcftef
        testToefl
        testToeic
        createdAt
        updatedAt
        owner
        school {
          id
          city
          country
          coverPhoto
          contactEmail
          contactJobTitle
          contactName
          contactPhone
          contractStatus
          creationYear
          description
          institutionType
          internationalStudents
          lastUpdate
          logo
          name
          totalStudents
          slug
          published
          createdAt
          updatedAt
          owner
        }
      }
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
        admissionResult
        document
        decisionLetterDate
        intake
        interviewDate
        lastUpdate
        modalApplicationCompletedViewed
        notifications {
          date
          description
          descriptionOptions
          link
          seen
          title
          titleOptions
        }
        programId
        steps {
          date
          id
          isMandatory
          label
          status
          timelineLabel
        }
        studentId
        student {
          id
          address
          birthday
          city
          country
          degrees
          disciplines
          educationCountry
          email
          fatherFirstName
          fatherLastName
          firstLanguage
          firstName
          favoritePrograms
          favoriteSchools
          gender
          gradePointAverage
          guardianFirstName
          guardianLastName
          hasMandatoryDocuments
          highestEducationLevel
          lastName
          lastUpdate
          locale
          maritalStatus
          middleName
          modalProfileCompletedViewed
          phoneNumber
          motherFirstName
          motherMaidenName
          nationality
          parentsAddress
          parentsCity
          parentsCountry
          parentsEmail
          parentsPhoneNumber
          passportNumber
          refusedVisa
          refusedVisaReason
          testCambridgeAdvanced
          testCambridgeAdvancedDate
          testCambridgeFirst
          testCambridgeFirstDate
          testCeliCilsItPlida
          testCeliCilsItPlidaDate
          testDele
          testDeleDate
          testDelfdalf
          testDelfdalfDate
          testEnglishPending
          testGmat
          testGmatDate
          testGoethe
          testGoetheDate
          testGre
          testGreDate
          testIelts
          testIeltsDate
          testLogicAndReasoningPending
          testOtherLanguagesPending
          testTagemage
          testTagemageDate
          testTcftef
          testTcftefDate
          testToefl
          testToeflDate
          testToeic
          testToeicDate
          validVisa
          createdAt
          updatedAt
          owner
        }
        todo
        tuitionsFeePaymentDate
        visaDate
        createdAt
        updatedAt
        owner
        program {
          id
          applicationFee
          applicationFeeCurrency
          city
          costOfLiving
          costOfLivingCurrency
          country
          degree
          description
          discipline
          duration
          durationUnit
          fee
          feeCurrency
          feeUnit
          feesAndFinancing
          gradePointAverage
          highestEducationLevel
          intakeInformation
          intakes
          languages
          lastUpdate
          minimumAge
          minimumWorkExperience
          minimumWorkExperienceUnit
          name
          otherRequirements
          published
          schedule
          schoolId
          schoolName
          slug
          submissionDeadline
          testCambridgeAdvanced
          testCambridgeFirst
          testCeliCilsItPlida
          testDele
          testDelfdalf
          testGmat
          testGoethe
          testGre
          testIelts
          testTagemage
          testTcftef
          testToefl
          testToeic
          createdAt
          updatedAt
          owner
        }
      }
      nextToken
    }
  }
`;
export const getSearchAlert = /* GraphQL */ `
  query GetSearchAlert($id: ID!) {
    getSearchAlert(id: $id) {
      id
      lastUpdate
      student {
        id
        address
        applications {
          nextToken
        }
        birthday
        city
        country
        degrees
        disciplines
        documents {
          nextToken
        }
        educationCountry
        email
        fatherFirstName
        fatherLastName
        firstLanguage
        firstName
        favoritePrograms
        favoriteSchools
        gender
        gradePointAverage
        guardianFirstName
        guardianLastName
        hasMandatoryDocuments
        highestEducationLevel
        lastName
        lastUpdate
        locale
        maritalStatus
        middleName
        modalProfileCompletedViewed
        phoneNumber
        motherFirstName
        motherMaidenName
        nationality
        notifications {
          date
          description
          descriptionOptions
          link
          seen
          title
          titleOptions
        }
        parentsAddress
        parentsCity
        parentsCountry
        parentsEmail
        parentsPhoneNumber
        passportNumber
        refusedVisa
        refusedVisaReason
        schoolsAttended {
          address
          attendedInstitutionFrom
          attendedInstitutionTo
          city
          country
          degreeAwarded
          degreeAwardedOn
          educationLevel
          name
          primaryLanguageInstruction
        }
        testCambridgeAdvanced
        testCambridgeAdvancedDate
        testCambridgeFirst
        testCambridgeFirstDate
        testCeliCilsItPlida
        testCeliCilsItPlidaDate
        testDele
        testDeleDate
        testDelfdalf
        testDelfdalfDate
        testEnglishPending
        testGmat
        testGmatDate
        testGoethe
        testGoetheDate
        testGre
        testGreDate
        testIelts
        testIeltsDate
        testLogicAndReasoningPending
        testOtherLanguagesPending
        testTagemage
        testTagemageDate
        testTcftef
        testTcftefDate
        testToefl
        testToeflDate
        testToeic
        testToeicDate
        validVisa
        workExperiences {
          address
          compagnyName
          title
          workedFrom
          workedTo
        }
        createdAt
        updatedAt
        owner
      }
      studentId
      type
      query
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
        lastUpdate
        student {
          id
          address
          birthday
          city
          country
          degrees
          disciplines
          educationCountry
          email
          fatherFirstName
          fatherLastName
          firstLanguage
          firstName
          favoritePrograms
          favoriteSchools
          gender
          gradePointAverage
          guardianFirstName
          guardianLastName
          hasMandatoryDocuments
          highestEducationLevel
          lastName
          lastUpdate
          locale
          maritalStatus
          middleName
          modalProfileCompletedViewed
          phoneNumber
          motherFirstName
          motherMaidenName
          nationality
          parentsAddress
          parentsCity
          parentsCountry
          parentsEmail
          parentsPhoneNumber
          passportNumber
          refusedVisa
          refusedVisaReason
          testCambridgeAdvanced
          testCambridgeAdvancedDate
          testCambridgeFirst
          testCambridgeFirstDate
          testCeliCilsItPlida
          testCeliCilsItPlidaDate
          testDele
          testDeleDate
          testDelfdalf
          testDelfdalfDate
          testEnglishPending
          testGmat
          testGmatDate
          testGoethe
          testGoetheDate
          testGre
          testGreDate
          testIelts
          testIeltsDate
          testLogicAndReasoningPending
          testOtherLanguagesPending
          testTagemage
          testTagemageDate
          testTcftef
          testTcftefDate
          testToefl
          testToeflDate
          testToeic
          testToeicDate
          validVisa
          createdAt
          updatedAt
          owner
        }
        studentId
        type
        query
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
      application {
        id
        admissionResult
        document
        decisionLetterDate
        intake
        interviewDate
        lastUpdate
        modalApplicationCompletedViewed
        notifications {
          date
          description
          descriptionOptions
          link
          seen
          title
          titleOptions
        }
        programId
        steps {
          date
          id
          isMandatory
          label
          status
          timelineLabel
        }
        studentId
        student {
          id
          address
          birthday
          city
          country
          degrees
          disciplines
          educationCountry
          email
          fatherFirstName
          fatherLastName
          firstLanguage
          firstName
          favoritePrograms
          favoriteSchools
          gender
          gradePointAverage
          guardianFirstName
          guardianLastName
          hasMandatoryDocuments
          highestEducationLevel
          lastName
          lastUpdate
          locale
          maritalStatus
          middleName
          modalProfileCompletedViewed
          phoneNumber
          motherFirstName
          motherMaidenName
          nationality
          parentsAddress
          parentsCity
          parentsCountry
          parentsEmail
          parentsPhoneNumber
          passportNumber
          refusedVisa
          refusedVisaReason
          testCambridgeAdvanced
          testCambridgeAdvancedDate
          testCambridgeFirst
          testCambridgeFirstDate
          testCeliCilsItPlida
          testCeliCilsItPlidaDate
          testDele
          testDeleDate
          testDelfdalf
          testDelfdalfDate
          testEnglishPending
          testGmat
          testGmatDate
          testGoethe
          testGoetheDate
          testGre
          testGreDate
          testIelts
          testIeltsDate
          testLogicAndReasoningPending
          testOtherLanguagesPending
          testTagemage
          testTagemageDate
          testTcftef
          testTcftefDate
          testToefl
          testToeflDate
          testToeic
          testToeicDate
          validVisa
          createdAt
          updatedAt
          owner
        }
        todo
        tuitionsFeePaymentDate
        visaDate
        createdAt
        updatedAt
        owner
        program {
          id
          applicationFee
          applicationFeeCurrency
          city
          costOfLiving
          costOfLivingCurrency
          country
          degree
          description
          discipline
          duration
          durationUnit
          fee
          feeCurrency
          feeUnit
          feesAndFinancing
          gradePointAverage
          highestEducationLevel
          intakeInformation
          intakes
          languages
          lastUpdate
          minimumAge
          minimumWorkExperience
          minimumWorkExperienceUnit
          name
          otherRequirements
          published
          schedule
          schoolId
          schoolName
          slug
          submissionDeadline
          testCambridgeAdvanced
          testCambridgeFirst
          testCeliCilsItPlida
          testDele
          testDelfdalf
          testGmat
          testGoethe
          testGre
          testIelts
          testTagemage
          testTcftef
          testToefl
          testToeic
          createdAt
          updatedAt
          owner
        }
      }
      applicationId
      lastUpdate
      rating
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
        application {
          id
          admissionResult
          document
          decisionLetterDate
          intake
          interviewDate
          lastUpdate
          modalApplicationCompletedViewed
          programId
          studentId
          todo
          tuitionsFeePaymentDate
          visaDate
          createdAt
          updatedAt
          owner
        }
        applicationId
        lastUpdate
        rating
        createdAt
        updatedAt
        owner
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
        address
        applications {
          nextToken
        }
        birthday
        city
        country
        degrees
        disciplines
        documents {
          nextToken
        }
        educationCountry
        email
        fatherFirstName
        fatherLastName
        firstLanguage
        firstName
        favoritePrograms
        favoriteSchools
        gender
        gradePointAverage
        guardianFirstName
        guardianLastName
        hasMandatoryDocuments
        highestEducationLevel
        lastName
        lastUpdate
        locale
        maritalStatus
        middleName
        modalProfileCompletedViewed
        phoneNumber
        motherFirstName
        motherMaidenName
        nationality
        notifications {
          date
          description
          descriptionOptions
          link
          seen
          title
          titleOptions
        }
        parentsAddress
        parentsCity
        parentsCountry
        parentsEmail
        parentsPhoneNumber
        passportNumber
        refusedVisa
        refusedVisaReason
        schoolsAttended {
          address
          attendedInstitutionFrom
          attendedInstitutionTo
          city
          country
          degreeAwarded
          degreeAwardedOn
          educationLevel
          name
          primaryLanguageInstruction
        }
        testCambridgeAdvanced
        testCambridgeAdvancedDate
        testCambridgeFirst
        testCambridgeFirstDate
        testCeliCilsItPlida
        testCeliCilsItPlidaDate
        testDele
        testDeleDate
        testDelfdalf
        testDelfdalfDate
        testEnglishPending
        testGmat
        testGmatDate
        testGoethe
        testGoetheDate
        testGre
        testGreDate
        testIelts
        testIeltsDate
        testLogicAndReasoningPending
        testOtherLanguagesPending
        testTagemage
        testTagemageDate
        testTcftef
        testTcftefDate
        testToefl
        testToeflDate
        testToeic
        testToeicDate
        validVisa
        workExperiences {
          address
          compagnyName
          title
          workedFrom
          workedTo
        }
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
          address
          birthday
          city
          country
          degrees
          disciplines
          educationCountry
          email
          fatherFirstName
          fatherLastName
          firstLanguage
          firstName
          favoritePrograms
          favoriteSchools
          gender
          gradePointAverage
          guardianFirstName
          guardianLastName
          hasMandatoryDocuments
          highestEducationLevel
          lastName
          lastUpdate
          locale
          maritalStatus
          middleName
          modalProfileCompletedViewed
          phoneNumber
          motherFirstName
          motherMaidenName
          nationality
          parentsAddress
          parentsCity
          parentsCountry
          parentsEmail
          parentsPhoneNumber
          passportNumber
          refusedVisa
          refusedVisaReason
          testCambridgeAdvanced
          testCambridgeAdvancedDate
          testCambridgeFirst
          testCambridgeFirstDate
          testCeliCilsItPlida
          testCeliCilsItPlidaDate
          testDele
          testDeleDate
          testDelfdalf
          testDelfdalfDate
          testEnglishPending
          testGmat
          testGmatDate
          testGoethe
          testGoetheDate
          testGre
          testGreDate
          testIelts
          testIeltsDate
          testLogicAndReasoningPending
          testOtherLanguagesPending
          testTagemage
          testTagemageDate
          testTcftef
          testTcftefDate
          testToefl
          testToeflDate
          testToeic
          testToeicDate
          validVisa
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
export const getDocumentByStorageKey = /* GraphQL */ `
  query GetDocumentByStorageKey(
    $storageKey: String
    $sortDirection: ModelSortDirection
    $filter: ModelDocumentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getDocumentByStorageKey(
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
          address
          birthday
          city
          country
          degrees
          disciplines
          educationCountry
          email
          fatherFirstName
          fatherLastName
          firstLanguage
          firstName
          favoritePrograms
          favoriteSchools
          gender
          gradePointAverage
          guardianFirstName
          guardianLastName
          hasMandatoryDocuments
          highestEducationLevel
          lastName
          lastUpdate
          locale
          maritalStatus
          middleName
          modalProfileCompletedViewed
          phoneNumber
          motherFirstName
          motherMaidenName
          nationality
          parentsAddress
          parentsCity
          parentsCountry
          parentsEmail
          parentsPhoneNumber
          passportNumber
          refusedVisa
          refusedVisaReason
          testCambridgeAdvanced
          testCambridgeAdvancedDate
          testCambridgeFirst
          testCambridgeFirstDate
          testCeliCilsItPlida
          testCeliCilsItPlidaDate
          testDele
          testDeleDate
          testDelfdalf
          testDelfdalfDate
          testEnglishPending
          testGmat
          testGmatDate
          testGoethe
          testGoetheDate
          testGre
          testGreDate
          testIelts
          testIeltsDate
          testLogicAndReasoningPending
          testOtherLanguagesPending
          testTagemage
          testTagemageDate
          testTcftef
          testTcftefDate
          testToefl
          testToeflDate
          testToeic
          testToeicDate
          validVisa
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
        admissionResult
        document
        decisionLetterDate
        intake
        interviewDate
        lastUpdate
        modalApplicationCompletedViewed
        notifications {
          date
          description
          descriptionOptions
          link
          seen
          title
          titleOptions
        }
        programId
        steps {
          date
          id
          isMandatory
          label
          status
          timelineLabel
        }
        studentId
        student {
          id
          address
          birthday
          city
          country
          degrees
          disciplines
          educationCountry
          email
          fatherFirstName
          fatherLastName
          firstLanguage
          firstName
          favoritePrograms
          favoriteSchools
          gender
          gradePointAverage
          guardianFirstName
          guardianLastName
          hasMandatoryDocuments
          highestEducationLevel
          lastName
          lastUpdate
          locale
          maritalStatus
          middleName
          modalProfileCompletedViewed
          phoneNumber
          motherFirstName
          motherMaidenName
          nationality
          parentsAddress
          parentsCity
          parentsCountry
          parentsEmail
          parentsPhoneNumber
          passportNumber
          refusedVisa
          refusedVisaReason
          testCambridgeAdvanced
          testCambridgeAdvancedDate
          testCambridgeFirst
          testCambridgeFirstDate
          testCeliCilsItPlida
          testCeliCilsItPlidaDate
          testDele
          testDeleDate
          testDelfdalf
          testDelfdalfDate
          testEnglishPending
          testGmat
          testGmatDate
          testGoethe
          testGoetheDate
          testGre
          testGreDate
          testIelts
          testIeltsDate
          testLogicAndReasoningPending
          testOtherLanguagesPending
          testTagemage
          testTagemageDate
          testTcftef
          testTcftefDate
          testToefl
          testToeflDate
          testToeic
          testToeicDate
          validVisa
          createdAt
          updatedAt
          owner
        }
        todo
        tuitionsFeePaymentDate
        visaDate
        createdAt
        updatedAt
        owner
        program {
          id
          applicationFee
          applicationFeeCurrency
          city
          costOfLiving
          costOfLivingCurrency
          country
          degree
          description
          discipline
          duration
          durationUnit
          fee
          feeCurrency
          feeUnit
          feesAndFinancing
          gradePointAverage
          highestEducationLevel
          intakeInformation
          intakes
          languages
          lastUpdate
          minimumAge
          minimumWorkExperience
          minimumWorkExperienceUnit
          name
          otherRequirements
          published
          schedule
          school {
            name
            slug
            logo
          }
          schoolId
          schoolName
          slug
          submissionDeadline
          testCambridgeAdvanced
          testCambridgeFirst
          testCeliCilsItPlida
          testDele
          testDelfdalf
          testGmat
          testGoethe
          testGre
          testIelts
          testTagemage
          testTcftef
          testToefl
          testToeic
          createdAt
          updatedAt
          owner
        }
      }
      nextToken
    }
  }
`;
export const searchStudents = /* GraphQL */ `
  query SearchStudents(
    $filter: SearchableStudentFilterInput
    $sort: SearchableStudentSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchStudents(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        address
        applications {
          nextToken
        }
        birthday
        city
        country
        degrees
        disciplines
        documents {
          nextToken
        }
        educationCountry
        email
        fatherFirstName
        fatherLastName
        firstLanguage
        firstName
        favoritePrograms
        favoriteSchools
        gender
        gradePointAverage
        guardianFirstName
        guardianLastName
        hasMandatoryDocuments
        highestEducationLevel
        lastName
        lastUpdate
        locale
        maritalStatus
        middleName
        modalProfileCompletedViewed
        phoneNumber
        motherFirstName
        motherMaidenName
        nationality
        notifications {
          date
          description
          descriptionOptions
          link
          seen
          title
          titleOptions
        }
        parentsAddress
        parentsCity
        parentsCountry
        parentsEmail
        parentsPhoneNumber
        passportNumber
        refusedVisa
        refusedVisaReason
        schoolsAttended {
          address
          attendedInstitutionFrom
          attendedInstitutionTo
          city
          country
          degreeAwarded
          degreeAwardedOn
          educationLevel
          name
          primaryLanguageInstruction
        }
        testCambridgeAdvanced
        testCambridgeAdvancedDate
        testCambridgeFirst
        testCambridgeFirstDate
        testCeliCilsItPlida
        testCeliCilsItPlidaDate
        testDele
        testDeleDate
        testDelfdalf
        testDelfdalfDate
        testEnglishPending
        testGmat
        testGmatDate
        testGoethe
        testGoetheDate
        testGre
        testGreDate
        testIelts
        testIeltsDate
        testLogicAndReasoningPending
        testOtherLanguagesPending
        testTagemage
        testTagemageDate
        testTcftef
        testTcftefDate
        testToefl
        testToeflDate
        testToeic
        testToeicDate
        validVisa
        workExperiences {
          address
          compagnyName
          title
          workedFrom
          workedTo
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
      total
    }
  }
`;
export const searchApplications = /* GraphQL */ `
  query SearchApplications(
    $filter: SearchableApplicationFilterInput
    $sort: SearchableApplicationSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchApplications(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        admissionResult
        document
        decisionLetterDate
        intake
        interviewDate
        lastUpdate
        modalApplicationCompletedViewed
        notifications {
          date
          description
          descriptionOptions
          link
          seen
          title
          titleOptions
        }
        programId
        steps {
          date
          id
          isMandatory
          label
          status
          timelineLabel
        }
        studentId
        student {
          id
          address
          birthday
          city
          country
          degrees
          disciplines
          educationCountry
          email
          fatherFirstName
          fatherLastName
          firstLanguage
          firstName
          favoritePrograms
          favoriteSchools
          gender
          gradePointAverage
          guardianFirstName
          guardianLastName
          hasMandatoryDocuments
          highestEducationLevel
          lastName
          lastUpdate
          locale
          maritalStatus
          middleName
          modalProfileCompletedViewed
          phoneNumber
          motherFirstName
          motherMaidenName
          nationality
          parentsAddress
          parentsCity
          parentsCountry
          parentsEmail
          parentsPhoneNumber
          passportNumber
          refusedVisa
          refusedVisaReason
          testCambridgeAdvanced
          testCambridgeAdvancedDate
          testCambridgeFirst
          testCambridgeFirstDate
          testCeliCilsItPlida
          testCeliCilsItPlidaDate
          testDele
          testDeleDate
          testDelfdalf
          testDelfdalfDate
          testEnglishPending
          testGmat
          testGmatDate
          testGoethe
          testGoetheDate
          testGre
          testGreDate
          testIelts
          testIeltsDate
          testLogicAndReasoningPending
          testOtherLanguagesPending
          testTagemage
          testTagemageDate
          testTcftef
          testTcftefDate
          testToefl
          testToeflDate
          testToeic
          testToeicDate
          validVisa
          createdAt
          updatedAt
          owner
        }
        todo
        tuitionsFeePaymentDate
        visaDate
        createdAt
        updatedAt
        owner
        program {
          id
          applicationFee
          applicationFeeCurrency
          city
          costOfLiving
          costOfLivingCurrency
          country
          degree
          description
          discipline
          duration
          durationUnit
          fee
          feeCurrency
          feeUnit
          feesAndFinancing
          gradePointAverage
          highestEducationLevel
          intakeInformation
          intakes
          languages
          lastUpdate
          minimumAge
          minimumWorkExperience
          minimumWorkExperienceUnit
          name
          otherRequirements
          published
          schedule
          schoolId
          schoolName
          slug
          submissionDeadline
          testCambridgeAdvanced
          testCambridgeFirst
          testCeliCilsItPlida
          testDele
          testDelfdalf
          testGmat
          testGoethe
          testGre
          testIelts
          testTagemage
          testTcftef
          testToefl
          testToeic
          createdAt
          updatedAt
          owner
        }
      }
      nextToken
      total
    }
  }
`;
export const searchSearchAlerts = /* GraphQL */ `
  query SearchSearchAlerts(
    $filter: SearchableSearchAlertFilterInput
    $sort: SearchableSearchAlertSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchSearchAlerts(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        lastUpdate
        student {
          id
          address
          birthday
          city
          country
          degrees
          disciplines
          educationCountry
          email
          fatherFirstName
          fatherLastName
          firstLanguage
          firstName
          favoritePrograms
          favoriteSchools
          gender
          gradePointAverage
          guardianFirstName
          guardianLastName
          hasMandatoryDocuments
          highestEducationLevel
          lastName
          lastUpdate
          locale
          maritalStatus
          middleName
          modalProfileCompletedViewed
          phoneNumber
          motherFirstName
          motherMaidenName
          nationality
          parentsAddress
          parentsCity
          parentsCountry
          parentsEmail
          parentsPhoneNumber
          passportNumber
          refusedVisa
          refusedVisaReason
          testCambridgeAdvanced
          testCambridgeAdvancedDate
          testCambridgeFirst
          testCambridgeFirstDate
          testCeliCilsItPlida
          testCeliCilsItPlidaDate
          testDele
          testDeleDate
          testDelfdalf
          testDelfdalfDate
          testEnglishPending
          testGmat
          testGmatDate
          testGoethe
          testGoetheDate
          testGre
          testGreDate
          testIelts
          testIeltsDate
          testLogicAndReasoningPending
          testOtherLanguagesPending
          testTagemage
          testTagemageDate
          testTcftef
          testTcftefDate
          testToefl
          testToeflDate
          testToeic
          testToeicDate
          validVisa
          createdAt
          updatedAt
          owner
        }
        studentId
        type
        query
        createdAt
        updatedAt
        owner
      }
      nextToken
      total
    }
  }
`;
export const searchFeedbacks = /* GraphQL */ `
  query SearchFeedbacks(
    $filter: SearchableFeedbackFilterInput
    $sort: SearchableFeedbackSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchFeedbacks(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        application {
          id
          admissionResult
          document
          decisionLetterDate
          intake
          interviewDate
          lastUpdate
          modalApplicationCompletedViewed
          programId
          studentId
          todo
          tuitionsFeePaymentDate
          visaDate
          createdAt
          updatedAt
          owner
        }
        applicationId
        lastUpdate
        rating
        createdAt
        updatedAt
        owner
      }
      nextToken
      total
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
        city
        country
        coverPhoto
        contactEmail
        contactJobTitle
        contactName
        contactPhone
        contractStatus
        creationYear
        description
        institutionType
        internationalStudents
        lastUpdate
        logo
        name
        totalStudents
        slug
        published
        createdAt
        updatedAt
        owner
        programs {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getSchool = /* GraphQL */ `
  query GetSchool($id: ID!) {
    getSchool(id: $id) {
      id
      city
      country
      coverPhoto
      contactEmail
      contactJobTitle
      contactName
      contactPhone
      contractStatus
      creationYear
      description
      institutionType
      internationalStudents
      lastUpdate
      logo
      name
      totalStudents
      slug
      published
      createdAt
      updatedAt
      owner
      programs {
        items {
          id
          applicationFee
          applicationFeeCurrency
          city
          costOfLiving
          costOfLivingCurrency
          country
          degree
          description
          discipline
          duration
          durationUnit
          fee
          feeCurrency
          feeUnit
          feesAndFinancing
          gradePointAverage
          highestEducationLevel
          intakeInformation
          intakes
          languages
          lastUpdate
          minimumAge
          minimumWorkExperience
          minimumWorkExperienceUnit
          name
          otherRequirements
          published
          schedule
          schoolId
          schoolName
          slug
          submissionDeadline
          testCambridgeAdvanced
          testCambridgeFirst
          testCeliCilsItPlida
          testDele
          testDelfdalf
          testGmat
          testGoethe
          testGre
          testIelts
          testTagemage
          testTcftef
          testToefl
          testToeic
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
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
        city
        country
        coverPhoto
        contactEmail
        contactJobTitle
        contactName
        contactPhone
        contractStatus
        creationYear
        description
        institutionType
        internationalStudents
        lastUpdate
        logo
        name
        totalStudents
        slug
        published
        createdAt
        updatedAt
        owner
        programs {
          nextToken
        }
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
    $from: Int
  ) {
    searchSchools(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        city
        country
        coverPhoto
        contactEmail
        contactJobTitle
        contactName
        contactPhone
        contractStatus
        creationYear
        description
        institutionType
        internationalStudents
        lastUpdate
        logo
        name
        totalStudents
        slug
        published
        createdAt
        updatedAt
        owner
        programs {
          nextToken
        }
      }
      nextToken
      total
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
        applicationFee
        applicationFeeCurrency
        city
        costOfLiving
        costOfLivingCurrency
        country
        degree
        description
        discipline
        duration
        durationUnit
        fee
        feeCurrency
        feeUnit
        feesAndFinancing
        gradePointAverage
        highestEducationLevel
        intakeInformation
        intakes
        languages
        lastUpdate
        minimumAge
        minimumWorkExperience
        minimumWorkExperienceUnit
        name
        otherRequirements
        published
        requestedDocuments {
          name
          isMandatory
          storageKey
          description
          condition
          isSpecific
        }
        schedule
        schoolId
        schoolName
        slug
        submissionDeadline
        testCambridgeAdvanced
        testCambridgeFirst
        testCeliCilsItPlida
        testDele
        testDelfdalf
        testGmat
        testGoethe
        testGre
        testIelts
        testTagemage
        testTcftef
        testToefl
        testToeic
        createdAt
        updatedAt
        owner
        school {
          id
          city
          country
          coverPhoto
          contactEmail
          contactJobTitle
          contactName
          contactPhone
          contractStatus
          creationYear
          description
          institutionType
          internationalStudents
          lastUpdate
          logo
          name
          totalStudents
          slug
          published
          createdAt
          updatedAt
          owner
        }
      }
      nextToken
    }
  }
`;
export const getProgram = /* GraphQL */ `
  query GetProgram($id: ID!) {
    getProgram(id: $id) {
      id
      applicationFee
      applicationFeeCurrency
      city
      costOfLiving
      costOfLivingCurrency
      country
      degree
      description
      discipline
      duration
      durationUnit
      fee
      feeCurrency
      feeUnit
      feesAndFinancing
      gradePointAverage
      highestEducationLevel
      intakeInformation
      intakes
      languages
      lastUpdate
      minimumAge
      minimumWorkExperience
      minimumWorkExperienceUnit
      name
      otherRequirements
      published
      requestedDocuments {
        name
        isMandatory
        storageKey
        description
        condition
        isSpecific
      }
      schedule
      schoolId
      schoolName
      slug
      submissionDeadline
      testCambridgeAdvanced
      testCambridgeFirst
      testCeliCilsItPlida
      testDele
      testDelfdalf
      testGmat
      testGoethe
      testGre
      testIelts
      testTagemage
      testTcftef
      testToefl
      testToeic
      createdAt
      updatedAt
      owner
      school {
        id
        city
        country
        coverPhoto
        contactEmail
        contactJobTitle
        contactName
        contactPhone
        contractStatus
        creationYear
        description
        institutionType
        internationalStudents
        lastUpdate
        logo
        name
        totalStudents
        slug
        published
        createdAt
        updatedAt
        owner
        programs {
          nextToken
        }
      }
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
        applicationFee
        applicationFeeCurrency
        city
        costOfLiving
        costOfLivingCurrency
        country
        degree
        description
        discipline
        duration
        durationUnit
        fee
        feeCurrency
        feeUnit
        feesAndFinancing
        gradePointAverage
        highestEducationLevel
        intakeInformation
        intakes
        languages
        lastUpdate
        minimumAge
        minimumWorkExperience
        minimumWorkExperienceUnit
        name
        otherRequirements
        published
        requestedDocuments {
          name
          isMandatory
          storageKey
          description
          condition
          isSpecific
        }
        schedule
        schoolId
        schoolName
        slug
        submissionDeadline
        testCambridgeAdvanced
        testCambridgeFirst
        testCeliCilsItPlida
        testDele
        testDelfdalf
        testGmat
        testGoethe
        testGre
        testIelts
        testTagemage
        testTcftef
        testToefl
        testToeic
        createdAt
        updatedAt
        owner
        school {
          id
          city
          country
          coverPhoto
          contactEmail
          contactJobTitle
          contactName
          contactPhone
          contractStatus
          creationYear
          description
          institutionType
          internationalStudents
          lastUpdate
          logo
          name
          totalStudents
          slug
          published
          createdAt
          updatedAt
          owner
        }
      }
      nextToken
    }
  }
`;
export const getProgramBySchool = /* GraphQL */ `
  query GetProgramBySchool(
    $schoolId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelProgramFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getProgramBySchool(
      schoolId: $schoolId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        applicationFee
        applicationFeeCurrency
        city
        costOfLiving
        costOfLivingCurrency
        country
        degree
        description
        discipline
        duration
        durationUnit
        fee
        feeCurrency
        feeUnit
        feesAndFinancing
        gradePointAverage
        highestEducationLevel
        intakeInformation
        intakes
        languages
        lastUpdate
        minimumAge
        minimumWorkExperience
        minimumWorkExperienceUnit
        name
        otherRequirements
        published
        requestedDocuments {
          name
          isMandatory
          storageKey
          description
          condition
          isSpecific
        }
        schedule
        schoolId
        schoolName
        slug
        submissionDeadline
        testCambridgeAdvanced
        testCambridgeFirst
        testCeliCilsItPlida
        testDele
        testDelfdalf
        testGmat
        testGoethe
        testGre
        testIelts
        testTagemage
        testTcftef
        testToefl
        testToeic
        createdAt
        updatedAt
        owner
        school {
          id
          city
          country
          coverPhoto
          contactEmail
          contactJobTitle
          contactName
          contactPhone
          contractStatus
          creationYear
          description
          institutionType
          internationalStudents
          lastUpdate
          logo
          name
          totalStudents
          slug
          published
          createdAt
          updatedAt
          owner
        }
      }
      nextToken
    }
  }
`;
export const searchPrograms = /* GraphQL */ `
  query SearchPrograms(
    $filter: SearchableProgramFilterInput
    $sort: SearchableProgramSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchPrograms(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        applicationFee
        applicationFeeCurrency
        city
        costOfLiving
        costOfLivingCurrency
        country
        degree
        description
        discipline
        duration
        durationUnit
        fee
        feeCurrency
        feeUnit
        feesAndFinancing
        gradePointAverage
        highestEducationLevel
        intakeInformation
        intakes
        languages
        lastUpdate
        minimumAge
        minimumWorkExperience
        minimumWorkExperienceUnit
        name
        otherRequirements
        published
        requestedDocuments {
          name
          isMandatory
          storageKey
          description
          condition
          isSpecific
        }
        schedule
        schoolId
        schoolName
        slug
        submissionDeadline
        testCambridgeAdvanced
        testCambridgeFirst
        testCeliCilsItPlida
        testDele
        testDelfdalf
        testGmat
        testGoethe
        testGre
        testIelts
        testTagemage
        testTcftef
        testToefl
        testToeic
        createdAt
        updatedAt
        owner
        school {
          id
          city
          country
          coverPhoto
          contactEmail
          contactJobTitle
          contactName
          contactPhone
          contractStatus
          creationYear
          description
          institutionType
          internationalStudents
          lastUpdate
          logo
          name
          totalStudents
          slug
          published
          createdAt
          updatedAt
          owner
        }
      }
      nextToken
      total
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      category
      content
      lastUpdate
      published
      slug
      title
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        category
        content
        lastUpdate
        published
        slug
        title
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPostBySlug = /* GraphQL */ `
  query GetPostBySlug(
    $slug: String
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPostBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        category
        content
        lastUpdate
        published
        slug
        title
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const searchPosts = /* GraphQL */ `
  query SearchPosts(
    $filter: SearchablePostFilterInput
    $sort: SearchablePostSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchPosts(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        category
        content
        lastUpdate
        published
        slug
        title
        createdAt
        updatedAt
        owner
      }
      nextToken
      total
    }
  }
`;
