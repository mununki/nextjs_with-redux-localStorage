import Link from "next/link";
import { connect } from "react-redux";
import { toggleLogged } from "../store";
import { verifyToken, saveToken, removeToken } from "../utils/token";

class Auth extends React.Component {
  _logIn = async () => {
    const token = "thisistoken";
    if (verifyToken(token)) {
      await saveToken(token);
      this.props.dispatch(toggleLogged(true, token));
    } else {
      alert("The token is not correct!");
    }
  };
  _logOut = async () => {
    await removeToken();
    this.props.dispatch(toggleLogged(false, ""));
  };
  render() {
    const { isLoggedIn } = this.props;
    return (
      <div>
        <div>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
        <div>
          {isLoggedIn ? (
            <button onClick={this._logOut}>Log out</button>
          ) : (
            <button onClick={this._logIn}>Log in</button>
          )}
        </div>
        <style jsx>{`
          div {
            margin: 20px 0;
          }
        `}</style>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { isLoggedIn } = state;
  return { isLoggedIn };
}

export default connect(mapStateToProps)(Auth);
