import { connect } from "react-redux";
import Clock from "./clock";
import Counter from "./counter";
import Auth from "./auth";

function Examples({ lastUpdate, light }) {
  return (
    <div>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
      <Auth />
    </div>
  );
}

function mapStateToProps(state) {
  const { lastUpdate, light } = state;
  return { lastUpdate, light };
}

export default connect(mapStateToProps)(Examples);
