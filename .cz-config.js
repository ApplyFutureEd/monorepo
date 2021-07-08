module.exports = {
    types: [
        { value: 'quest', name: '⚔️  Quest            Quest to add a new feature that answer a problem' },
        { value: 'bounty-hunt', name: '💥 Bounty Hunt      Bounty Hunt to chase a bug' },
    ],

    scopes: [
        { name: 'students' },
        { name: 'admin' },
        { name: 'i18n' },
        { name: 'monorepo' },
    ],

    allowTicketNumber: false,
    isTicketNumberRequired: false,
    ticketNumberPrefix: 'TICKET-',
    ticketNumberRegExp: '\\d{1,5}',

    // it needs to match the value for field type. Eg.: 'fix'
    /*
    scopeOverrides: {
      fix: [
        {name: 'merge'},
        {name: 'style'},
        {name: 'e2eTest'},
        {name: 'unitTest'}
      ]
    },
    */
    // override the messages, defaults are as follows
    messages: {
        type: "Select the type of change that you're committing:",
        // used if allowCustomScopes is true
        customScope: '\nSelect the scope of this change (optional)',
        subject: 'Write a short, imperative tense description of the change:\n',
        footer: 'Quest resolved by this change (optional). E.g.: #31, #34:\n',
        confirmCommit: 'Are you sure you want to proceed with the commit above?'
    },

    allowCustomScopes: true,
    allowBreakingChanges: ['quest', 'bounty-hunt'],
    // skip any questions you want
    skipQuestions: ['body', "breaking"],

    // limit subject length
    subjectLimit: 100,
    // breaklineChar: '|', // It is supported for fields body and footer.
    footerPrefix: 'Resolves'
    // askForBreakingChangeFirst : true, // default is false
};
