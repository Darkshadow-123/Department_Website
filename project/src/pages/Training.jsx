import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const placementData = [
  { year: '2019', students: 450, placed: 380 },
  { year: '2020', students: 480, placed: 410 },
  { year: '2021', students: 500, placed: 440 },
  { year: '2022', students: 520, placed: 470 },
  { year: '2023', students: 550, placed: 500 }
];

const topRecruiters = [
  {
    name: 'Accenture',
    logo: 'https://yt3.ggpht.com/a/AGF-l79CF7Lpkt_7uRrC-Qo9-Db8phW0RyF7Cey5HA=s900-mo-c-c0xffffffff-rj-k-no'
  },
  {
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png'
  },
  {
    name: 'Cognizant',
    logo: 'https://logos-world.net/wp-content/uploads/2023/03/Cognizant-Logo.png'
  },
  {
    name: 'IBM',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/200px-IBM_logo.svg.png'
  }
];

const trainingPrograms = [
  {
    title: 'Technical Skills',
    description: 'Programming languages, web development, and software engineering practices.',
    duration: '6 months'
  },
  {
    title: 'Soft Skills',
    description: 'Communication, leadership, and personality development.',
    duration: '3 months'
  },
  {
    title: 'Interview Preparation',
    description: 'Mock interviews, resume building, and aptitude training.',
    duration: '2 months'
  }
];

export default function Training() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-12">Training & Placement</h1>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Placement Statistics</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg" style={{ height: '400px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={placementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="students" fill="#8884d8" name="Total Students" />
                <Bar dataKey="placed" fill="#82ca9d" name="Placed Students" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Top Recruiters</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {topRecruiters.map((recruiter) => (
              <motion.div
                key={recruiter.name}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center"
              >
                <img
                  src={recruiter.logo}
                  alt={recruiter.name}
                  className="h-12 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Training Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {trainingPrograms.map((program) => (
              <motion.div
                key={program.title}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <p className="text-blue-600">Duration: {program.duration}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://web.mitsgwalior.in/images/mainmenu/MITS%20Deemed%20University%20Gwl%20Brochure%202024.pdf"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Download Placement Brochure
          </a>
        </div>
      </motion.div>
    </div>
  );
}