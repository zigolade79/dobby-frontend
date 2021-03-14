import { useReactiveVar } from "@apollo/client";
import { Link, useHistory } from "react-router-dom";
import { isLoggedInVar } from "../apollo";
import { LS_TOKEN } from "../constants";
import { useMe } from "../hooks/useMe";
import podcastLogo from "../images/logo.png";
export const Header: React.FC = () => {
  //const { data } = useMe();
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const history = useHistory();
  const onClick = () => {
    isLoggedInVar(false);
    localStorage.removeItem(LS_TOKEN);
    history.push("/");
  };
  return (
    <header className="py-4">
      <div className="w-full px-5 xl:px-10 mx-auto max-w-screen-xl flex justify-between">
        <div className="flex justify-between items-center">
          <div>
            <a href="/">
              {" "}
              <img src={podcastLogo} className="max-h-12 max-w-20" />
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span>
            {!isLoggedIn && (
              <a className="hover:underline mx-5" href="/create-account">
                Sign in
              </a>
            )}
          </span>
          <span>
            {!isLoggedIn && (
              <a className="hover:underline mx-5" href="/login">
                Log in
              </a>
            )}
          </span>
          <span>
            {isLoggedIn && (
              <a className="hover:underline mx-5" href="/tools">
                Tool
              </a>
            )}
          </span>
          <span>
            {isLoggedIn && <button onClick={onClick}>Log out</button>}
          </span>
          {}
          <span>
            <Link
              className="hover:underline flex p-1"
              to="/user-profile"
            ></Link>
          </span>{" "}
        </div>
      </div>
    </header>
  );
};
