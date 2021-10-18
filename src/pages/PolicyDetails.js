import { connect } from "react-redux";

const PolicyDetails = () => {
  return <div>Policy page goes here !</div>;
};

export default connect((state) => state.api)(PolicyDetails);
