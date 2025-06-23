import "./styles.css";
import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="app-container">
      <header>
        <nav aria-label="site">
          <div className="site-title">React Demo</div>
          <ul role="list">
            <li>
              <Link to="Cats" state={{ isNavigating: true }}>
                Cats
              </Link>
            </li>
            <li>
              <Link to="Dogs" state={{ isNavigating: true }}>
                Dogs
              </Link>
            </li>
            <li>
              <Link to="Dragons" state={{ isNavigating: true }}>
                Dragons
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
