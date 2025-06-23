import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Dragons(props) {
  const focusTarget = useRef(null);
  let { state } = useLocation();

  useEffect(() => {
    if (state?.isNavigating) {
      focusTarget.current.focus();
      window.history.replaceState({ ...state, isNavigating: false }, "");
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Dragons | React Demo</title>
      </Helmet>
      <h1 tabIndex="-1" ref={focusTarget}>
        Dragons
      </h1>
      <p>Have you ever wanted the thrill of a lifetime?</p>
      <p>Are you ok with that lifetime being incredibly short?</p>
      <p>Sounds like you need a Dragon!</p>
      <p>
        Dragons live for a super long time and are entirely self-sufficient. The
        eat a lot, but hey it's not like you have control over their diet anyway
        so let them go at it!
      </p>
      <p>
        If you don't think you're up for the challenge, then try one of these
        lesser creature:
      </p>
      <ul>
        <li>
          <Link to="/Cats" state={{ isNavigating: true }}>
            Cats
          </Link>
        </li>
        <li>
          <Link to="/Dogs" state={{ isNavigating: true }}>
            Dogs
          </Link>
        </li>
      </ul>
    </>
  );
}
