import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Dogs(props) {
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
        <title>Dogs | React Demo</title>
      </Helmet>
      <h1 tabIndex="-1" ref={focusTarget}>
        Dogs
      </h1>
      <p>
        Dogs require a lot of attention, but make great companions. Take them on
        regular walks and make sure they get plenty of exercise.
      </p>
      <p>
        If you don't think you're up to the challenge of having a dog, try
        a&nbsp;
        <Link to="/Cats" state={{ isNavigating: true }}>
          Cat
        </Link>
        &nbsp;instead!
      </p>
      <p>
        Or, if you want a real challenge, check out a&nbsp;
        <Link to="/Dragons" state={{ isNavigating: true }}>
          Dragon
        </Link>
        !
      </p>
    </>
  );
}
