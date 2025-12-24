import React, { useState, useEffect } from 'react';
import { 
  FaTasks, FaProjectDiagram, FaUsers, FaClock, 
  FaCheck, FaArrowRight, FaSearch, FaFilter, 
  FaChartBar, FaCog, FaMobileAlt, FaSync, 
  FaVideo, FaFileAlt, FaStar, FaCheckCircle
} from 'react-icons/fa';

const FeaturesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const featureCategories = [
    { id: 'all', name: 'All Features', count: 12 },
    { id: 'core', name: 'Core', count: 4 },
    { id: 'collaboration', name: 'Collaboration', count: 5 },
    { id: 'analytics', name: 'Analytics', count: 2 },
    { id: 'integrations', name: 'Integrations', count: 1 },
  ];

  const features = [
    {
      id: 1, title: "Task Management", category: "core",
      description: "Create, assign, and track tasks with drag-and-drop interface.",
      icon: <FaTasks />, color: "#0560c7",
      benefits: ["40% faster completion", "Automated reminders", "Priority setting"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2, title: "Project Planning", category: "core",
      description: "Visualize projects with Gantt charts, Kanban boards, and timelines.",
      icon: <FaProjectDiagram />, color: "#10B981",
      benefits: ["65% better visibility", "Milestone tracking", "Resource allocation"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3, title: "Team Collaboration", category: "collaboration",
      description: "Real-time comments, file sharing, and @mentions to reduce meetings.",
      icon: <FaUsers />, color: "#8B5CF6",
      benefits: ["50% fewer meetings", "Centralized communication", "File sharing"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4, title: "Time Tracking", category: "core",
      description: "Automatic time tracking with detailed reports for billing.",
      icon: <FaClock />, color: "#F59E0B",
      benefits: ["30% time saved", "Accurate invoicing", "Productivity insights"],
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5, title: "Advanced Analytics", category: "analytics",
      description: "Dashboards and reports to track performance and make decisions.",
      icon: <FaChartBar />, color: "#EC4899",
      benefits: ["Data-driven decisions", "Custom reports", "Trend analysis"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6, title: "Custom Workflows", category: "core",
      description: "Design workflows matching your team's processes and automate tasks.",
      icon: <FaCog />, color: "#6366F1",
      benefits: ["Automate tasks", "Standardize processes", "Reduce errors"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 7, title: "Mobile App", category: "collaboration",
      description: "Full-featured iOS and Android apps for work anywhere.",
      icon: <FaMobileAlt />, color: "#06B6D4",
      benefits: ["Work from anywhere", "Push notifications", "Offline mode"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 8, title: "Client Portal", category: "collaboration",
      description: "Secure portals for clients to view progress and provide feedback.",
      icon: <FaUsers />, color: "#8B5CF6",
      benefits: ["Client transparency", "Secure sharing", "Feedback collection"],
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 9, title: "Document Management", category: "collaboration",
      description: "Centralized storage with version control and secure sharing.",
      icon: <FaFileAlt />, color: "#6366F1",
      benefits: ["Version control", "Secure access", "Full-text search"],
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 10, title: "API & Integrations", category: "integrations",
      description: "Connect with Slack, GitHub, Google Workspace, and more.",
      icon: <FaSync />, color: "#F59E0B",
      benefits: ["Tool connections", "Workflow automation", "Custom integrations"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 11, title: "Video Conferencing", category: "collaboration",
      description: "Built-in video meetings with screen sharing and notes.",
      icon: <FaVideo />, color: "#EC4899",
      benefits: ["No external tools", "Meeting notes", "Screen sharing"],
      image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 12, title: "Resource Management", category: "analytics",
      description: "Allocate and optimize team resources to prevent burnout.",
      icon: <FaUsers />, color: "#10B981",
      benefits: ["Workload balance", "Burnout prevention", "Capacity planning"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const filteredFeatures = activeCategory === 'all' 
    ? features 
    : features.filter(feature => feature.category === activeCategory);

  const comparisonData = [
    { feature: 'Task Management', starter: true, pro: true, enterprise: true },
    { feature: 'Project Planning', starter: true, pro: true, enterprise: true },
    { feature: 'Team Collaboration', starter: true, pro: true, enterprise: true },
    { feature: 'Time Tracking', starter: true, pro: true, enterprise: true },
    { feature: 'Advanced Analytics', starter: false, pro: true, enterprise: true },
    { feature: 'Custom Workflows', starter: false, pro: true, enterprise: true },
    { feature: 'Mobile App', starter: true, pro: true, enterprise: true },
    { feature: 'Client Portal', starter: false, pro: true, enterprise: true },
    { feature: 'API Access', starter: false, pro: true, enterprise: true },
    { feature: 'Priority Support', starter: false, pro: true, enterprise: true },
    { feature: 'Custom Training', starter: false, pro: false, enterprise: true },
    { feature: 'SLA Guarantee', starter: false, pro: false, enterprise: true },
  ];

  return (
    <div className="min-h-screen bg-background-light">
      {/* Hero Header */}
      <section className="pt-20 pb-8 md:pt-24 md:pb-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary text-sm font-semibold mb-6">
              <FaCheckCircle className="text-primary" />
              PRODUCT FEATURES
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-main mb-4">
              TeamFlow <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-600">Features</span>
            </h1>
            <p className="text-base md:text-lg text-text-muted max-w-2xl mx-auto px-4">
              Everything your team needs to plan, track, and collaborate effectively
            </p>
          </div>

          {/* Categories - Simplified */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
            {featureCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2.5 rounded-lg transition-all duration-300 text-sm font-medium ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-text-main border border-gray-200 hover:border-gray-300'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-80">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid*/}
      <section className="py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredFeatures.map((feature) => (
              <div
                key={feature.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Feature Image*/}
                <div className="h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <div className="p-5 md:p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-white flex-shrink-0"
                      style={{ backgroundColor: feature.color }}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <div className="inline-block px-2 py-1 bg-gray-100 text-text-muted text-xs rounded mb-2">
                        {feature.category}
                      </div>
                      <h3 className="text-lg font-bold text-text-main">{feature.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-text-muted text-sm mb-4">{feature.description}</p>
                  
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <FaCheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                        <span className="text-text-main">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-text-main mb-3">
              Simple Pricing, All Features Included
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Choose the plan that fits your team's needs. All plans include a 14-day free trial.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {/* Starter Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-text-main mb-2">Starter</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-text-main">$10</span>
                  <span className="text-text-muted ml-2">/user/month</span>
                </div>
                <p className="text-text-muted text-sm">Perfect for small teams getting started</p>
              </div>
              
              <button className="w-full py-3 bg-white text-primary border-2 border-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors mb-6">
                Start Free Trial
              </button>
              
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <FaCheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                  <span>Up to 10 team members</span>
                </div>
                <div className="flex items-center text-sm">
                  <FaCheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                  <span>Basic features included</span>
                </div>
                <div className="flex items-center text-sm">
                  <FaCheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                  <span>Email support</span>
                </div>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-white border-2 border-primary rounded-2xl p-6 relative md:scale-105 shadow-lg">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-2">
                  <FaStar className="w-3 h-3" />
                  Most Popular
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-text-main mb-2">Pro</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-primary">$25</span>
                  <span className="text-text-muted ml-2">/user/month</span>
                </div>
                <p className="text-text-muted text-sm">Best for growing teams with advanced needs</p>
              </div>
              
              <button className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-6">
                Start Free Trial
              </button>
              
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <FaCheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                  <span>Unlimited team members</span>
                </div>
                <div className="flex items-center text-sm">
                  <FaCheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                  <span>All features included</span>
                </div>
                <div className="flex items-center text-sm">
                  <FaCheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                  <span>Priority support</span>
                </div>
                <div className="flex items-center text-sm">
                  <FaCheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                  <span>Advanced analytics</span>
                </div>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-text-main mb-2">Enterprise</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-text-main">Custom</span>
                </div>
                <p className="text-text-muted text-sm">For large organizations with specific needs</p>
              </div>
              
              <button className="w-full py-3 bg-white text-primary border-2 border-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors mb-6">
                Contact Sales
              </button>
              
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <FaCheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                  <span>Everything in Pro</span>
                </div>
                <div className="flex items-center text-sm">
                  <FaCheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                  <span>Dedicated support</span>
                </div>
                <div className="flex items-center text-sm">
                  <FaCheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                  <span>Custom integrations</span>
                </div>
                <div className="flex items-center text-sm">
                  <FaCheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                  <span>SLA guarantee</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Comparison */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-bold text-text-main mb-6 text-center">
              Feature Comparison at a Glance
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 font-semibold text-text-main">Feature</th>
                    <th className="text-center py-4 font-semibold text-text-main">Starter</th>
                    <th className="text-center py-4 font-semibold text-primary">Pro</th>
                    <th className="text-center py-4 font-semibold text-text-main">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-white">
                      <td className="py-4 text-text-main text-sm">{item.feature}</td>
                      <td className="text-center py-4">
                        {item.starter ? (
                          <FaCheckCircle className="w-5 h-5 text-emerald-500 mx-auto" />
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                      <td className="text-center py-4 bg-blue-50">
                        {item.pro ? (
                          <FaCheckCircle className="w-5 h-5 text-emerald-500 mx-auto" />
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                      <td className="text-center py-4">
                        {item.enterprise ? (
                          <FaCheckCircle className="w-5 h-5 text-emerald-500 mx-auto" />
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-background-light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-text-main mb-4">
            Ready to Try TeamFlow?
          </h2>
          <p className="text-text-muted mb-8 max-w-2xl mx-auto">
            Join thousands of teams using TeamFlow to manage projects, collaborate effectively, and deliver work faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
              Start 14-Day Free Trial
              <FaArrowRight />
            </button>
            <button className="px-8 py-4 bg-white text-text-main border border-gray-300 hover:border-gray-400 font-semibold rounded-lg transition-all duration-300">
              Schedule a Demo
            </button>
          </div>
          <div className="mt-8 text-sm text-text-muted">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-500" />
                <span>No credit card required</span>
              </div>
              <div className="hidden sm:block text-gray-300">•</div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-500" />
                <span>Full feature access</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;