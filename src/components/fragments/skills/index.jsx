import { useState } from "react";
import {
  FaReact,
  FaPhp,
  FaBootstrap,
  FaMicrosoft,
  FaFigma,
} from "react-icons/fa";
import { DiGo } from "react-icons/di";
import {
  SiDotnet,
  SiPostgresql,
  SiVite,
  SiTailwindcss,
  SiGin,
  SiOpenai,
  SiDevexpress,
  SiNetlify,
} from "react-icons/si";
import { TbBrandGolang, TbSql } from "react-icons/tb";

const index = () => {
  const [activeTab, setActiveTab] = useState("techstack");

  const skills = {
    techstack: [
      {
        name: "React JS",
        level: 90,
        icon: <FaReact className="text-blue-500" />,
      },
      {
        name: "Golang",
        level: 85,
        icon: <DiGo className="text-cyan-600" />,
      },
      {
        name: ".NET",
        level: 80,
        icon: <SiDotnet className="text-purple-600" />,
      },
      { name: "PHP", level: 80, icon: <FaPhp className="text-indigo-700" /> },
      {
        name: "SQL Server",
        level: 90,
        icon: <FaMicrosoft className="text-red-500" />,
      },
      {
        name: "PostgreSQL",
        level: 75,
        icon: <SiPostgresql className="text-blue-400" />,
      },
    ],
    tools: [
      { name: "Vite", level: 90, icon: <SiVite className="text-yellow-500" /> },

      {
        name: "GORM",
        level: 75,
        icon: <TbBrandGolang className="text-gray-600" />,
      },
      {
        name: "Gin",
        level: 70,
        icon: <SiGin className="text-teal-600" />,
      },
      { name: "Figma", level: 75, icon: <FaFigma className="text-gray-600" /> },
      {
        name: "OpenAI",
        level: 80,
        icon: <SiOpenai className="text-green-600" />,
      },
      {
        name: "DeepSeek",
        level: 65,
        icon: <div className="text-orange-500 font-bold text-lg">DS</div>,
      },
      {
        name: "Devexpress",
        level: 85,
        icon: <SiDevexpress className="text-green-600" />,
      },
      {
        name: "Tailwind CSS",
        level: 95,
        icon: <SiTailwindcss className="text-cyan-400" />,
      },
      {
        name: "Bootstrap",
        level: 85,
        icon: <FaBootstrap className="text-purple-500" />,
      },
      {
        name: "Netlify",
        level: 80,
        icon: <SiNetlify className="text-blue-500" />,
      },
    ],
  };

  return (
    <section className="px-4 bg-gray-50" id="skills">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 border-b-4 border-pink-600 inline-block pb-2">
          My Skills
        </h2>
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-1 rounded-xl bg-blue-100 p-1">
            {["techstack", "tools"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "bg-white text-blue-700 shadow"
                    : "text-blue-500 hover:text-blue-700"
                }`}
              >
                {tab === "techstack" ? "Tech Stack" : "Tools"}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills[activeTab].map((skill, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="text-2xl">{skill.icon}</div>
                <div>
                  <h3 className="font-medium text-gray-800">{skill.name}</h3>
                  <span className="text-xs text-gray-500">
                    {skill.level >= 80
                      ? "Expert"
                      : skill.level >= 60
                      ? "Proficient"
                      : "Intermediate"}
                  </span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default index;
