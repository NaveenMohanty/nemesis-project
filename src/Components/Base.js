import React from "react";
import { Redirect, Link } from "react-router-dom";
import { isAuthenticated, signOut } from "../auth/auth";

const Base = ({ userName = "Sign In to Continue!", classname, children }) => {
  return (
    <div>
      <div className="topnav">
        <Link className="active" href="#">
          {userName}
        </Link>
        {isAuthenticated() && (
          <Link
            onClick={() => {
              signOut(() => <Redirect to="/" />);
            }}
          >
            Sign Out
          </Link>
        )}
      </div>

      <div className={classname}>{children}</div>

      <footer id="colophon" className="site-footer" role="contentinfo">
        <div className="social-wrapper">
          <ul>
            <li>
              <a
                style={{ display: "table-cell" }}
                target="_blank"
                href="https://github.com/NaveenMohanty/nemesis-project"
              >
                <img
                  src="https://icons.iconarchive.com/icons/limav/flat-gradient-social/96/Github-icon.png"
                  alt="GitHub Logo"
                  className="facebook-icon"
                />
              </a>
            </li>
            <li>
              <a
                style={{ display: "table-cell" }}
                target="_blank"
                href="https://www.linkedin.com/in/naveen-mohanty/"
              >
                <img
                  src="https://icons.iconarchive.com/icons/limav/flat-gradient-social/96/Linkedin-icon.png"
                  alt="LinkedIn Logo"
                  className="googleplus-icon"
                />
              </a>
            </li>
          </ul>
        </div>

        <nav className="footer-nav" role="navigation">
          <p>
            Click on the Above GiHub icon to go to This Project GitHub Repo or
            LinkedIn Icon to visit My LinkedIn profile.
          </p>
        </nav>
      </footer>
    </div>
  );
};

export default Base;
