import React from "react";
import data from "../assets/data.json";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import MySlider from "../components/MySlider";

const getIntroOfPage = (label) => {
  if (label === "Apr") {
    return "";
  }
  return "";
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label bg-white px-3 py-1 rounded font-light whitespace-nowrap">
          {label} {/* first line */}
          <br />
          <span
            className="inline-block w-3 h-3 rounded mr-2  font-light align-middle"
            style={{ backgroundColor: payload[0]?.color || "#000" }}
          />
          <span className="align-middle">{payload[0]?.value}</span>
        </p>
        <p className="intro">{getIntroOfPage(label)}</p>
        {/* <p className="desc">Anything you want can be displayed here.</p> */}
      </div>
    );
  }

  return null;
};

const PurchaseScreen = () => {
  return (
    <div style={{ padding: "16px" }}>
      <div className="PurchaseSlider">
        <MySlider
          data={data.purchaseMetrics}
          slidesToShow={5}
          slidesToScroll={4}
          nextArrowColor="pink"
          prevArrowColor="pink"
        />
      </div>
      <div className="importantNote pt-2">
        <MySlider
          data={data.notePurchase}
          slidesToShow={Math.min(data.length, 1)}
          slidesToScroll={1}
          arrows={false}
        />
      </div>
      <div
        className="charts pt-5"
        style={{ padding: "0 1px", position: "relative" }}
      >
        <MySlider
          data={[
            {
              id: 1,
              content: (
                <div className="chart-container">
                  <p className="pb-4 text-center">
                    Monthly Domestic Purchase Value [Amt In Lakh]
                  </p>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      data={data.monthlyValues}
                      barCategoryGap="50%"
                      margin={{
                        top: 5,
                        right: 30,
                        bottom: 8,
                      }}
                    >
                      <CartesianGrid stroke="#ccc" />
                      <XAxis
                        dataKey="month"
                        angle={0}
                        textAnchor="middle"
                        interval={0}
                        dy={10}
                      />
                      <YAxis
                        domain={[0, 50]}
                        ticks={[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]}
                        interval={0}
                      />

                      <Tooltip content={<CustomTooltip />} />
                      <Bar
                        dataKey="value"
                        barSize={15}
                        fill="#ff33a6"
                        label={({ x, y, width, value }) => (
                          <text
                            x={x + width / 2}
                            y={y - 5}
                            fill="#000"
                            textAnchor="middle"
                            fontSize={12}
                            fontWeight="light"
                          >
                            {value}
                          </text>
                        )}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              ),
            },
            {
              id: 2,
              content: (
                <div className="chart-container">
                  <p className="pb-4 text-center">
                    Monthly Domestic PO Count [ Count in Nos.]
                  </p>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      data={data.monthlyPerformance}
                      barCategoryGap="50%"
                      margin={{
                        top: 5,
                        right: 30,
                        bottom: 8,
                      }}
                    >
                      <CartesianGrid stroke="#ccc" />
                      <XAxis
                        dataKey="month"
                        angle={0}
                        textAnchor="middle"
                        interval={0}
                        dy={10}
                      />
                      <YAxis
                        domain={[0, 18]}
                        ticks={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]}
                        interval={0}
                      />

                      <Tooltip content={<CustomTooltip />} />
                      {/* <Legend /> */}
                      <Bar
                        dataKey="value"
                        barSize={15}
                        fill="#ff33a6"
                        label={({ x, y, width, value }) => (
                          <text
                            x={x + width / 2}
                            y={y - 5}
                            fill="#000"
                            textAnchor="middle"
                            fontSize={12}
                            fontWeight="light"
                          >
                            {value}
                          </text>
                        )}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              ),
            },
            {
              id: 3,
              content: (
                <div className="chart-container">
                  <p className="pb-4 text-center">
                    Top 5 Domestic Suppliers Spend [In Lakh]
                  </p>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      data={data.supplierSpends}
                      barCategoryGap="10%"
                      margin={{
                        top: 2,
                        right: 20,
                        left: 100,
                        bottom: 54,
                      }}
                    >
                      <CartesianGrid stroke="#ccc" />
                      <XAxis
                        dataKey="title"
                        angle={-27}
                        textAnchor="end"
                        interval={0}
                        dy={10}
                        height={60}
                      />
                      <YAxis
                        domain={[0, "dataMax + 5"]}
                        ticks={[0, 5, 10, 15, 20, 25, 30]}
                        interval={0}
                      />

                      <Tooltip content={<CustomTooltip />} />
                      {/* <Legend /> */}
                      <Bar
                        dataKey="value"
                        barSize={15}
                        fill="#ff33a6"
                        label={({ x, y, width, value }) => (
                          <text
                            x={x + width / 2}
                            y={y - 5}
                            fill="#000"
                            textAnchor="middle"
                            fontSize={12}
                            fontWeight="light"
                          >
                            {value}
                          </text>
                        )}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              ),
            },
            {
              id: 4,
              content: (
                <div className="chart-container">
                  <p className="pb-4 text-center">
                    Top 5 Domestic Items Spend [In Lakh]
                  </p>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      data={data.domesticItemsSpends}
                      barCategoryGap="10%"
                      margin={{
                        top: 2,
                        right: 20,
                        left: 100,
                        bottom: 70,
                      }}
                    >
                      <CartesianGrid stroke="#ccc" />
                      <XAxis
                        dataKey="title"
                        angle={-27}
                        textAnchor="end"
                        interval={0}
                        dy={10}
                        height={60}
                      />
                      <YAxis
                        domain={[0, "dataMax + 2"]}
                        ticks={[0, 2, 4, 6, 8, 10, 12]}
                        interval={0}
                      />

                      <Tooltip content={<CustomTooltip />} />
                      {/* <Legend /> */}
                      <Bar
                        dataKey="value"
                        barSize={15}
                        fill="#ff33a6"
                        label={({ x, y, width, value }) => (
                          <text
                            x={x + width / 2}
                            y={y - 5}
                            fill="#000"
                            textAnchor="middle"
                            fontSize={12}
                            fontWeight="light"
                          >
                            {value}
                          </text>
                        )}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              ),
            },
          ]}
          slidesToShow={2}
          slidesToScroll={2}
          arrows={true}
          isChart={true}
        />
      </div>
    </div>
  );
};

export default PurchaseScreen;
