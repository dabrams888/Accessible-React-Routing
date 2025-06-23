import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Cats(props) {
  const focusTarget = useRef(null);
  let { state } = useLocation();

  useEffect(() => {
    if (state?.isNavigating) {
      console.log("here");

      focusTarget.current.focus();
      window.history.replaceState({ ...state, isNavigating: false }, "");
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Cats | React Demo</title>
      </Helmet>
      <h1 tabIndex="-1" ref={focusTarget}>
        Cats
      </h1>
      <p>
        Cats are a great low-maintenance pet. They mostly take care of
        themselves. Just make sure they have access to food, water, and a clean
        litter box!
      </p>
      <p>
        If you're up for a bigger challenge, check out these other types of
        pets:
      </p>
      <ul>
        <li>
          <Link to="/Dogs" state={{ isNavigating: true }}>
            Dogs
          </Link>
        </li>
        <li>
          <Link to="/Dragons" state={{ isNavigating: true }}>
            Dragons
          </Link>
        </li>
      </ul>
    </>
  );
}
