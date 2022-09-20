export const routes = {
    home: { label: 'home', route: '/' },
    about: { label: 'about', route: '/about' },
    privacyPolicy: { label: 'privacyPolicy', route: '/privacyPolicy' },
    termOfUse: { label: 'termOfUse', route: '/termOfUse' },
    authPolicy: { label: 'authPolicy', route: '/401' },
    notFound: { label: 'notFound', route: '/404' },
    QUIZ: {label:'quiz', route:'/quiz'},


    guestNavBar: {
        whatCanYouDo: { label: 'What can you do', route: '/#whatCanYouDo' }, //later label can be used for translation
        howItWorks: { label: 'How it works', route: '/#howItWorks' },
        whoWeAre: { label: 'Who we are', route: '/#whoWeAre' }
    },
    agencyNavBar: {
        editProfile: { label: 'editProfile', route: '/add-edit' },
        whoWeAre: { label: 'whoWeAre', route: '/#whoWeAre' },
        howItWorks: { label: 'howItWorks', route: '/#howItWorks' },
        faq: { label: 'faq', route: '/#faq' },
    },

    footerNavBar:{
        impressum:{ label: 'Impressum', route: 'https://aclipp.com/impressum' },
        datenschutz:{ label: 'Datenschutzerklärung', route: 'https://aclipp.com/datenschutz' },
        agbs:{ label: 'AGBs', route: 'https://aclipp.com/add-edit' },

    }
}

