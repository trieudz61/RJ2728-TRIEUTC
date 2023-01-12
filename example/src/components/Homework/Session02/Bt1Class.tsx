import React, { Component } from "react";
import Style from "./Bt1.module.css";
interface IProps {
  title: string;
  percent: number;
  color_1: string;
  color_2: string;
}

export default class Bt1Class extends React.Component<IProps> {
  render() {
    return (
      <div className={Style.all_body}>
        <div style={{ backgroundColor: this.props.color_1, flex: "0.2" }}>
          <p className={Style.title__style}>{this.props.title}</p>
        </div>
        <div className={Style.d_flex} style={{ flex: "0.8" }}>
          <div
            style={{
              backgroundColor: `${this.props.color_2}`,
              flex: `${this.props.percent / 100}`,
            }}
          >
            <p className={Style.title__style}>{this.props.percent}%</p>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}
