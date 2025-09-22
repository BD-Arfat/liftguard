import React from "react";
import Operator from "./Operator";
import Rigger from "./Rigger";
import Utm from "./Utm";
import Calibration from "./Calibration";

const TrainingSection = () => {
  

  return (
    <section className="py-10 px-6 md:px-0 bg-gradient-to-b from-slate-50 via-teal-50 to-slate-100">
      
      <Operator></Operator>
      <Rigger></Rigger>
      <Utm></Utm>
      <Calibration></Calibration>
    </section>
  );
};

export default TrainingSection;
