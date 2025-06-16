import React from "react";
import MySlider from "../../components/MySlider";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import data from "../../assets/data.json";



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

const HRMScreen = () => {
  return (
    <div style={{ padding: "10px" }} className="-ml-2 -mr-2">
      <div className="SalesSlider text-center">
        <MySlider
          data={data.hrmMetrics}
          slidesToShow={6}
          slidesToScroll={1}
          arrows={false}
        />
      </div>

      <div
        className="charts pt-5"
        style={{ padding: "0 2px", position: "relative" }}
      >
        <MySlider
          data={[
            {
              id: 1,
              content: (
                <div className="chart-container">
                  <p className="pb-10 text-center">
                    Monthly Domestic SO Trend [In Lakh]
                  </p>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      data={data.monthlyEmployeesNetPaidSalary}
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
                        domain={[0, "dataMax + 0.1"]}
                        ticks={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, ]}
                        interval={0}
                      />

                      <Tooltip content={<CustomTooltip />} />
                      {/* <Legend /> */}
                      <Bar
                        dataKey="value"
                        barSize={20}
                        fill="#007DAF"
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
                  <p className="pb-10 text-center">
                    Monthly Domestic Tax Trend [In Lakh]
                  </p>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      data={data.monthlyEmployeeLeaves}
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
                        domain={[0, "dataMax + 0.1"]}
                        ticks={[
                          0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0
                        ]}
                        interval={0}
                      />

                      <Tooltip content={<CustomTooltip />} />
                      {/* <Legend /> */}
                      <Bar
                        dataKey="value"
                        barSize={20}
                        fill="#007DAF"
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
          arrows={false}
          isChart={true}
        />
      </div>
    </div>
  );
};

export default HRMScreen;
