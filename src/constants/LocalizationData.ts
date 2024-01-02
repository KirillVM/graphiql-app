export const localization = {
  //English
  en: {
    aboutProject: {
      header: 'About project',
      taskLink: 'assignment',
      paragraphs: [
        `This project is the final`,

        `for Rolling Scopes School's React course`,

        `The GraphiQL application is a GraphQL playground/IDE. It includes
        authorization using Firebase for email/password sign-in, client-side
        validation, and redirects upon successful login. The app doesn't
        require a backend, supporting any open GraphQL API with CORS.`,

        `The structure consists of a welcome page, a sticky header with animated
        changes, and a persistent footer. The main page (GraphiQL) is a private
        route with sections for query editing, variables, headers,
        documentation, and a read-only response area. Users can switch GraphQL
        endpoints with the «Change Endpoint» button.`,

        `Project include at least 80% test coverage, ESLint, Prettier, and Husky
        hooks.`,

        `Design-wise, the app prioritizes attention to detail, adaptive layout,
        interactivity, and a unified style. App handles API errors in a
        user-friendly format and implements localization in at two languages
        (Russian and English).`,
      ],
    },
    educationalProgram: {
      header: 'Our educational program',
      paragraphs: [
        `RS School is an educational program organized by The Rolling Scopes
        developer community since 2013. The core idea of RS School is that
        education should be accessible to everyone, regardless of age,
        professional status, or place of residence. In RS School, education is
        entirely free of charge. The main instructors and trainers are
        experienced front-end and JavaScript developers from various parts of
        the world and different companies. They are ready to share their
        knowledge and expertise, helping students explore the world of web
        development.`,

        `The principle of RS School is «Openness and Passing Knowledge
        Forward». All educational materials and the program's platform
        are publicly available on GitHub and YouTube. What's particularly
        important is RS School students who have received free education are
        invited to return in the future as mentors to pass on their knowledge
        to the next generation of students.`,

        `RS School offers a variety of courses, including JavaScript, front-end
        development, as well as React courses. These courses are available
        online, making learning highly flexible and convenient for all who are
        interested. Join RS School and dive into the world of web development,
        where education is a powerful tool for self-improvement and a
        successful career.`,
      ],
    },
    developerCard: {
      headerBiography: `Biography:`,
      headerContribution: `Contribution:`,
      headerGithub: `Github:`,
      showDetailsButton: 'Show details',
      hideDetailsButton: 'Hide details',
    },
    welcomePage: {
      headerWelcomePage: `Welcome Page`,
      headerOurTeam: `Our team`,
    },

    sign: {
      out: 'Sign Out',
      in: 'Sign In',
      up: 'Sign Up',
    },

    headerLinks: {
      '/': 'GraphiQL',
      graphiql: 'Welcome page',
    },

    toastMessages: {
      successSignIn: 'You succsessfuly sign in!',
    },

    notFoundPage: {
      message: 'There are no playground for graphQL requests here',
      linkToWelcome: 'Go to welcome page',
    },

    account: {
      have: `Have an account? `,
      notHave: `Don't have an account? `,
    },
  },

  //Russian
  ru: {
    aboutProject: {
      header: 'О проекте',
      taskLink: 'assignment',
      paragraphs: [
        `This project is the final`,

        `for Rolling Scopes School's React course`,

        `The GraphiQL application is a GraphQL playground/IDE. It includes
        authorization using Firebase for email/password sign-in, client-side
        validation, and redirects upon successful login. The app doesn't
        require a backend, supporting any open GraphQL API with CORS.`,

        `The structure consists of a welcome page, a sticky header with animated
        changes, and a persistent footer. The main page (GraphiQL) is a private
        route with sections for query editing, variables, headers,
        documentation, and a read-only response area. Users can switch GraphQL
        endpoints with the «Change Endpoint» button.`,

        `Project include at least 80% test coverage, ESLint, Prettier, and Husky
        hooks.`,

        `Design-wise, the app prioritizes attention to detail, adaptive layout,
        interactivity, and a unified style. App handles API errors in a
        user-friendly format and implements localization in at two languages
        (Russian and English).`,
      ],
    },
    educationalProgram: {
      header: 'Our educational program',
      paragraphs: [
        `RS School is an educational program organized by The Rolling Scopes
        developer community since 2013. The core idea of RS School is that
        education should be accessible to everyone, regardless of age,
        professional status, or place of residence. In RS School, education is
        entirely free of charge. The main instructors and trainers are
        experienced front-end and JavaScript developers from various parts of
        the world and different companies. They are ready to share their
        knowledge and expertise, helping students explore the world of web
        development.`,

        `The principle of RS School is «Openness and Passing Knowledge
        Forward». All educational materials and the program's platform
        are publicly available on GitHub and YouTube. What's particularly
        important is RS School students who have received free education are
        invited to return in the future as mentors to pass on their knowledge
        to the next generation of students.`,

        `RS School offers a variety of courses, including JavaScript, front-end
        development, as well as React courses. These courses are available
        online, making learning highly flexible and convenient for all who are
        interested. Join RS School and dive into the world of web development,
        where education is a powerful tool for self-improvement and a
        successful career.`,
      ],
    },

    developerCard: {
      headerBiography: `Biography:`,
      headerContribution: `Contribution:`,
      headerGithub: `Github:`,
      showDetailsButton: 'Show details',
      hideDetailsButton: 'Hide details',
    },

    welcomePage: {
      headerWelcomePage: `Welcome Page`,
      headerOurTeam: `Our team`,
    },

    sign: {
      out: 'Выйти',
      in: 'Войти',
      up: 'Зарегистрироваться',
    },

    headerLinks: {
      '/': 'GraphiQL',
      graphiql: 'Домашняя страница',
    },

    toastMessages: {
      successSignIn: 'You succsessfuly sign in!',
    },

    notFoundPage: {
      message: 'There are no playground for graphQL requests here',
      linkToWelcome: 'Go to welcome page',
    },

    account: {
      have: `Have an account? `,
      notHave: `Don't have an account? `,
    },
  },
};

export type LocalizationKey = keyof typeof localization;
export type LocalizationData = (typeof localization)[LocalizationKey];
