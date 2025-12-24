import React from "react";
import { FaCheck, FaStar, FaCrown, FaChevronRight } from "react-icons/fa";

const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    price: "$10",
    period: "per user/month",
    description:
      "Perfect for small teams just getting started with project management",
    recommended: false,
    ctaText: "Start Free Trial",
    features: [
      "Up to 10 team members",
      "Basic task & project management",
      "5 GB file storage",
      "Email support (24h response)",
      "Standard reports & analytics",
      "Mobile & desktop apps",
      "Basic integrations",
    ],
    bestFor: "Teams of 1-10",
    color: "#4B5563", // gray
  },
  {
    id: "pro",
    name: "Pro",
    price: "$25",
    period: "per user/month",
    description:
      "Everything growing teams need to scale collaboration and productivity",
    recommended: true,
    ctaText: "Get Started Free",
    popularBadge: "Most Popular",
    features: [
      "Unlimited team members",
      "Advanced task management",
      "100 GB file storage",
      "Priority support (4h response)",
      "Advanced analytics & reporting",
      "Custom workflows & automation",
      "Time tracking & timesheets",
      "Advanced integrations & API",
      "Guest collaborators",
      "Custom branding",
    ],
    bestFor: "Growing teams & agencies",
    color: "#0560c7", // primary color
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "tailored pricing",
    description:
      "For large organizations with complex workflows and security needs",
    recommended: false,
    ctaText: "Contact Sales",
    features: [
      "Unlimited everything",
      "Dedicated account manager",
      "Custom onboarding & training",
      "99.9% SLA guarantee",
      "Enterprise-grade security",
      "Custom integrations",
      "On-premise deployment option",
      "Advanced permission controls",
      "Audit logs & compliance",
      "Single sign-on (SSO)",
      "Custom contract terms",
    ],
    bestFor: "Large organizations",
    color: "#0D141C", // text-main
  },
];

function PricingSection() {
  return (
    <section
      className="py-16 md:py-24 bg-gradient-to-b from-white to-background-light"
      id="pricing"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary text-sm font-semibold mb-6">
            <FaStar className="text-primary" />
            PRICING PLANS
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-text-main mb-4">
            Choose Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-600">
              TeamFlow
            </span>{" "}
            Plan
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Simple, transparent pricing that scales with your team. All plans
            include a 14-day free trial.
          </p>

          {/* Billing */}
          <div className="inline-flex items-center bg-white border border-gray-200 p-1 rounded-xl mt-8 shadow-sm">
            <button className="px-6 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold transition-all duration-300">
              Monthly Billing
            </button>
            <button className="px-6 py-2.5 rounded-lg text-text-muted text-sm font-semibold hover:text-text-main transition-colors">
              Annual Billing
              <span className="ml-2 px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards*/}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch max-w-6xl mx-auto">
          {/* Starter Plan */}
          <div
            className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-6 md:p-8 
            flex flex-col transition-all duration-300 hover:border-gray-300 hover:shadow-xl"
          >
            <div className="mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-text-main mb-2">
                {pricingPlans[0].name}
              </h3>
              <div className="flex items-baseline mb-1">
                <span className="text-3xl md:text-4xl font-bold text-text-main">
                  {pricingPlans[0].price}
                </span>
                <span className="text-text-muted ml-2 text-sm">
                  /user/month
                </span>
              </div>
              <p className="text-text-muted text-sm mb-4">
                {pricingPlans[0].description}
              </p>
              <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                Best for: {pricingPlans[0].bestFor}
              </div>
            </div>

            <button
              className="w-full py-3.5 bg-white text-text-main border-2 border-gray-300 
              hover:border-primary hover:text-primary font-semibold rounded-lg transition-all duration-300 
              hover:shadow-md mb-8 flex items-center justify-center gap-2"
            >
              {pricingPlans[0].ctaText}
              <FaChevronRight className="text-sm" />
            </button>

            <div className="flex-grow">
              <h4 className="text-text-main font-semibold mb-4 text-sm uppercase tracking-wider">
                Features included:
              </h4>
              <ul className="space-y-3">
                {pricingPlans[0].features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheck className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-text-muted text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pro Plan */}
          <div
            className="bg-white rounded-2xl border-2 border-primary shadow-2xl p-6 md:p-10 
            relative transform lg:scale-105 lg:-translate-y-2 flex flex-col z-10
            transition-all duration-300 hover:shadow-3xl"
          >
            {/* Popular Badge - Desktop */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 hidden md:block">
              <div
                className="inline-flex items-center gap-2 bg-primary 
                text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-lg"
              >
                <FaCrown className="h-4 w-4" />
                {pricingPlans[1].popularBadge}
              </div>
            </div>

            {/* Popular Badge - Mobile */}
            <div className="md:hidden mb-4">
              <div
                className="inline-flex items-center gap-2 bg-primary 
                text-white text-sm font-bold px-4 py-2 rounded-full"
              >
                <FaCrown className="h-3 w-3" />
                {pricingPlans[1].popularBadge}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-text-main mb-2">
                {pricingPlans[1].name}
              </h3>
              <div className="flex items-baseline mb-1">
                <span className="text-4xl md:text-5xl font-bold text-primary">
                  {pricingPlans[1].price}
                </span>
                <span className="text-text-muted ml-2 text-sm">
                  /user/month
                </span>
              </div>
              <p className="text-text-muted text-sm mb-4">
                {pricingPlans[1].description}
              </p>
              <div className="inline-block px-3 py-1 bg-blue-100 text-primary rounded-full text-xs font-semibold">
                Best for: {pricingPlans[1].bestFor}
              </div>
            </div>

            <button
              className="w-full py-4 bg-primary  hover:bg-blue-700 
              text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 
              mb-8 flex items-center justify-center gap-2 group"
            >
              {pricingPlans[1].ctaText}
              <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex-grow">
              <h4 className="text-text-main font-semibold mb-4 text-sm uppercase tracking-wider">
                Everything in Starter, plus:
              </h4>
              <ul className="space-y-3">
                {pricingPlans[1].features
                  .slice(pricingPlans[0].features.length)
                  .map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-text-main text-sm font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
              </ul>

              {/* Value Highlight */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-muted">Best value</span>
                  <span className="text-lg font-bold text-primary">
                    $300/year savings
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div
            className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-6 md:p-8 
            flex flex-col transition-all duration-300 hover:border-gray-300 hover:shadow-xl"
          >
            <div className="mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-text-main mb-2">
                {pricingPlans[2].name}
              </h3>
              <div className="flex items-baseline mb-1">
                <span className="text-3xl md:text-4xl font-bold text-text-main">
                  {pricingPlans[2].price}
                </span>
                <span className="text-text-muted ml-2 text-sm">
                  {pricingPlans[2].period}
                </span>
              </div>
              <p className="text-text-muted text-sm mb-4">
                {pricingPlans[2].description}
              </p>
              <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                Best for: {pricingPlans[2].bestFor}
              </div>
            </div>

            <button
              className="w-full py-3.5 bg-white text-text-main border-2 border-gray-300 
              hover:border-primary hover:text-primary font-semibold rounded-lg transition-all duration-300 
              hover:shadow-md mb-8 flex items-center justify-center gap-2"
            >
              {pricingPlans[2].ctaText}
              <FaChevronRight className="text-sm" />
            </button>

            <div className="flex-grow">
              <h4 className="text-text-main font-semibold mb-4 text-sm uppercase tracking-wider">
                All Pro features, plus:
              </h4>
              <ul className="space-y-3">
                {pricingPlans[2].features
                  .slice(pricingPlans[1].features.length)
                  .map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-text-muted text-sm">{feature}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className=" hidden sm:block mt-12 md:mt-16 bg-white rounded-2xl border border-gray-200 p-6 md:p-8 overflow-x-auto">
          <h3 className="text-xl font-bold text-text-main mb-6 text-center">
            Detailed Feature Comparison
          </h3>
          <table className="w-full min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 text-text-main font-semibold">
                  Feature
                </th>
                <th className="text-center py-4 text-text-muted font-semibold">
                  Starter
                </th>
                <th className="text-center py-4 text-primary font-bold">Pro</th>
                <th className="text-center py-4 text-text-muted font-semibold">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                "Team Members",
                "Storage",
                "Support",
                "Custom Workflows",
                "API Access",
                "SLA",
              ].map((feature, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-4 text-text-main text-sm">{feature}</td>
                  <td className="text-center py-4">
                    <span className="text-text-muted text-sm">
                      {feature === "Team Members"
                        ? "Up to 10"
                        : feature === "Storage"
                        ? "5 GB"
                        : feature === "Support"
                        ? "Email"
                        : feature === "Custom Workflows"
                        ? "×"
                        : feature === "API Access"
                        ? "Basic"
                        : "Standard"}
                    </span>
                  </td>
                  <td className="text-center py-4 bg-blue-50">
                    <span className="text-text-main text-sm font-medium">
                      {feature === "Team Members"
                        ? "Unlimited"
                        : feature === "Storage"
                        ? "100 GB"
                        : feature === "Support"
                        ? "Priority"
                        : feature === "Custom Workflows"
                        ? "✓"
                        : feature === "API Access"
                        ? "Advanced"
                        : "99%"}
                    </span>
                  </td>
                  <td className="text-center py-4">
                    <span className="text-text-main text-sm font-medium">
                      {feature === "Team Members"
                        ? "Unlimited"
                        : feature === "Storage"
                        ? "Unlimited"
                        : feature === "Support"
                        ? "Dedicated"
                        : feature === "Custom Workflows"
                        ? "Advanced"
                        : feature === "API Access"
                        ? "Full"
                        : "99.9%"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-12 md:mt-16">
          <div
            className="bg-gradient-to-r from-blue-50 to-gray-50 
    rounded-2xl p-6 md:p-8 border border-gray-200 max-w-3xl mx-auto"
          >
            <div className="text-center mb-6">
              <h4 className="text-lg font-bold text-text-main mb-2">
                Book a Personalized Demo
              </h4>
              <p className="text-text-muted text-sm mb-6">
                Get a 1-on-1 walkthrough tailored to your team's needs
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                required
              />
              <button
                className="px-6 py-3 bg-primary hover:bg-blue-700 text-white font-semibold 
        rounded-lg transition-colors duration-300 whitespace-nowrap"
              >
                Schedule Demo
              </button>
            </div>

            <p className="text-xs text-text-muted mt-4">
              We'll contact you within 24 hours to schedule your demo
            </p>
          </div>

          <div className="mt-8 text-text-muted text-sm">
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <FaCheck className="text-emerald-500" />
                <span>No credit card required</span>
              </div>
              <div className="hidden sm:block text-gray-300">•</div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-emerald-500" />
                <span>Cancel anytime</span>
              </div>
              <div className="hidden sm:block text-gray-300">•</div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-emerald-500" />
                <span>14-day free trial on all plans</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
