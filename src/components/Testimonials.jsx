import React from 'react';
import { FaStar, FaQuoteLeft, FaCheckCircle } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Alex Thompson',
    role: 'Engineering Lead',
    company: 'TechScale Inc.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    rating: 5,
    review: "Our sprint planning used to take 8 hours. With TeamFlow's templates, we do it in 2 hours now. The visual project tracking has transformed how we work.",
    metric: "67% faster planning",
    color: "#0560c7" // primary color
  },
  {
    name: 'Maria Rodriguez',
    role: 'Marketing Director',
    company: 'GrowthAgency Co.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face',
    rating: 5,
    review: "Campaign tracking across teams became seamless. We reduced campaign setup time by 60% and client reporting is now automated.",
    metric: "60% time saved",
    color: "#10B981"
  },
  {
    name: 'David Chen',
    role: 'CTO & Co-founder',
    company: 'RemoteFirst Labs',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    rating: 5,
    review: "Managing our distributed team across 5 time zones was chaotic. TeamFlow's async collaboration features keep everyone aligned without endless meetings.",
    metric: "45% fewer meetings",
    color: "#8B5CF6"
  }
];

function SocialProofSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            <FaStar className="text-yellow-500" />
            TRUSTED BY 10,000+ TEAMS
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-text-main mb-4">
            Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-600">Teams Worldwide</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            See how teams across industries transformed their workflow with TeamFlow
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden 
                hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
            >
              {/* Quote Icon Background */}
              <div className="relative">
                <div className="absolute top-6 left-6 text-gray-100 text-6xl">
                  <FaQuoteLeft />
                </div>
                
                {/* Testimonial Content */}
                <div className="relative p-6 md:p-8">
                  {/* Rating */}
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="h-5 w-5 text-yellow-400 mr-1" />
                    ))}
                  </div>
                  
                  {/* Review Text */}
                  <blockquote className="mb-8">
                    <p className="text-text-main text-base md:text-lg leading-relaxed italic">
                      "{testimonial.review}"
                    </p>
                  </blockquote>
                  
                  {/* Metric Highlight */}
                  <div className="mb-8 p-4 rounded-lg bg-gradient-to-r from-gray-50 to-white border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold text-text-muted">Result achieved:</div>
                      <div className="text-xl font-bold text-primary">{testimonial.metric}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Commenter Profile*/}
              <div className="border-t border-gray-100 p-6 md:p-8 bg-gradient-to-r from-gray-50/50 to-white">
                <div className="flex items-center">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full" 
                         style={{ backgroundColor: testimonial.color, opacity: 0.1 }}></div>
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="relative h-16 w-16 rounded-full object-cover border-4 border-white shadow-md 
                               group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Commenter Info */}
                  <div className="ml-4 md:ml-6">
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-bold text-text-main">{testimonial.name}</h4>
                      <FaCheckCircle className="text-emerald-500" />
                    </div>
                    <p className="text-sm text-text-muted mb-1">{testimonial.role}</p>
                    <p className="text-sm font-medium text-primary">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-sm font-semibold text-text-main">Average Rating</div>
            <div className="text-xs text-text-muted">G2 Crowd & Capterra</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm font-semibold text-text-main">Customer Satisfaction</div>
            <div className="text-xs text-text-muted">Based on NPS surveys</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">89%</div>
            <div className="text-sm font-semibold text-text-main">Faster Delivery</div>
            <div className="text-xs text-text-muted">Average time saved</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10K+</div>
            <div className="text-sm font-semibold text-text-main">Active Teams</div>
            <div className="text-xs text-text-muted">Across 50+ countries</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8 md:p-10 border border-gray-200">
          <h3 className="text-2xl font-bold text-text-main mb-4">
            Join Thousands of Successful Teams
          </h3>
          <p className="text-text-muted mb-6 max-w-2xl mx-auto">
            See why teams from startups to enterprises choose TeamFlow to power their collaboration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary hover:bg-blue-700 text-white 
              font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 
              flex items-center justify-center gap-2">
              Start Free Trial
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="px-8 py-4 bg-white text-text-main border border-gray-300 
              hover:border-gray-400 font-semibold rounded-lg transition-all duration-300">
              Read More Case Studies
            </button>
          </div>
          <div className="mt-6 text-sm text-text-muted">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-500" />
                <span>No credit card required</span>
              </div>
              <div className="hidden sm:block text-gray-300">•</div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-500" />
                <span>14-day free trial</span>
              </div>
              <div className="hidden sm:block text-gray-300">•</div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-500" />
                <span>Full feature access</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialProofSection;