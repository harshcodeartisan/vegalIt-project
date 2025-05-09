import React from 'react';
import { ArrowRight, Briefcase, MapPin, Clock, Send } from 'lucide-react';

const CareersPage: React.FC = () => {
  const jobs = [
    {
      id: 1,
      title: 'Senior Network Engineer',
      location: 'Dubai, UAE',
      type: 'Full-time',
      description: 'We are looking for an experienced network engineer to design, implement, and maintain complex network infrastructure for our clients.',
      requirements: [
        'Bachelor\'s degree in IT, Computer Science, or related field',
        'Minimum 5 years of experience in network engineering',
        'Cisco CCNP or equivalent certification',
        'Experience with firewalls, VPNs, and network security',
        'Strong troubleshooting skills'
      ]
    },
    {
      id: 2,
      title: 'IT Support Specialist',
      location: 'Dubai, UAE',
      type: 'Full-time',
      description: 'Join our technical support team to provide excellent service to our clients, troubleshooting hardware and software issues.',
      requirements: [
        'Bachelor\'s degree in IT or equivalent experience',
        '2+ years of IT support experience',
        'Strong knowledge of Windows and network troubleshooting',
        'Excellent customer service skills',
        'CompTIA A+ certification preferred'
      ]
    },
    {
      id: 3,
      title: 'Home Automation Technician',
      location: 'Dubai, UAE',
      type: 'Full-time',
      description: 'Help design and install smart home systems for residential clients, including security, lighting, and entertainment systems.',
      requirements: [
        'Technical diploma or equivalent experience',
        'Experience with home automation systems (KNX, Control4, etc.)',
        'Understanding of residential electrical systems',
        'Strong attention to detail',
        'Excellent communication skills'
      ]
    },
    {
      id: 4,
      title: 'Cybersecurity Analyst',
      location: 'Dubai, UAE',
      type: 'Full-time',
      description: 'Protect our clients\' systems and data by monitoring, detecting, investigating, and responding to security threats.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity, IT, or related field',
        '3+ years of experience in cybersecurity',
        'Security certifications (CISSP, CEH, or equivalent)',
        'Experience with security tools and technologies',
        'Strong analytical and problem-solving skills'
      ]
    }
  ];

  return (
    <div className="pt-32">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
            <p className="text-xl text-gray-600">
              Discover exciting career opportunities at VegaTech and be part of our innovative team
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Work With Us?</h2>
              <p className="text-gray-600 mb-6">
                At VegaTech, we\'re building a team of passionate technology enthusiasts who are committed to delivering exceptional solutions to our clients. We value innovation, continuous learning, and a collaborative approach to problem-solving.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Professional Growth</h3>
                    <p className="text-gray-600">Opportunities for continuous learning and career advancement</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Collaborative Environment</h3>
                    <p className="text-gray-600">Work with talented professionals in a supportive team atmosphere</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Work-Life Balance</h3>
                    <p className="text-gray-600">Flexible schedules and competitive benefits package</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Team working together"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobs.map((job) => (
              <div key={job.id} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Briefcase className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                </div>
                <div className="flex items-center text-gray-600 mb-4 space-x-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{job.type}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
                <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
                  Apply Now
                  <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;