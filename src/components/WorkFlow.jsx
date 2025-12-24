import React, { useState, useEffect } from "react";
import {
  FaUserPlus,
  FaProjectDiagram,
  FaTasks,
  FaChartLine,
  FaArrowRight,
  FaCheck,
  FaPlay,
  FaPause,
  FaClock,
  FaCheckCircle
} from "react-icons/fa";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [tappedStep, setTappedStep] = useState(null);

  const steps = [
    {
      number: "01",
      title: "Sign Up & Team Setup",
      description: "Create your workspace in minutes. Invite team members, set up roles, and configure your first project structure.",
      icon: <FaUserPlus className="text-xl" />,
      time: "5 minutes",
      phase: "Onboarding",
      color: "#0560c7", // primary color
      benefits: ["No credit card required", "14-day free trial", "Import from existing tools"]
    },
    {
      number: "02",
      title: "Create & Organize Projects",
      description: "Set up projects with boards, lists, or timelines. Break down work into tasks and assign to team members.",
      icon: <FaProjectDiagram className="text-xl" />,
      time: "10 minutes",
      phase: "Setup",
      color: "#10B981",
      benefits: ["Drag-and-drop interface", "Templates available", "Custom workflows"]
    },
    {
      number: "03",
      title: "Collaborate & Track Progress",
      description: "Work together with real-time updates, comments, and file sharing. Monitor task completion and project health.",
      icon: <FaTasks className="text-xl" />,
      time: "Daily",
      phase: "Daily Use",
      color: "#8B5CF6",
      benefits: ["Real-time notifications", "Progress tracking", "Team activity feed"]
    },
    {
      number: "04",
      title: "Analyze & Optimize",
      description: "Use built-in analytics to identify bottlenecks, measure team performance, and improve workflows.",
      icon: <FaChartLine className="text-xl" />,
      time: "Weekly",
      phase: "Optimization",
      color: "#F59E0B",
      benefits: ["Performance reports", "Time tracking insights", "Efficiency metrics"]
    }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || isMobile) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isMobile, steps.length]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const handleStepTap = (index) => {
    if (isMobile) {
      setTappedStep(index);
      setTimeout(() => setTappedStep(null), 300);
    } else {
      setActiveStep(index);
      setIsAutoPlaying(false);
    }
  };

  // Mobile View Component
  const MobileView = () => (
    <div className="md:hidden">
      {/* Section Header for Mobile */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary text-sm font-semibold mb-4">
          <FaClock className="text-primary" />
          SIMPLE ONBOARDING
        </div>
        <h2 className="text-3xl font-black text-text-main mb-3">
          How <span className="text-primary">TeamFlow</span> Works
        </h2>
        <p className="text-lg text-text-muted">
          Get your team productive in minutes. A clear 4-step process from setup to success.
        </p>
      </div>

      {/* Static Grid Column Stack */}
      <div className="grid grid-cols-1 gap-6 mb-10">
        {steps.map((step, index) => (
          <div 
            key={step.number}
            onClick={() => handleStepTap(index)}
            className={`bg-white rounded-2xl border-2 p-6 transition-all duration-300 ${
              tappedStep === index 
                ? 'scale-95 border-primary shadow-lg' 
                : 'border-gray-200 hover:border-gray-300'
            } active:scale-95 active:bg-blue-50`}
            style={{
              transform: tappedStep === index ? 'scale(0.98)' : 'scale(1)',
              transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
          >
            {/* Step Header */}
            <div className="flex items-start gap-4 mb-4">
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-md flex-shrink-0 transition-transform duration-300 hover:scale-110"
                style={{ backgroundColor: step.color }}
              >
                {step.icon}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-primary">
                    Step {step.number}
                  </span>
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                    step.phase === "Onboarding" ? "bg-blue-100 text-blue-700" :
                    step.phase === "Setup" ? "bg-emerald-100 text-emerald-700" :
                    step.phase === "Daily Use" ? "bg-purple-100 text-purple-700" :
                    "bg-amber-100 text-amber-700"
                  }`}>
                    {step.phase}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-text-main mb-2">
                  {step.title}
                </h3>
                
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <FaClock className="text-gray-400" />
                  <span>{step.time}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-text-muted mb-6 leading-relaxed">
              {step.description}
            </p>

            {/* Benefits */}
            <div className="space-y-3 pt-4 border-t border-gray-100">
              {step.benefits.map((benefit, benefitIndex) => (
                <div 
                  key={benefitIndex} 
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-text-main">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
              <div className="text-xs text-text-muted">
                Tap for details
              </div>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile CTA */}
      <div className="text-center bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-6 border border-gray-200">
        <h3 className="text-xl font-bold text-text-main mb-3">
          Ready to streamline your workflow?
        </h3>
        <button className="w-full py-4 bg-primary hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 mb-4 active:scale-95">
          <FaCheck />
          Start 14-Day Free Trial
          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
        <div className="text-sm text-text-muted">
          No credit card required • Setup in under 10 minutes
        </div>
      </div>
    </div>
  );

  // Desktop/Tablet View
  const DesktopView = () => (
    <div className="hidden md:block">
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary text-sm font-semibold mb-6">
          <FaClock className="text-primary" />
          SIMPLE ONBOARDING
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-text-main mb-4">
          How <span className="text-primary">TeamFlow</span> Works
        </h2>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          Get your team productive in minutes. A clear 4-step process from setup to success.
        </p>
      </div>

      {/* Step Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {steps.map((step, index) => (
          <button
            key={step.number}
            onClick={() => {
              setActiveStep(index);
              setIsAutoPlaying(false);
            }}
            className={`flex items-center gap-3 px-5 py-3 rounded-lg border-2 transition-all duration-300 ${
              index === activeStep
                ? "border-primary bg-blue-50 shadow-md"
                : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
            }`}
          >
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
              style={{ backgroundColor: index === activeStep ? step.color : "#9CA3AF" }}
            >
              {step.icon}
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-text-main">
                {step.title}
              </div>
              <div className="text-xs text-text-muted">{step.time}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Auto-play Controls */}
      <div className="flex justify-center mb-8">
        <button
          onClick={toggleAutoPlay}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm text-text-muted hover:border-gray-300 transition-colors"
        >
          {isAutoPlaying ? <FaPause /> : <FaPlay />}
          {isAutoPlaying ? "Pause auto-play" : "Play animation"}
        </button>
      </div>

      {/* Main Step Content */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Left: Step Details */}
          <div className="lg:col-span-2 p-8 md:p-10">
            <div className="flex items-start gap-6 mb-8">
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg"
                style={{ backgroundColor: steps[activeStep].color }}
              >
                {steps[activeStep].icon}
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-text-muted text-sm font-medium mb-3">
                  <span>Step {steps[activeStep].number}</span>
                  <span className="w-1 h-1 rounded-full bg-text-muted"></span>
                  <span>{steps[activeStep].phase}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-text-main mb-3">
                  {steps[activeStep].title}
                </h3>
                <p className="text-lg text-text-muted leading-relaxed">
                  {steps[activeStep].description}
                </p>
              </div>
            </div>

            {/* Benefits List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {steps[activeStep].benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100"
                >
                  <FaCheck className="text-emerald-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-text-main">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Progress & Timing */}
          <div className="bg-gradient-to-b from-blue-50 to-gray-50 p-8 md:p-10 border-t lg:border-t-0 lg:border-l border-gray-200">
            <div className="h-full flex flex-col">
              <div className="mb-8">
                <div className="text-sm font-semibold text-text-muted mb-2">
                  Time to complete this step:
                </div>
                <div className="text-4xl font-bold text-primary">
                  {steps[activeStep].time}
                </div>
              </div>

              <div className="mb-8">
                <div className="text-sm font-semibold text-text-muted mb-3">
                  Progress Overview:
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-text-main mb-1">
                      <span>Onboarding Progress</span>
                      <span>{Math.round((activeStep + 1) / steps.length * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary rounded-full h-2 transition-all duration-500"
                        style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <div className="text-sm text-text-muted mb-3">
                  Next: {activeStep < steps.length - 1 ? steps[activeStep + 1].title : "Get Started"}
                </div>
                <button className="w-full py-3 bg-primary hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
                  {activeStep < steps.length - 1 ? "Continue to Next Step" : "Start Free Trial"}
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step Progress Dots */}
      <div className="flex justify-center items-center gap-6 mb-8">
        <div className="flex space-x-3">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeStep 
                  ? 'bg-primary scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
        <div className="text-sm text-text-muted">
          Step {activeStep + 1} of {steps.length}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8 md:p-10 border border-gray-200">
        <h3 className="text-2xl font-bold text-text-main mb-4">
          Ready to streamline your team's workflow?
        </h3>
        <p className="text-text-muted mb-6 max-w-2xl mx-auto">
          Join thousands of teams who use TeamFlow to manage projects, collaborate effectively, and deliver work faster.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-primary hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
            <FaCheck />
            Start 14-Day Free Trial
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-white text-text-main border border-gray-300 hover:border-gray-400 font-semibold rounded-lg transition-all duration-300">
            Watch Product Demo
          </button>
        </div>
        <div className="mt-6 text-sm text-text-muted">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span>No credit card required</span>
            </div>
            <div className="hidden sm:block text-gray-300">•</div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span>Setup in under 10 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-background-light">
      <div className="max-w-6xl mx-auto">
        {isMobile ? <MobileView /> : <DesktopView />}
      </div>
    </section>
  );
};

export default HowItWorks;