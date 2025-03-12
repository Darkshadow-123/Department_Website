import React from 'react';
import { motion } from 'framer-motion';



const leadership = [
  {
    name: 'Dr. Praveen Bansal',
    role: 'Coordinator (CIOT)',
    image: 'https://web.mitsgwalior.in/images/faculties/Electrical/20220901_140021.jpg',
    description: ' PM.Tech(MANIT,Bhopal), Ph.D. (DTU,Delhi)'
  },
  {
    name: 'Dr. Saurabh Kumar Rajput ',
    role: 'Assistant Professor',
    image: 'https://web.mitsgwalior.in/images/faculties/Electrical/Saurabh%20K%20Rajput%20pic.jpg',
    description: 'Ph.D.(NIT Patna), M.Tech. (IIT Delhi), B.Tech. (UPTU Lucknow).'
  },
  {
    name: 'Dr. Priyanka Garg',
    role: 'Assistant Professor',
    image: 'https://web.mitsgwalior.in/images/Departments/information_technology/pic.jpg',
    description: 'Ph.D., Delhi Technological University'
  },
  {
    name: 'Dr. Bhavna Rathore',
    role: 'Assistant Professor',
    image: 'https://web.mitsgwalior.in/images/faculties/Electrical/Bhavna%20photo.jpg',
    description: 'Ph.D.  IIT Kanpur || M.Tech DTU Delhi || B.E. SGSITS Indore'
  },

];



const timeline = [
  { year: '1957', event: 'Establishment of MITS' },
  { year: '1960', event: 'First Batch Graduated' },
  { year: '1965', event: 'Introduction of Post Graduate Programs' },
  { year: '1980', event: 'Research Center Established' },
  { year: '2000', event: 'Modernization of Labs and Infrastructure' },
  { year: '2010', event: 'Introduction of New Technology Programs' },
  { year: '2020', event: 'Digital Campus Initiative' }
];

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <h1 className="text-4xl font-bold text-center mb-8">About CIOT</h1>
        
        <div className="prose max-w-none mb-12">
          <p className="text-lg text-gray-600 mb-6">
          The thrust areas of the department are IoT Architecture and Protocols, Data Analytics and Machine Learning, Network & Web Security, and IoT Applications.
          </p>
          
         
        </div>

        

        <h2 className="text-3xl font-bold mb-6">Faculty Profiles</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {leadership.map((leader) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-center" >{leader.name}</h3>
              <p className="text-blue-600 text-center mb-4">{leader.role}</p>
              <p className="text-gray-600">{leader.description}</p>
            </motion.div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-6">Our Timeline</h2>
        <div className="space-y-6 mb-12">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start space-x-4"
            >
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg w-24 text-center">
                {item.year}
              </div>
              <div className="flex-1 bg-white p-4 rounded-lg shadow">
                {item.event}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}