import React from "react";
import { useState } from "react";
import Style from "./Volume.module.css";
type IProps = {
  percent: number;
};

const Volume: React.FC<IProps> = (Props) => {
  const { percent } = Props;
  const [percentState, setpercentState] = useState<number>(percent);
  const plusPercent = () => {
    if (percentState < 10) {
      setpercentState(percentState + 1);
    }
  };
  const minusPercent = () => {
    if (percentState > 0) {
      setpercentState(percentState - 1);
    }
  };
  return (
    <>
      <div className="d-flex w-50 m-auto mt-4">
        <button
          className="btn btn-secondary"
          onClick={minusPercent}
          disabled={percentState <= 0 ? true : false}
        >
          -
        </button>
        <div className={Style.display}>
          <div
            style={{
              backgroundColor: "Pink",
              width: percentState * 10 + "%",
            }}
          >
            <p>{percentState === 10 ? "MAX" : percentState}</p>
          </div>
        </div>
        <button
          className="btn btn-success"
          onClick={plusPercent}
          disabled={percentState >= 10 ? true : false}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Volume;
