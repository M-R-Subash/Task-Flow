import React, { useState, useEffect } from 'react';
import { 
  FaCalendarAlt, FaArrowRight, 
  FaSearch, FaChevronLeft, FaChevronRight, 
  FaClock, FaBookOpen, 
  FaRss
} from 'react-icons/fa';

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isMobile, setIsMobile] = useState(false);
  const postsPerPage = 6;
  const totalPages = 3;

  useEffect(() => {
    window.scrollTo(0, 0);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const categories = [
    { id: 'all', name: 'All Articles', count: 12 },
    { id: 'productivity', name: 'Productivity', count: 4 },
    { id: 'remote-work', name: 'Remote Work', count: 3 },
    { id: 'team-management', name: 'Team Management', count: 3 },
    { id: 'tips-tricks', name: 'Tips & Tricks', count: 2 },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "10 Project Management Mistakes That Cost Teams Time",
      excerpt: "Learn how to identify and eliminate common project management pitfalls.",
      author: "Sarah Chen",
      role: "Productivity Expert",
      authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      date: "Mar 15, 2024",
      readTime: "8 min",
      category: "productivity",
      tags: ["Productivity", "Project Management"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "How Asynchronous Communication Transformed Our Remote Team",
      excerpt: "Discover how implementing async communication increased productivity by 40%.",
      author: "Alex Rodriguez",
      role: "Engineering Lead",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      date: "Mar 12, 2024",
      readTime: "6 min",
      category: "remote-work",
      tags: ["Remote Work", "Communication"],
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
      featured: true
    },
    {
      id: 3,
      title: "The Ultimate Guide to Effective Sprint Planning",
      excerpt: "A comprehensive guide to sprint planning for better team alignment.",
      author: "Michael Chen",
      role: "Agile Coach",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      date: "Mar 10, 2024",
      readTime: "12 min",
      category: "team-management",
      tags: ["Agile", "Sprint Planning"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Time Tracking: How to Do It Right",
      excerpt: "Learn ethical and effective time tracking strategies for teams.",
      author: "Jessica Williams",
      role: "Operations Director",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      date: "Mar 8, 2024",
      readTime: "7 min",
      category: "tips-tricks",
      tags: ["Time Tracking", "Management"],
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Building Trust in Distributed Teams",
      excerpt: "Practical strategies to build and maintain trust in remote teams.",
      author: "David Kim",
      role: "Remote Work Consultant",
      authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      date: "Mar 5, 2024",
      readTime: "9 min",
      category: "remote-work",
      tags: ["Trust", "Remote Teams"],
      image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=600&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Kanban vs Scrum: Which Fits Your Team?",
      excerpt: "Comparison of Kanban and Scrum methodologies for team workflow.",
      author: "Rachel Park",
      role: "Project Management Expert",
      authorImage: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face",
      date: "Mar 3, 2024",
      readTime: "10 min",
      category: "team-management",
      tags: ["Kanban", "Scrum"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
    },
    {
      id: 7,
      title: "Automating Routine Tasks: Save 10 Hours Weekly",
      excerpt: "Automation strategies for repetitive tasks and manual processes.",
      author: "Thomas Lee",
      role: "Automation Specialist",
      authorImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
      date: "Feb 28, 2024",
      readTime: "11 min",
      category: "productivity",
      tags: ["Automation", "Efficiency"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      id: 8,
      title: "Psychological Safety in High-Performance Teams",
      excerpt: "How to foster an environment for taking risks and sharing ideas.",
      author: "Dr. Lisa Wong",
      role: "Organizational Psychologist",
      authorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
      date: "Feb 25, 2024",
      readTime: "14 min",
      category: "team-management",
      tags: ["Psychology", "Team Culture"],
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop"
    },
    {
      id: 9,
      title: "The Art of Effective One-on-One Meetings",
      excerpt: "Transform meetings from status updates to meaningful conversations.",
      author: "Brian Taylor",
      role: "Leadership Coach",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      date: "Feb 22, 2024",
      readTime: "8 min",
      category: "tips-tricks",
      tags: ["Meetings", "Management"],
      image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=600&h=400&fit=crop"
    },
    {
      id: 10,
      title: "Hybrid Work Models: Finding the Right Balance",
      excerpt: "Explore different hybrid work models for maximum productivity.",
      author: "Olivia Martin",
      role: "Workplace Strategy Lead",
      authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      date: "Feb 20, 2024",
      readTime: "9 min",
      category: "remote-work",
      tags: ["Hybrid Work", "Future of Work"],
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop"
    },
    {
      id: 11,
      title: "Goal Setting Frameworks That Actually Work",
      excerpt: "Compare OKRs, SMART goals for team goal-setting process.",
      author: "Robert Johnson",
      role: "Strategy Consultant",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      date: "Feb 18, 2024",
      readTime: "13 min",
      category: "productivity",
      tags: ["Goal Setting", "OKRs"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      id: 12,
      title: "Reducing Meeting Fatigue: Practical Tips",
      excerpt: "How to identify unnecessary meetings and implement better practices.",
      author: "Sophia Garcia",
      role: "Meeting Efficiency Expert",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      date: "Feb 15, 2024",
      readTime: "7 min",
      category: "productivity",
      tags: ["Meetings", "Efficiency"],
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&h=400&fit=crop"
    },
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background-light">
      {/* Header */}
      <section className="pt-20 pb-8 md:pt-24 md:pb-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary text-sm font-semibold mb-6">
              <FaBookOpen className="text-primary" />
              TEAMFLOW BLOG
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-main mb-4">
              Insights for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-600">Smarter Teams</span>
            </h1>
            <p className="text-base md:text-lg text-text-muted max-w-2xl mx-auto px-4">
              Expert advice, best practices, and actionable tips to help your team work better together.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2.5 rounded-lg transition-all duration-300 text-sm font-medium ${
                  selectedCategory === category.id
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

      {/* Blog Posts */}
      <section className="py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {currentPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Post Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {post.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-2 py-1 bg-primary text-white text-xs font-bold rounded">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-5 md:p-6">
                  {/* Post Meta */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-text-muted flex items-center">
                        <FaCalendarAlt className="w-3 h-3 mr-1" />
                        {post.date}
                      </span>
                      <span className="text-xs text-text-muted">•</span>
                      <span className="text-xs text-text-muted flex items-center">
                        <FaClock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-text-muted capitalize">
                      {post.category.replace('-', ' ')}
                    </span>
                  </div>

                  {/* Post Title */}
                  <h3 className="text-lg font-bold text-text-main mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-text-muted text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 rounded bg-blue-50 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <div>
                        <div className="text-sm font-medium text-text-main">{post.author}</div>
                        <div className="text-xs text-text-muted">{post.role}</div>
                      </div>
                    </div>
                    <button className="text-primary text-sm font-medium flex items-center gap-1">
                      Read
                      <FaArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {currentPosts.length === 0 && (
            <div className="text-center py-12 md:py-16">
              <FaSearch className="w-12 h-12 md:w-16 md:h-16 text-gray-300 mx-auto mb-4 md:mb-6" />
              <h3 className="text-xl md:text-2xl font-bold text-text-main mb-2 md:mb-3">No articles found</h3>
              <p className="text-text-muted mb-6 md:mb-8 px-4">Try selecting a different category</p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="bg-primary text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base"
              >
                Show All Articles
              </button>
            </div>
          )}

          {/* Pagination */}
          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-text-muted">
              Showing {currentPosts.length} of {filteredPosts.length} articles
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-2 rounded-lg ${
                  currentPage === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-text-main hover:bg-gray-100'
                }`}
              >
                <FaChevronLeft className="w-4 h-4" />
              </button>

              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-lg font-medium text-sm ${
                    currentPage === page
                      ? 'bg-primary text-white'
                      : 'text-text-main hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-lg ${
                  currentPage === totalPages
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-text-main hover:bg-gray-100'
                }`}
              >
                <FaChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-gradient-to-r from-blue-50 to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 text-primary text-sm font-semibold mb-6">
            <FaRss className="text-primary" />
            STAY UPDATED
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-text-main mb-4">
            Get Team Productivity Insights
          </h2>
          <p className="text-text-muted mb-6 max-w-2xl mx-auto">
            Join thousands of team leaders who read our weekly newsletter for productivity tips and industry insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your work email"
              className="flex-1 px-4 md:px-6 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="px-6 md:px-8 py-3 bg-primary hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
          
          <p className="text-sm text-text-muted mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Blog Stats */}
      <section className="py-8 md:py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center p-4 md:p-6">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">50K+</div>
              <div className="text-sm font-semibold text-text-main">Monthly Readers</div>
            </div>
            <div className="text-center p-4 md:p-6">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">120+</div>
              <div className="text-sm font-semibold text-text-main">Articles Published</div>
            </div>
            <div className="text-center p-4 md:p-6">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">25K+</div>
              <div className="text-sm font-semibold text-text-main">Newsletter Subscribers</div>
            </div>
            <div className="text-center p-4 md:p-6">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">4.8</div>
              <div className="text-sm font-semibold text-text-main">Average Rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;