import React from "react";
import "../routes/Detail.css";
import ReactPlayer from "react-player";

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
      return (
        <div className="detail-page">
          <span>{location.state.title}</span>
          <ReactPlayer
            className="movie-player"
            url="https://www.youtube.com/watch?v=7C2z4GqqS5E"
            controls
            width="80%"
          ></ReactPlayer>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
