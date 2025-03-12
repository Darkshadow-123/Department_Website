import React from 'react';
import { motion } from 'framer-motion';

const departments = [
  {
    name: 'EE-IOT',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=500&h=300',
    faculty: 7,
    labs: 2,
    intake:60
  },
  {
    name: 'IT-IOT',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300',
    faculty: 8,
    labs: 2,
    intake:60
  }
];

const programs = {
  undergraduate: [
    { name: 'Centre of Excellence for loT', Faculties: 'Dr.Praveen Bansal and Dr.Bhavna Rathore',link:"https://sites.google.com/mitsgwalior.in/centre-for-iot-mitsgwalior/home?authuser=1" },
    { name: 'Embedded Control of Electric Motor Lab', Faculties: 'Dr.Praveen Bansal and Dr.Saurabh Rajput',link:"https://sites.google.com/mitsgwalior.in/centre-for-iot-mitsgwalior/home?authuser=1"  },
    { name: 'IoT Protocol and Application Lab with LORAWAN Technologyl', Faculties: 'Dr.Bhavna Rathore and Dr.Priyanka Gargs' ,link:"https://sites.google.com/mitsgwalior.in/centre-for-iot-mitsgwalior/home?authuser=1"  },
    { name: 'Product Design, Development, and Fabrication Lab', Faculties: 'Dr.Praveen Bansal and Dr. Murli Manohar ', link:"https://sites.google.com/mitsgwalior.in/centre-for-iot-mitsgwalior/home?authuser=1" },
    { name: 'Industry 4.0 and Industrial IoT Lab', Faculties: 'Dr.Praveen Bansal and Dr. Gaurav Khare' ,link:"https://sites.google.com/mitsgwalior.in/centre-for-iot-mitsgwalior/home?authuser=1" },
    { name: 'Electronics System and Thinking Lab', Faculties: 'Dr.Praveen Bansal and Dr. Kaushal Pratap Sengar',link:"https://sites.google.com/mitsgwalior.in/centre-for-iot-mitsgwalior/home?authuser=1"  }
  ],
  postgraduate: [
    { name: 'M.Tech in AI & ML', duration: '2 years', seats: 30 },
    { name: 'M.Tech in Digital Communication', duration: '2 years', seats: 30 },
    { name: 'M.Tech in Structural Engineering', duration: '2 years', seats: 30 }
  ],
  research: [
    'Power Quality',
    'Grid Connected Systems',
    'Multilevel Inverters'
  ],
  research1: [
    'Performance and Economic Analysis of Rooftop PV Integrated Low Voltage Distribution Power System',
    'Industrial Energy Auditing & Management'
  ],
  research2: [
    'Metamaterial-based microwave absorbers',
    'Antennas',
    'Sensors',
    'IoT/Robotics'
  ],
  research3: [
    'Impact of renewable energy Source Integration on power system stability'
  ]
};

export default function Academics() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
       

        <div className="mb-16">
        <h1 className="text-4xl font-bold text-center mb-12">Branches</h1>
          <div className="grid md:grid-cols-3 gap-8">
            {departments.map((dept) => (
              <motion.div
                key={dept.name}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{dept.name}</h3>
                  <p className="text-gray-600">Faculty Members: {dept.faculty}</p>
                  <p className="text-gray-600">Laboratories: {dept.labs}</p>
                  <p className="text-gray-600">Intake: {dept.intake}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div> 
      
        <h1 className="text-4xl font-bold text-center mb-12">Laboratories</h1>

        <div className="mb-16">
          {/*<h2 className="text-3xl font-bold mb-6">Undergraduate Programs</h2>*/}
          <div className="grid md:grid-cols-2 gap-6">
            {programs.undergraduate.map((program) => (
              <motion.a
              href={program.link} // Add the hyperlink here
               target="_blank" // Open link in a new tab (optional)
               rel="noopener noreferrer" // Security best practice for external links
               whileHover={{ scale: 1.02 }}
                key={program.name}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2">{program.name}</h3>
                <p className="text-gray-600">Faculties: {program.Faculties}</p>
                {/*<p className="text-gray-600">Available Seats: {program.seats}</p>*/}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Research Areas</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Dr. Praveen Bansal</h3>
            <ul className="list-disc list-inside space-y-2">
              {programs.research.map((program) => (
                <li key={program} className="text-gray-600">{program}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Dr. Saurabh Kumar Rajput</h3>
            <ul className="list-disc list-inside space-y-2">
              {programs.research1.map((program) => (
                <li key={program} className="text-gray-600">{program}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Dr. Priyanka Garg</h3>
            <ul className="list-disc list-inside space-y-2">
              {programs.research2.map((program) => (
                <li key={program} className="text-gray-600">{program}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Dr. Bhavna Rathore</h3>
            <ul className="list-disc list-inside space-y-2">
              {programs.research3.map((program) => (
                <li key={program} className="text-gray-600">{program}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}