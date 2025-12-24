import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaProjectDiagram, FaUsers, FaClock, FaTasks, FaArrowRight,FaChartBar} from 'react-icons/fa';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const features = [
    {
      id: 1,
      title: "Task Management",
      benefit: "Organize & Prioritize Work",
      description: "Create, assign, and track tasks with drag-and-drop simplicity. Set deadlines, add dependencies, and never miss a milestone.",
      icon: <FaTasks className="text-xl" />,
      stats: "Teams complete tasks 40% faster",
      color: "#0560c7", // primary color
      details: [
        "Visual task boards",
        "Priority tagging",
        "Deadline tracking",
        "Progress monitoring"
      ]
    },
    {
      id: 2,
      title: "Project Planning",
      benefit: "Visualize Your Roadmap",
      description: "Turn vision into action with Gantt charts, timelines, and Kanban boards. Plan sprints and manage resources effectively.",
      icon: <FaProjectDiagram className="text-xl" />,
      stats: "65% better project visibility",
      color: "#10B981",
      details: [
        "Interactive Gantt charts",
        "Resource allocation",
        "Milestone tracking",
        "Budget management"
      ]
    },
    {
      id: 3,
      title: "Team Collaboration",
      benefit: "Work Together Seamlessly",
      description: "Real-time comments, file sharing, and @mentions keep everyone aligned. Reduce meetings by 50% with centralized communication.",
      icon: <FaUsers className="text-xl" />,
      stats: "Teams report 50% fewer meetings",
      color: "#8B5CF6",
      details: [
        "Real-time commenting",
        "File sharing & storage",
        "@mentions & notifications",
        "Activity feeds"
      ]
    },
    {
      id: 4,
      title: "Time Tracking",
      benefit: "Optimize Productivity",
      description: "Automatic and manual time tracking with detailed reports. Identify bottlenecks and improve team efficiency.",
      icon: <FaClock className="text-xl" />,
      stats: "Save 8+ hours weekly per team",
      color: "#F59E0B",
      details: [
        "Automatic time tracking",
        "Billable hour reports",
        "Productivity analytics",
        "Client billing integration"
      ]
    }
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-background-light">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary text-sm font-semibold mb-4">
            <FaCheckCircle className="text-primary" />
            CORE CAPABILITIES
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-main mb-4">
            Everything Your Team Needs to 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-600"> Succeed</span>
          </h2>
          <p className="text-lg text-text-muted max-w-3xl mx-auto">
            TeamFlow provides the complete toolkit for modern teams to plan, track, and collaborate on projects
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className={`bg-white rounded-xl border-2 p-6 transition-all duration-300 cursor-pointer hover:shadow-lg ${
                index === activeFeature 
                  ? 'border-primary shadow-md' 
                  : 'border-gray-100 hover:border-blue-200'
              }`}
              onClick={() => setActiveFeature(index)}
            >
              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white"
                  style={{ backgroundColor: feature.color }}
                >
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-primary mb-1">
                    {feature.title}
                  </div>
                  <h3 className="text-lg font-bold text-text-main">
                    {feature.benefit}
                  </h3>
                </div>
                {index === activeFeature && (
                  <FaCheckCircle className="text-primary mt-1" />
                )}
              </div>
              
              <p className="text-text-muted mt-4 text-sm leading-relaxed">
                {feature.description}
              </p>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center text-sm font-semibold text-primary">
                  <span>{feature.stats}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Active Feature Details Panel */}
        <div className="hidden sm:block bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Feature Details */}
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center text-white text-2xl"
                  style={{ backgroundColor: features[activeFeature].color }}
                >
                  {features[activeFeature].icon}
                </div>
                <div>
                  <div className="text-sm font-bold text-primary uppercase tracking-wider">
                    {features[activeFeature].title}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-text-main">
                    {features[activeFeature].benefit}
                  </h3>
                </div>
              </div>

              <p className="text-lg text-text-muted mb-8 leading-relaxed">
                {features[activeFeature].description}
              </p>

              {/* Feature Details List */}
              <div className="space-y-3 mb-8">
                {features[activeFeature].details.map((detail, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                    <span className="text-text-main">{detail}</span>
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="flex items-center gap-4">
                <div className="flex space-x-2">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveFeature(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        index === activeFeature 
                          ? 'bg-primary' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-text-muted">
                  {activeFeature + 1} of {features.length}
                </span>
              </div>
            </div>

            {/* Right: Feature Visual */}
            <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 md:p-10 border-t lg:border-t-0 lg:border-l border-gray-200">
              <div className="h-full flex flex-col justify-center">
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-primary mb-2">
                    {features[activeFeature].stats.split(' ')[0]}
                  </div>
                  <div className="text-text-main font-semibold">
                    {features[activeFeature].stats.split(' ').slice(1).join(' ')}
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-semibold text-text-main">
                      Key Benefits:
                    </div>
                    <FaChartBar className="text-primary" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-muted">Team Efficiency</span>
                      <span className="text-sm font-semibold text-primary">+89%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-muted">Project Visibility</span>
                      <span className="text-sm font-semibold text-primary">+76%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-muted">Meeting Reduction</span>
                      <span className="text-sm font-semibold text-primary">-52%</span>
                    </div>
                  </div>
                </div>

                <button className="mt-8 w-full py-3 bg-primary hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
                  Learn More
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;