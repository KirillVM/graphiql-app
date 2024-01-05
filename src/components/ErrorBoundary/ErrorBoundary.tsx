import { Component, ErrorInfo } from 'react';
import styles from './ErrorBoundary.module.scss';
import clsx from 'clsx';
import { Props, State } from './ErrorBoundary.interface';

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={clsx(styles.container)}>
          <p style={{ margin: 0 }}>
            {' '}
            Sorry.. there was an error.Please restart the app
          </p>
          <div className={clsx(styles.animation)}></div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
