import React from "react";

const PieChart = () => {
  const sections = [
    { name: "Intentional", verse: "Matt 6:33", startAngle: 0, endAngle: 120 },
    {
      name: "Purposeful ",
      verse: "Matt 28:18-20 ",
      startAngle: 120,
      endAngle: 240,
    },
    {
      name: "Sacrificial",
      verse: "John 3:30",
      startAngle: 240,
      endAngle: 360,
    },
  ];

  const describeArc = (startAngle, endAngle) => {
    const radius = 150;
    const centerX = 200;
    const centerY = 200;

    const startRad = ((startAngle - 90) * Math.PI) / 180;
    const endRad = ((endAngle - 90) * Math.PI) / 180;

    const x1 = centerX + radius * Math.cos(startRad);
    const y1 = centerY + radius * Math.sin(startRad);
    const x2 = centerX + radius * Math.cos(endRad);
    const y2 = centerY + radius * Math.sin(endRad);

    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

    return `M ${centerX},${centerY} L ${x1},${y1} A ${radius},${radius} 0 ${largeArcFlag} 1 ${x2},${y2} Z`;
  };

  const getTextPosition = (angle) => {
    const radius = 100;
    const centerX = 200;
    const centerY = 200;
    const rad = ((angle - 90) * Math.PI) / 180;
    return {
      x: centerX + radius * Math.cos(rad),
      y: centerY + radius * Math.sin(rad),
    };
  };

  const drawDividingLine = (angle) => {
    const radius = 150;
    const centerX = 200;
    const centerY = 200;
    const rad = ((angle - 90) * Math.PI) / 180;
    const endX = centerX + radius * Math.cos(rad);
    const endY = centerY + radius * Math.sin(rad);
    return `M ${centerX},${centerY} L ${endX},${endY}`;
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <svg viewBox="50 50 300 300" className="w-full h-full">
        {/* Pie sections */}
        {sections.map((section, index) => {
          const midAngle = (section.startAngle + section.endAngle) / 2;
          const textPos = getTextPosition(midAngle);

          return (
            <g key={section.name}>
              <path
                d={describeArc(section.startAngle, section.endAngle)}
                fill="#1a365d"
                className="hover:opacity-90 transition-opacity font-serif"
              />
              <text
                x={textPos.x}
                y={textPos.y}
                textAnchor="middle"
                fill="white"
                className="text-base  font-serif"
              >
                {section.name}
              </text>
              <text
                x={textPos.x}
                y={textPos.y + 20}
                textAnchor="middle"
                fill="white"
                className="text-sm font-serif"
              >
                {section.verse}
              </text>
            </g>
          );
        })}

        {/* Dividing lines */}
        {sections.map((section) => (
          <path
            key={`line-${section.startAngle}`}
            d={drawDividingLine(section.startAngle)}
            stroke="white"
            strokeWidth="2"
          />
        ))}
      </svg>
    </div>
  );
};

export default PieChart;
