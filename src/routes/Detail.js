import React from "react";
import "../routes/Detail.css";
import ReactPlayer from "react-player";

class Detail extends React.Component {
  componentDidMount() {
    //Detail 컴포넌트로 마운트되면 실행
    const { location, history } = this.props;

    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    console.log(location);
    if (location.state) {
      return (
        <section className="detail__container">
          <div className="detail-page">
            <ReactPlayer
              className="movie-player"
              url="https://www.youtube.com/watch?v=7C2z4GqqS5E"
              controls
              width="80%"
            ></ReactPlayer>
            <h2 className="detail-page__title">{location.state.title}</h2>
            <p className="detail-page__content">{location.state.summary}</p>
          </div>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
