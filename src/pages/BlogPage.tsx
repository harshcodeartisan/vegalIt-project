import React from 'react';
import { ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How IT AMC Services Can Save Your Business Money',
      excerpt: 'Discover how a well-structured IT Annual Maintenance Contract can reduce costs and improve efficiency across your organization.',
      image: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: 'June 15, 2023',
      author: 'Ahmed Hassan',
      category: 'IT Services'
    },
    {
      id: 2,
      title: 'Top 5 Smart Home Features Every Modern Home Needs',
      excerpt: 'From intelligent security systems to energy management, these smart home features are becoming essential for today\'s homeowners.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: 'May 28, 2023',
      author: 'Sarah Johnson',
      category: 'Home Automation'
    },
    {
      id: 3,
      title: 'The Evolution of Cybersecurity: Trends for 2023',
      excerpt: 'Stay ahead of emerging threats with insights into the latest cybersecurity trends and best practices for your business.',
      image: 'https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: 'April 10, 2023',
      author: 'Michael Chen',
      category: 'Security'
    },
    {
      id: 4,
      title: 'Cloud Migration: A Step-by-Step Guide for Businesses',
      excerpt: 'Learn how to successfully transition your business operations to the cloud with this comprehensive guide.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: 'March 22, 2023',
      author: 'Emily Rodriguez',
      category: 'Cloud Solutions'
    },
    {
      id: 5,
      title: 'Setting Up a New Office: IT Infrastructure Essentials',
      excerpt: 'Everything you need to know about establishing a robust IT foundation for your new office space.',
      image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: 'February 15, 2023',
      author: 'Ahmed Hassan',
      category: 'IT Infrastructure'
    },
    {
      id: 6,
      title: 'AI-Enabled Homes: The Future of Living',
      excerpt: 'Explore how artificial intelligence is transforming residential spaces and enhancing quality of life.',
      image: 'https://images.pexels.com/photos/5054541/pexels-photo-5054541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: 'January 8, 2023',
      author: 'Sarah Johnson',
      category: 'Home Automation'
    }
  ];

  const categories = [
    'All',
    'IT Services',
    'IT Infrastructure',
    'Security',
    'Cloud Solutions',
    'Home Automation'
  ];

  return (
    <div className="pt-32">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog & Insights</h1>
            <p className="text-xl text-gray-600">
              Stay updated with the latest trends and insights in IT services, infrastructure, security, and home automation
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center mb-12">
            {categories.map((category, index) => (
              <button 
                key={index}
                className={`px-4 py-2 rounded-full m-2 text-sm font-medium transition-colors ${
                  index === 0 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-xs font-medium bg-blue-100 text-blue-600 rounded-full px-2 py-1">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 ml-3">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {post.author}</span>
                    <a href="#" className="text-blue-600 font-medium flex items-center hover:text-blue-700 transition-colors">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-full px-6 py-3 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 mb-6">
                Stay informed about the latest technology trends and VegaTech news
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-4">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from VegaTech.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;