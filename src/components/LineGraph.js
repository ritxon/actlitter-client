import React, { useState, useEffect } from "react";
import { ResponsiveLine } from "@nivo/line";

import "./lineGraph.css";

const LineGraph = ({dataSet, xLegend, yLegend}) => {

	return (
		<>
			<ResponsiveLine
				data={dataSet}
				margin={{ top: 50, right: 20, bottom: 50, left: 80 }}
				xScale={{ type: "point" }}
				yScale={{ type: "linear", min: 0, max: "auto", stacked: false, reverse: false }}
				yFormat=" >-.2f"
				axisTop={null}
				axisRight={null}
				axisBottom={{
					orient: "bottom",
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: "Years",
					legendOffset: 36,
					legendPosition: "middle",
				}}
				axisLeft={{
					orient: "left",
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: "weight (in tonnes)",
					legendOffset: -50,
					legendPosition: "middle",
				}}
				colors={{ scheme: 'set1' }}
				lineWidth={4}
				pointSize={10}
				pointColor="#ffffff"
				pointBorderWidth={2}
				pointBorderColor={{ from: "serieColor" }}
				pointLabelYOffset={-12}
                enableSlices="x"
				useMesh={true}
				legends={[
                    {
                        anchor: 'top',
                        direction: 'row',
                        justify: false,
                        translateX: 48,
                        translateY: -32,
                        itemsSpacing: 20,
                        itemDirection: 'left-to-right',
                        itemWidth: 100,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 10,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    },
				]}
			/>
		</>
	);
};

export default LineGraph;
