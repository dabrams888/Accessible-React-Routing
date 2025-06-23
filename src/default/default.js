import { Helmet } from "react-helmet";

export default function Default(props) {
  return (
    <>
      <Helmet>
        <title>Home | React Demo</title>
      </Helmet>
      <h1>Welcome!</h1>
      <p>
        Check out our great pets by picking one of the links in the site header.
      </p>
    </>
  );
}
