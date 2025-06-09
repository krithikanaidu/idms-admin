import React from "react";
import MySlider from "../components/MySlider";
import "../styles/PurchaseScreen.css";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 299, pv: 2400, amt: 2400 },
  { name: "Page C", uv: 199, pv: 2400, amt: 2400 },
  { name: "Page D", uv: 199, pv: 2400, amt: 2400 },
  { name: "Page E", uv: 199, pv: 2400, amt: 2400 },
];

const purchaseData = [
  { id: 1, title: "Debit Note MTD [D]*", value: "0.00 Lakh" },
  { id: 2, title: "Debit Note YTD[S]*", value: "0.00 Lakh" },
  { id: 3, title: "Suppliers", value: "31" },
  { id: 4, title: "Suppliers [I]*", value: "0" },
  { id: 5, title: "Items", value: "97" },
  { id: 11, title: "PPV Ratio", value: "-0.55 %" },
  { id: 6, title: "MTD Purchase [D]*", value: "0.00 Lakh" },
  { id: 7, title: "YTD Purchase [D]*", value: "46.71 Lakh" },
  { id: 8, title: "MTD Purcahase [I]*", value: "0.00 Lakh" },
  { id: 9, title: "YTD Purchase [I]*", value: "0.00 Lakh" },
  { id: 10, title: "PPV Value", value: "0.11 Lakh" },
  { id: 11, title: "PPV Ratio", value: "-0.55 %" },
];

const PurchaseScreen = () => {
  return (
    <div style={{ padding: "10px" }}>
      <div className="PurchaseSlider">
        <MySlider
          data={purchaseData}
          slidesToShow={6}
          slidesToScroll={6}
          nextArrowColor="pink"
          prevArrowColor="pink"
        />
      </div>

      <div className="flex gap-6 justify-center">
        <div className="bg-white p-8 pb-3 rounded-lg shadow-md w-full max-w-md flex flex-col items-center">
          <p className="pb-4 text-center">Monthly Domestic Purchase Value</p>
          <ResponsiveContainer width="100%" aspect={2}>
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#8884d8" />
              <YAxis />
              <Tooltip />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Bar dataKey="uv" fill="#000000" barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-8 pb-3 rounded-lg shadow-md w-full max-w-md flex flex-col items-center">
          <p className="pb-4 text-center">Monthly Domestic Purchase Value</p>
          <ResponsiveContainer width="100%" aspect={2}>
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#8884d8" />
              <YAxis />
              <Tooltip />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Bar dataKey="uv" fill="#000000" barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default PurchaseScreen;
