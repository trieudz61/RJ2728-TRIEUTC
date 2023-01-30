import React, { Component } from "react";
import {
  AiFillLike,
  AiFillDislike,
  AiOutlineStar,
  AiFillStar,
} from "react-icons/ai";
interface IProps {}
type State = {
  isLike: Boolean;
  numStar: Number;
};
export default class LikeRate extends React.Component<IProps, State> {
  state = {
    isLike: false,
    numStar: 0,
  };
  handleLike = () => {
    this.setState((state) => ({
      isLike: !state.isLike,
    }));
  };
  handleRate = (input: Number) => {
    this.setState(() => ({
      numStar: input,
    }));
  };
  render() {
    return (
      <>
        <div onClick={() => this.handleLike()}>
          {this.state.isLike ? <AiFillDislike /> : <AiFillLike />}
        </div>
        <div className="d-flex">
          <div onClick={() => this.handleRate(1)}>
            {this.state.numStar < 1 ? <AiOutlineStar /> : <AiFillStar />}
          </div>
          <div onClick={() => this.handleRate(2)}>
            {this.state.numStar < 2 ? <AiOutlineStar /> : <AiFillStar />}
          </div>
          <div onClick={() => this.handleRate(3)}>
            {this.state.numStar < 3 ? <AiOutlineStar /> : <AiFillStar />}
          </div>
          <div onClick={() => this.handleRate(4)}>
            {this.state.numStar < 4 ? <AiOutlineStar /> : <AiFillStar />}
          </div>
          <div onClick={() => this.handleRate(5)}>
            {this.state.numStar < 5 ? <AiOutlineStar /> : <AiFillStar />}
          </div>
          <div onClick={() => this.handleRate(0)}>-----Bỏ đánh giá</div>
        </div>
      </>
    );
  }
}
