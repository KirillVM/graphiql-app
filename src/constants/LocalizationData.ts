export const localization = {
  en: {
    aboutProject: {
      header: 'About project',
      taskLink: 'assignment',
      paragraph: [
        'This project is the final',

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
  },
  ru: {
    aboutProject: {
      header: 'О проекте',
      taskLink: 'assignment',
      paragraph: [
        'This project is the final',

        'for Rolling Scopes School&apos;s React course',

        `The GraphiQL application is a GraphQL playground/IDE. It includes
        authorization using Firebase for email/password sign-in, client-side
        validation, and redirects upon successful login. The app doesn&apos;t
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
  },
};

export type LocalizationKey = keyof typeof localization;
export type LocalizationData = (typeof localization)[LocalizationKey];
