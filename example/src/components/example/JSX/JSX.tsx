import React from "react";
import Style from "./JSX.module.css";
type Props = {};

const JSX: React.FC = (Props) => {
  return (
    <div className={`${Style.body}`}>
      <div className="row">
        <div className="col-md-3" style={{ textAlign: "left" }}>
          <ul style={{ marginTop: "3vh", paddingLeft: 0, marginLeft: "0%" }}>
            <li className={Style.item}>The Drive</li>
            <li className={Style.item}>The Walk</li>
            <li className={Style.item}>The Return</li>
            <li className={Style.item}>The End</li>
          </ul>
        </div>
        <div className="col-md-6" style={{ marginTop: "6vh" }}>
          <h1>The Walk</h1>
          <p style={{ fontWeight: "bold" }}>
            The walk to the Pulpit Rock will take you approximately two hours,
            give or take an hour depending on the weather conditions and your
            physical shape.
          </p>
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://a.cdn-hotels.com/gdcs/production152/d996/c45c6d23-25e3-46c9-9ffe-7ca8c4840e54.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://a.cdn-hotels.com/gdcs/production152/d996/c45c6d23-25e3-46c9-9ffe-7ca8c4840e54.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://a.cdn-hotels.com/gdcs/production152/d996/c45c6d23-25e3-46c9-9ffe-7ca8c4840e54.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-md-3" style={{ marginTop: "5vh" }}>
          <div className={`${Style.question}`}>
            <h2>What</h2>
            <p>
              The Pulpit Rock is a part of a mountain that looks like a pulpit.
            </p>
            <h2>Where?</h2>
            <p>The Pulpit Rock is in Norway</p>
            <h2>Price? ?</h2>
            <p>The walk is free!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JSX;
