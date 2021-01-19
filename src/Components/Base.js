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
              <Link>
                <img
                  src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png"
                  alt="Twitter Logo"
                  className="twitter-icon"
                />
              </Link>
            </li>
            <li>
              <Link>
                <img
                  src="https://www.mchenryvillage.com/images/instagram-icon.png"
                  alt="Instagram Logo"
                  className="instagram-icon"
                />
              </Link>
            </li>

            <li>
              <Link>
                <img
                  src="http://www.iconarchive.com/download/i54037/danleech/simple/facebook.ico"
                  alt="Facebook Logo"
                  className="facebook-icon"
                />
              </Link>
            </li>
            <li>
              <Link>
                <img
                  src="http://icons.iconarchive.com/icons/marcus-roberto/google-play/256/Google-plus-icon.png"
                  alt="Googleplus Logo"
                  className="googleplus-icon"
                />
              </Link>
            </li>
          </ul>
        </div>

        <nav className="footer-nav" role="navigation">
          <p>Copyright &copy; 2013 All rights reserved.</p>
        </nav>
      </footer>
    </div>
  );
};

export default Base;
