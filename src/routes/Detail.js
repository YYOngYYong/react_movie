import React from "react";
import "../routes/Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    //Detail 컴포넌트로 마운트되면 실행!
    const { location, history } = this.props;

    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}

export default Detail;
