import { defineLocale } from ".";

export default defineLocale({
    name: "Deutsch",
    routes: {
        home: "Startseite",
        about: "Über mich",
        contact: "Kontakt",
    },
    footer: {
        originalSourceCode: "originalseite von vendicated",
        sourceCode: "quellcode",
    },
    home: {
        title: "ItsNiceCraft",
        description: "Meine Website",
        hello: "<0>ItsNiceCraft</0>",
        about: "Deutscher Backend-Softwareentwickler",
        socialsTitle: "Online bin ich hier anzutreffen:",
    },
    about: {
        title: "Über mich",
        description: "Mehr Informationen über meine Projekte",
        intro: "Ich bin Ende 2017 mit Go ins Programmieren eingestiegen und interessiere mich seitdem für Backend-Entwicklung",
        stack: "Stack",
        projects: "Projekte",
    },
    contact: {
        title: "Kontaktier mich",
        description: "Erfahre wie du mich kontaktieren kannst",
        socials: "Soziale Medien",
        sendMessage: "Schick mir eine Nachricht",
        name: "Name",
        namePlaceholder: "Ich ;)",
        email: "Email",
        emailPlaceholder: "ich@example.org",
        message: "Nachricht",
        send: "Senden",
        noscript:
            "Du musst JavaScript aktivieren um dieses Formular zu nutzen.",
    },
    "404": {
        title: "Nicht gefunden",
        description: "Diese Seite existiert nicht.",
        notFound: "Diese Seite existiert nicht.",
    },
});
