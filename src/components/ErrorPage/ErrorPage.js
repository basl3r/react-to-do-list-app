import PageTitle from "../PageTitle/PageTitle";
import styles from './ErrorPage.module.scss';
import Button from "../Button/Button";

const ErrorPage = () => {
  return(
    <div className={styles.center}>
      <PageTitle>
        404 Page not found
      </PageTitle>
      <Button>
        <a href='/'> Go to Homepage</a>
      </Button>
    </div>
  );
};

export default ErrorPage;