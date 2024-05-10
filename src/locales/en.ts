export default {
    name: "English",
    routes: {
        home: "Home",
        about: "About",
        contact: "Contact",
    },
    footer: {
        originalSourceCode: "original page design by vendicated",
        sourceCode: "source code",
    },
    home: {
        title: "ItsNiceCraft",
        description: "My personal website",
        hello: "<0>ItsNiceCraft</0>",
        about: "German backend developer",
        socialsTitle: "Find me online:",
    },
    about: {
        title: "About me",
        description: "Learn more about me and my projects",
        intro: "I started coding Go application in 2017 and am very interested in all things backend development since then",
        stack: "Tech Stack",
        projects: "Projects",
    },
    contact: {
        title: "Contact me",
        description: "Learn how to contact me",
        socials: "Social media",
        sendMessage: "Send me a message",
        name: "Name",
        namePlaceholder: "Me ;)",
        email: "Email",
        emailPlaceholder: "me@example.org",
        message: "Message",
        send: "Send",
        noscript: "You need to enable JavaScript to use this form.",
    },
    "404": {
        title: "404 Not Found",
        description: "This page does not exist.",
        notFound: "This page does not exist.",
    },
} as const;
