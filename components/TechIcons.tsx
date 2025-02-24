import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaPhp,
  FaLaravel,
  FaDatabase,
} from "react-icons/fa";
import { SiMongodb, SiFlutter, SiDart, SiSharp, SiDotnet, SiTypescript, SiMysql } from "react-icons/si";

const icons = [
  { Icon: FaHtml5, label: "HTML5", color: "#E34F26" },
  { Icon: FaCss3Alt, label: "CSS3", color: "#1572B6" },
  { Icon: FaJsSquare, label: "JavaScript", color: "#F7DF1E" },
  { Icon: SiMysql, label: "MySQL", color: "#4479A1" },
  { Icon: SiFlutter, label: "Flutter", color: "#02569B" },
  { Icon: SiDart, label: "Dart", color: "#0175C2" },
  { Icon: SiSharp, label: "C#", color: "#239120" },
  { Icon: SiDotnet, label: ".NET", color: "#512BD4" },
  { Icon: FaPhp, label: "PHP", color: "#777BB4" },
  { Icon: FaLaravel, label: "Laravel", color: "#FF2D20" },
  { Icon: FaDatabase, label: "SQL", color: "#CC2927" },
];

const TechIcons = () => {
  return (
    <div className="p-6   text-white">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {icons.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-slate-900 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition-transform transform hover:scale-105"
          >
            <item.Icon className="text-4xl" style={{ color: item.color }} />
            <p className="text-sm text-gray-300 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechIcons;
