import React from "react";
import MySlider from "../../components/MySlider";
import "../../styles/MasterCards.css"
import data from "../../assets/data.json";


const HRMMaster = () => {
  return (
    <div style={{ padding: "10px" }}>
      <div className="masterCards cursor-pointer">
        <MySlider
          data={data.hrmMasters}
          rows={3}
          cols={4}
          slidesToScroll={false}
          arrows={false}
          wrapSlides={true} 
        />
      </div>
    </div>
  );
};

export default HRMMaster;
