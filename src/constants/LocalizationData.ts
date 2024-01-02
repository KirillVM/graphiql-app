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

    form: {
      emailLabel: 'Email',
      passwordLabel: 'Password',
      confirmPasswordLabel: 'Confirm password',
      submitButton: 'Submit',
    },
  },

  //Russian
  ru: {
    aboutProject: {
      header: 'О проекте',
      taskLink: 'заданием',
      paragraphs: [
        `Этот проект является`,

        `курса React школы Rolling Scopes`,

        `Приложение GraphiQL — это игровая площадка/IDE GraphQL.
        Оно включает в себя авторизацию с использованием Firebase для входа
        в систему по электронной почте/паролю, проверку на стороне клиента
        и перенаправление при успешном входе в систему. Приложению не требуется
        серверная часть и оно поддерживает любой открытый API GraphQL с CORS.`,

        `The GraphiQL application is a GraphQL playground/IDE.`,

        `Структура состоит из страницы приветствия, прикрепленного заголовка
        с анимированными изменениями и постоянного нижнего колонтитула.
        Главная страница (GraphiQL) представляет собой частный маршрут
        с разделами для редактирования запросов, переменными, заголовками,
        документацией и областью ответов, доступной только для чтения.
        Пользователи могут переключать конечные точки GraphQL с помощью кнопки
        «Изменить конечную точку».`,

        `Проект включает не менее 80 % тестового покрытия, ESLint, Prettier и Husky hooks.`,

        `С точки зрения дизайна, основное внимание было сфокусировано на деталях,
        адаптивном макете, интерактивности и едином стиле. Приложение обрабатывает
        ошибки API в удобном для пользователя формате и реализует локализацию на двух
        языках (русский и английский)`,
      ],
    },
    educationalProgram: {
      header: 'Наша образовательная программа',
      paragraphs: [
        `RS School — это образовательная программа, организуемая сообществом
        разработчиков The Rolling Scopes с 2013 года. Основная идея RS School
        — образование должно быть доступно каждому, независимо от возраста,
        профессионального статуса и места жительства. В RS School обучение
        совершенно бесплатное. Главные инструкторы и тренеры — опытные front-end
        и JavaScript-разработчики из разных уголков мира и разных компаний.
        Они готовы поделиться своими знаниями и опытом, помогая студентам
        исследовать мир веб-разработки.`,

        `Принцип RS School – это «Открытость и передача знаний вперед».
        Все образовательные материалы и платформа программы находятся
        в публичном доступе на GitHub и YouTube. Что особенно важно,
        ученики RS School, получившие бесплатное образование, приглашаются
        вернуться в будущем в качестве наставников, чтобы передать свои
        знания следующему поколению учеников.`,

        `RS School предлагает разнообразные курсы, включая курсы по JavaScript,
        фронтенд-разработке, а также курсы по React. Эти курсы доступны онлайн,
        что делает обучение очень гибким и удобным для всех, кто заинтересован.
        Присоединяйтесь к RS School и погрузитесь в мир веб-разработки,
        где образование — мощный инструмент для самосовершенствования
        и успешной карьеры.`,
      ],
    },

    developerCard: {
      headerBiography: `Биография:`,
      headerContribution: `Вклад:`,
      headerGithub: `Github:`,
      showDetailsButton: 'Показать детали',
      hideDetailsButton: 'Скрыть детали',
    },

    welcomePage: {
      headerWelcomePage: `Домашняя страница`,
      headerOurTeam: `Наша команда`,
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
      message: 'Здесь нет площадки для запросов GraphQL',
      linkToWelcome: 'Перейти на домашнюю страницу',
    },

    account: {
      have: `Уже есть учетная запись? `,
      notHave: `Нет учетной записи? `,
    },

    form: {
      emailLabel: 'Имейл',
      passwordLabel: 'Пароль',
      confirmPasswordLabel: 'Подтвердите пароль',
      submitButton: 'Отправить',
    },
  },
};

export type LocalizationKey = keyof typeof localization;
export type LocalizationData = (typeof localization)[LocalizationKey];
