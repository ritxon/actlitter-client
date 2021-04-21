import React from "react";
import { ResponsiveRadar } from '@nivo/radar'


const Radar = ({ dataSet, attributes }) => {
    
    const LabelComponent = ({ id, anchor }) => (
        <g transform={`translate(${anchor === 'end' ? -60 : anchor === 'middle' ? -30 : 0}, -20)`}>
            <text
                y={30}
                style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    fill: '#2d004b',
                }}
            >
                {id}
            </text>
        </g>
    )

	return (
		<>
			<ResponsiveRadar
				data={dataSet}
				keys={attributes}
				indexBy="taste"
				maxValue="auto"
				margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
				curve="linearClosed"
				borderWidth={1}
				borderColor={{ from: "color" }}
				gridLevels={5}
				gridShape="linear"
				gridLabelOffset={20}
                gridLabel={LabelComponent}
				enableDots={true}
				dotSize={10}
				dotColor="#ffffff"
				dotBorderWidth={2}
				dotBorderColor="black"
				enableDotLabel={true}
				dotLabel="value"
				dotLabelYOffset={-12}
				colors={{ scheme: 'purple_orange' }}
				fillOpacity={0.20}
				blendMode="multiply"
				animate={true}
				motionConfig="wobbly"
				isInteractive={true}
				legends={[
					{
						anchor: "top-left",
						direction: "column",
						translateX: -50,
						translateY: -40,
						itemWidth: 80,
						itemHeight: 20,
						itemTextColor: "#999",
						symbolSize: 12,
						symbolShape: "circle",
						effects: [
							{
								on: "hover",
								style: {
									itemTextColor: "#000",
								},
							},
						],
					},
				]}
			/>
		</>
	);
};

export default Radar;
