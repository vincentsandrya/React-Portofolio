import React, { useState } from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

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

const index = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "OrderZen (Point of Sales Restaurant)",
      image: "/public/assets/images/GoOrderZen.avif",
      videoId: "", // YouTube video ID
      techStack: ["Go", "Gorm", "Gin", "Postgree", "Midtrans", "Railway"],
      description:
        "OrderZen is a modern, efficient, and lightweight Point of Sale (POS) system built with Golang...",
      longDescription:
        "OrderZen is a modern, efficient, and lightweight Point of Sale (POS) system built with Golang. Designed for speed, reliability, and ease of use, it helps small and medium businesses manage sales, inventory, and customer transactions seamlessly.",
      githubLink: "https://github.com/vincentsandrya/GO-POSRestaurant-OrderZen",
      liveLink: "https://go-posrestaurant-orderzen-production.up.railway.app/",
    },
    {
      id: 2,
      title: "Customer Portal (Real Estate)",
      image: "/public/assets/images/NetCustomerPortal.avif",
      videoId: "",
      techStack: [".Net", "Metronic", "IIS", "SQL Server", "Midtrans"],
      description:
        "A Portal for residences to looking their billing, payment, and request services with payment gateway...",
      longDescription:
        "A Portal for residences to looking their billing, payment, and request services with payment gateway midtrans.",
      githubLink: "",
      liveLink: "",
    },
    {
      id: 3,
      title: "Web Form of Bank (Leads)",
      image: "/public/assets/images/ComingSoon.png",
      videoId: "",
      techStack: [
        "React Js",
        "Tailwind CSS",
        "Golang",
        "Gin",
        "Gorm",
        "SQL Server",
      ],
      description:
        "A web form of bank to gather leads and information from customers and convert them into leads",
      longDescription:
        "A web form of bank to gather leads and information from customers and convert them into leads",
      githubLink: "",
      liveLink: "",
    },
    {
      id: 4,
      title: "Portofolio",
      image: "/public/assets/images/ReactPortofolio.png",
      videoId: "",
      techStack: ["React Js", "Tailwind CSS", "Netlify"],
      description:
        "A website to shown my portofolio project and experiences about me",
      longDescription:
        "A website to shown my portofolio project and experiences about me",
      githubLink: "https://github.com/vincentsandrya/React-Portofolio",
      liveLink: "https://vincentsandrya.netlify.app/",
    },
    {
      id: 5,
      title: "CRUD .Net Core",
      image: "/public/assets/images/NetCoreCRUD.avif",
      videoId: "",
      techStack: [".NET Core"],
      description: "A Project to shown my experience at .NET Core",
      longDescription: "A Project to shown my experience at .NET Core",
      githubLink: "https://github.com/vincentsandrya/VS2022CORE-CRUD_MVC",
      liveLink: "",
    },
    {
      id: 6,
      title: "Flutter Project",
      image: "/public/assets/images/ComingSoon.png",
      videoId: "",
      techStack: ["Flutter"],
      description: "Currently i'm join on flutter bootcamp and will put my final project on this",
      longDescription: "Currently i'm join on flutter bootcamp and will put my final project on this",
      githubLink: "",
      liveLink: "",
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section className="px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 border-b-4 border-pink-600 inline-block pb-2">
          Recent Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              whileHover={{ y: -5 }}
              onClick={() => openModal(project)}
            >
              <div
                className="relative h-48 overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {hoveredProject === project.id && project.videoId != "" ? (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${project.videoId}`}
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Project Details"
      >
        {selectedProject && (
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FaTimes size={24} />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-full">
                {selectedProject.videoId != "" ? (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${selectedProject.videoId}`}
                    title={selectedProject.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">
                  {selectedProject.title}
                </h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-gray-700 mb-6">
                  {selectedProject.longDescription}
                </p>

                <div className="flex space-x-4">
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
                    >
                      <FaGithub className="mr-2" /> GitHub
                    </a>
                  )}

                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
                    >
                      <FaExternalLinkAlt className="mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default index;
