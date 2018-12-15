import Link from "next/link";
import { connect } from "react-redux";

class Login extends React.Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <div>
        <div>
          <Link href="/">
            <a>{`<< Home`}</a>
          </Link>
        </div>
        <div>
          {isLoggedIn ? (
            <h3>This is about you</h3>
          ) : (
            <h3>You need to log in first</h3>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { isLoggedIn } = state;
  return { isLoggedIn };
}

export default connect(mapStateToProps)(Login);
