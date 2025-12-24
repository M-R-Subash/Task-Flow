import { Zap, Briefcase, Users } from 'lucide-react'; // or use react-icons/fa for consistency

const personas = [
  {
    name: 'Startups & Small Teams',
    icon: <Zap className="h-8 w-8 text-amber-500" />,
    problem: 'Limited resources and need to move fast. Manual processes, email chains, and spreadsheets slow down growth and cause missed deadlines.',
    solution: 'TeamFlow provides an all-in-one platform to organize work, track progress, and scale efficiently without adding overhead.'
  },
  {
    name: 'Marketing & Creative Agencies',
    icon: <Briefcase className="h-8 w-8 text-blue-500" />,
    problem: 'Juggling multiple client projects, changing priorities, and managing distributed creative teams leads to scope creep and timeline delays.',
    solution: 'Client portals, timeline views, and approval workflows keep deliverables on track and clients informed in real-time.'
  },
  {
    name: 'Remote & Distributed Teams',
    icon: <Users className="h-8 w-8 text-emerald-500" />,
    problem: 'Disconnected communication across time zones creates silos, misaligned priorities, and delays in decision-making.',
    solution: 'Async collaboration features, real-time updates, and centralized documentation keep global teams synchronized and productive.'
  }
];

// Personas Section Component
function Personas() {
  return (
    <section className="py-16 md:py-24 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          {/* Section Header */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary text-sm font-semibold mb-6">
            <Users className="h-4 w-4 text-primary" />
            USE CASES & PERSONAS
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black text-text-main mb-4">
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-600">Modern Teams</span>
          </h2>
          <p className="text-lg text-text-muted max-w-3xl mx-auto">
            TeamFlow adapts to different team structures, solving specific challenges each faces
          </p>
        </div>
        
        {/* Personas Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {personas.map((persona, index) => (
            <div 
              key={index} 
              className="bg-white border-2 border-gray-100 rounded-2xl p-6 md:p-8 
                hover:border-primary transition-all duration-300 
                hover:shadow-xl hover:shadow-blue-50/50 group"
            >
              {/* Icon Container */}
              <div className="mb-6 p-3 bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl inline-block 
                group-hover:scale-105 transition-transform duration-300">
                {persona.icon}
              </div>
              
              {/* Persona Name */}
              <h3 className="text-xl md:text-2xl font-bold text-text-main mb-6">
                {persona.name}
              </h3>
              
              <div className="space-y-6">
                {/* The Problem */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      The Challenge
                    </span>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {persona.problem}
                  </p>
                </div>
                
                {/* The Solution */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-2 w-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      How TeamFlow Helps
                    </span>
                  </div>
                  <p className="text-text-main text-sm leading-relaxed font-medium">
                    {persona.solution}
                  </p>
                </div>
              </div>
              
              {/* Persona-Specific CTA */}
              <button className="mt-8 w-full bg-blue-50 hover:bg-blue-100 
                text-primary font-semibold py-3 px-4 rounded-lg 
                transition duration-300 text-sm group-hover:shadow-md">
                See {persona.name.split(' ')[0]} Solutions →
              </button>
            </div>
          ))}
        </div>
        
        {/* Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">92%</div>
            <div className="text-sm font-semibold text-text-main">Faster onboarding</div>
            <div className="text-xs text-text-muted">for new team members</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">47%</div>
            <div className="text-sm font-semibold text-text-main">Fewer meetings</div>
            <div className="text-xs text-text-muted">with async collaboration</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">89%</div>
            <div className="text-sm font-semibold text-text-main">On-time delivery</div>
            <div className="text-xs text-text-muted">across all projects</div>
          </div>
        </div>
        
        {/* Main CTA */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8 md:p-10 border border-gray-200">
          <h3 className="text-2xl font-bold text-text-main mb-4">
            Find Your Team's Perfect Workflow
          </h3>
          <p className="text-text-muted mb-6 max-w-2xl mx-auto">
            Whether you're a fast-growing startup, a multi-client agency, or a distributed team, 
            TeamFlow provides the tools you need to work smarter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary hover:bg-blue-700 text-white 
              font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 
              flex items-center justify-center gap-2">
              Start 14-Day Free Trial
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="px-8 py-4 bg-white text-text-main border border-gray-300 
              hover:border-gray-400 font-semibold rounded-lg transition-all duration-300">
              Schedule a Demo
            </button>
          </div>
          <div className="mt-6 text-sm text-text-muted">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span>No credit card required</span>
              </div>
              <div className="hidden sm:block text-gray-300">•</div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span>Import from existing tools</span>
              </div>
              <div className="hidden sm:block text-gray-300">•</div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span>Team training included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Personas;