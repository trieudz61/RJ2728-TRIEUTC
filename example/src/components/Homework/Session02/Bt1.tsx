import React from "react";
import Style from "./Bt1.module.css";
interface IProps {
  title: string;
  percent: number;
  color_1: string;
  color_2: string;
}

const Bt1: React.FC<IProps> = (Props) => {
  const { title, percent, color_1, color_2 } = Props;
  return (
    <div className={Style.all_body}>
      <div style={{ backgroundColor: `${color_1}`, flex: "0.2" }}>
        <p className={Style.title__style}>{title}</p>
      </div>
      <div className={Style.d_flex} style={{ flex: "0.8" }}>
        <div
          style={{ backgroundColor: `${color_2}`, flex: `${percent / 100}` }}
        >
          <p className={Style.title__style}>{percent}%</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Bt1;
