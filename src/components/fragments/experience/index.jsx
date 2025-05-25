import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGraduationCap,
  FaAward,
  FaCertificate,
  FaBriefcase,
  FaFilter,
} from "react-icons/fa";
import Modal from "react-modal";

// Modal styles
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "800px",
    width: "90%",
    maxHeight: "90vh",
    overflow: "auto",
    borderRadius: "8px",
    padding: "0",
    border: "none",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.75)",
    zIndex: 1000,
  },
};

Modal.setAppElement("#root");

const Index = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const milestones = [
    {
      type: "work",
      year: "2023-Present",
      title: "IT Development Non-Core Banking",
      institution: "PT Bank Mayapada Internasional Tbk",
      icon: <FaBriefcase className="text-blue-500" />,
      skills: ["React JS", "Golang", ".NET", "PHP", "SQL Server"],
      shortDescription:
        "Successfully implemented modern programming languages and advanced source code control systems.",
      longDescription:
        "Successfully developed cutting-edge technology solutions by implementing modern programming languages and advanced source code control systems. Demonstrated expertise in building scalable applications while maintaining code integrity through version control best practices.",
      achievements: [
        "Implemented new programming languages like Golang and React JS",
        "Implemented source code control systems like Git and GitHub",
      ],
    },
    {
      type: "certificate",
      year: "2025-Present",
      title: "Flutter Development",
      institution: "SanberCode",
      icon: <FaCertificate className="text-yellow-500" />,
      skills: ["Flutter"],
      shortDescription:
        "Currently enrolled in the Flutter course at SanberCode.",
      longDescription:
        "Currently enrolled in the Flutter course at SanberCode.",
    },
    {
      type: "certificate",
      year: "2025",
      title: "Golang Backend Development",
      institution: "SanberCode",
      icon: <FaCertificate className="text-yellow-500" />,
      skills: ["Golang", "Gin", "Gorm", "Midtrans", "Mailtrap"],
      shortDescription:
        "Successfully completed the Golang Backend Development course at SanberCode.",
      longDescription:
        "Successfully completed the Golang Backend Development course at SanberCode. Achieved 2nd best final project and recognized as most active participant in the course.",
      achievements: [
        "2nd Best Final Project (POS Restaurant Order Zen)",
        "2nd Best Score",
        "1st Most Active Participant",
      ],
    },
    {
      type: "work",
      year: "2022-2023",
      title: "Cross Channel Software Engineer",
      institution: "PT Lippo Karawaci Tbk",
      icon: <FaBriefcase className="text-blue-500" />,
      skills: [".NET", "SQL Server"],
      shortDescription:
        "Analyzed user needs and delivered comprehensive solutions.",
      longDescription:
        "Analyzed user needs and delivered comprehensive solutions.",
    },
    {
      type: "education",
      year: "2018-2022",
      title: "Bachelor of Computer Science",
      institution: "Universitas Tarumanagara",
      icon: <FaGraduationCap className="text-green-500" />,
      skills: ["Data Structures", "Algorithms", "Database Systems"],
      shortDescription: "Graduated with GPA 3.85/4.0",
      longDescription:
        "Successfully completed Bachelor of Computer Science with a GPA of 3.85/4.0. Served as Practicum Assistant and Head of Liga Voli Universitas Tarumanagara organization.",
      achievements: [
        "Graduated with GPA 3.85/4.0",
        "Practicum Assistant for C++ and Oracle SQL courses",
        "Head of Liga Voli Universitas Tarumanagara organization",
        "Worked part-time as Sales",
      ],
    },
    {
      type: "achievement",
      year: "2021",
      title: "KPI Achievement Exceeding 120%",
      institution: "PT Adicipta Inovasi Teknologi",
      icon: <FaAward className="text-purple-500" />,
      skills: ["Integrity", "Hardwork"],
      shortDescription: "Recognized for outstanding contributions",
      longDescription: "Awarded for achieving KPIs exceeding 120%.",
    },
    {
      type: "work",
      year: "2019-2021",
      title: "Full Stack Developer",
      institution: "PT Adicipta Inovasi Teknologi",
      icon: <FaBriefcase className="text-blue-500" />,
      skills: [".NET", "SQL Server"],
      shortDescription:
        "Developed and maintained existing systems based on requirements.",
      longDescription:
        "Developed and maintained existing systems based on requirements.",
    },
    {
      type: "work",
      year: "2019-2021",
      title: "Sales Promotion Boy",
      institution: "Panama Indonesia",
      icon: <FaBriefcase className="text-blue-500" />,
      skills: ["Sales"],
      shortDescription:
        "Sold products and maintained the shop, managed daily stock, and recorded daily sales.",
      longDescription:
        "Sold products and maintained the shop, managed daily stock, and recorded daily sales.",
    },
    {
      type: "work",
      year: "2020",
      title: "Practicum Assistant for C++ and Oracle SQL",
      institution: "Tarumanagara University",
      icon: <FaBriefcase className="text-blue-500" />,
      skills: ["C++", "SQL"],
      shortDescription:
        "Responsibility Teaching and provide homework that will be reported to the lecturer in charge.",
      longDescription:
        "Responsibility Teaching and provide homework that will be reported to the lecturer in charge.",
    },
  ];

  // Filter milestones based on active filter
  const filteredMilestones = milestones.filter((item) => {
    if (activeFilter === "all") return true;
    return item.type === activeFilter;
  });

  const openModal = (item) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "work":
        return "bg-blue-100 text-blue-800";
      case "education":
        return "bg-green-100 text-green-800";
      case "certificate":
        return "bg-yellow-100 text-yellow-800";
      case "achievement":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getBorderColor = (type) => {
    switch (type) {
      case "work":
        return "border-blue-500";
      case "education":
        return "border-green-500";
      case "certificate":
        return "border-yellow-500";
      case "achievement":
        return "border-purple-500";
      default:
        return "border-gray-500";
    }
  };

  const getHoverColor = (type) => {
    switch (type) {
      case "work":
        return "hover:bg-blue-50";
      case "education":
        return "hover:bg-green-50";
      case "certificate":
        return "hover:bg-yellow-50";
      case "achievement":
        return "hover:bg-purple-50";
      default:
        return "hover:bg-gray-50";
    }
  };

  const handleFilter = (filterType) => {
    setActiveFilter(filterType);
  };

  return (
    <section className="px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 border-b-4 border-pink-600 inline-block pb-2">
          My Journey
        </h2>

        {/* Category Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => handleFilter("all")}
            className={`px-4 py-2 rounded-full flex items-center gap-2 ${
              activeFilter === "all"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            <FaFilter /> All
          </button>
          <button
            onClick={() => handleFilter("work")}
            className={`px-4 py-2 rounded-full flex items-center gap-2 ${
              activeFilter === "work"
                ? "bg-blue-500 text-white"
                : "bg-blue-100 text-blue-800"
            }`}
          >
            <FaBriefcase /> Work
          </button>
          <button
            onClick={() => handleFilter("education")}
            className={`px-4 py-2 rounded-full flex items-center gap-2 ${
              activeFilter === "education"
                ? "bg-green-500 text-white"
                : "bg-green-100 text-green-800"
            }`}
          >
            <FaGraduationCap /> Education
          </button>
          <button
            onClick={() => handleFilter("certificate")}
            className={`px-4 py-2 rounded-full flex items-center gap-2 ${
              activeFilter === "certificate"
                ? "bg-yellow-500 text-white"
                : "bg-yellow-100 text-yellow-800"
            }`}
          >
            <FaCertificate /> Certificates
          </button>
          <button
            onClick={() => handleFilter("achievement")}
            className={`px-4 py-2 rounded-full flex items-center gap-2 ${
              activeFilter === "achievement"
                ? "bg-purple-500 text-white"
                : "bg-purple-100 text-purple-800"
            }`}
          >
            <FaAward /> Achievements
          </button>
        </div>

        {/* Vertical timeline */}
        <div className="relative">
          <div className="absolute left-8 top-0 h-full w-1 bg-gray-200"></div>

          <AnimatePresence>
            {filteredMilestones.length > 0 ? (
              <div className="space-y-8 pl-16">
                {filteredMilestones.map((item, index) => (
                  <motion.div
                    key={`${item.type}-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    {/* Icon dot */}
                    <div
                      className={`absolute -left-14 top-1 w-10 h-10 rounded-full bg-white border-4 flex items-center justify-center text-lg ${getBorderColor(
                        item.type
                      )}`}
                    >
                      {item.icon}
                    </div>

                    {/* Content card */}
                    <div
                      onClick={() => openModal(item)}
                      className={`bg-white p-6 rounded-xl shadow-md border-l-4 cursor-pointer transition-all hover:shadow-lg ${getBorderColor(
                        item.type
                      )} ${getHoverColor(item.type)}`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-bold ${getTypeColor(
                            item.type
                          )}`}
                        >
                          {item.type.toUpperCase()}
                        </span>
                        <span className="text-gray-600 font-medium">
                          {item.year}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-700 font-medium mb-2">
                        {item.institution}
                      </p>

                      <p className="text-gray-600 mb-3">
                        {item.shortDescription}
                      </p>

                      {/* Skills tags */}
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 text-gray-500"
              >
                No items found for this category
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal for detailed view */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Journey Item Details"
      >
        {selectedItem && (
          <div className="relative p-6">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex items-start gap-4 mb-4">
              <div
                className={`p-3 rounded-full ${getTypeColor(selectedItem.type)
                  .replace("text-", "text-")
                  .replace("bg-", "bg-")}`}
              >
                {selectedItem.icon}
              </div>
              <div>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-bold ${getTypeColor(
                    selectedItem.type
                  )}`}
                >
                  {selectedItem.type.toUpperCase()}
                </span>
                <h2 className="text-2xl font-bold mt-2">
                  {selectedItem.title}
                </h2>
                <p className="text-lg text-gray-700 font-medium">
                  {selectedItem.institution}
                </p>
                <p className="text-gray-600">{selectedItem.year}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg mb-2">Description</h3>
                <p className="text-gray-700">{selectedItem.longDescription}</p>
              </div>

              {selectedItem.achievements && (
                <div>
                  <h3 className="font-bold text-lg mb-2">Achievements</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedItem.achievements.map((achievement, index) => (
                      <li key={index} className="text-gray-700">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h3 className="font-bold text-lg mb-2">
                  Skills & Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Index;
