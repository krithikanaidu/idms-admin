import React from "react";
import MySlider from "../../components/MySlider";
import "../../styles/MasterCards.css"
import data from "../../assets/data.json";


const PurchaseMaster = () => {
  return (
    <div style={{ padding: "10px" }}>
      <div className="masterCards cursor-pointer">
        <MySlider
          data={data.purchaseMasters}
          rows={4}
          cols={3}
          slidesToScroll={false}
          arrows={false}
          wrapSlides={true} 
        />
      </div>
    </div>
  );
};

export default PurchaseMaster;
