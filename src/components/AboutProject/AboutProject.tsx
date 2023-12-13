import styles from './AboutProject.module.scss';

const AboutProject = () => {
  return (
    <div className={styles.container}>
      <h3>About project</h3>
      <p>
        This project is the final{' '}
        <a
          target="_blank"
          href={
            'https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/graphiql.md'
          }
          rel="noreferrer"
        >
          assignment
        </a>{' '}
        for Rolling Scopes School&apos;s React course.{' '}
      </p>
      <p>
        The GraphiQL application is a GraphQL playground/IDE. It includes
        authorization using Firebase for email/password sign-in, client-side
        validation, and redirects upon successful login. The app doesn&apos;t
        require a backend, supporting any open GraphQL API with CORS.
      </p>
      <p>
        The structure consists of a welcome page, a sticky header with animated
        changes, and a persistent footer. The main page (GraphiQL) is a private
        route with sections for query editing, variables, headers,
        documentation, and a read-only response area. Users can switch GraphQL
        endpoints with the «Change Endpoint» button.
      </p>
      <p>
        Project include at least 80% test coverage, ESLint, Prettier, and Husky
        hooks.
      </p>
      <p>
        Design-wise, the app prioritizes attention to detail, adaptive layout,
        interactivity, and a unified style. App handles API errors in a
        user-friendly format and implements localization in at two languages
        (Russian and English).
      </p>
    </div>
  );
};

export default AboutProject;
