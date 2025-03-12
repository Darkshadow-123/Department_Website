import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Home = () => {
  const slides = [
    {
      image: 'https://web.mitsgwalior.in/images/slider2/AMG_5338.jpeg',
      caption: 'Welcome to Center of IOT',
    },
    {
      image: 'https://www.mitsgwalior.in/gallery/298.JPG',
      caption: 'State-of-the-art Campus',
    },
    {
      image: 'https://i.pinimg.com/736x/a7/67/64/a7676416738f4762d03429f0ccead2f0.jpg',
      caption: 'Modern Laboratories',
    },
  ];

  const drivelink = "https://drive.google.com/file/d/1sMAhLYxwKu-8Dvvk2rZYmJS1PEoOQv8w/view";
  const locate_us= "https://www.google.com/maps/place/Madhav+Institute+of+Technology+%26+Science/@26.2314104,78.2031532,17z/data=!3m1!4b1!4m5!3m4!1s0x3976c14c64938e5f:0x87b3d6a725f7b077!8m2!3d26.2314104!4d78.2053419?shorturl=1";

  return (


    <div className="min-h-screen">
      <div className="h-[600px] relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="h-full w-full"
        >
          {slides.map((slides, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slides.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h2 className="text-white text-4xl font-bold text-center px-4">
                    {slides.caption}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            CENTER OF INTERNET OF THINGS 
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Department of Electrical Engineering is one of the oldest departments established in 1957 with an intake of 40. Currently, the department is offering undergraduate, postgraduate, and doctorate programs in various disciplines of Electrical Engineering. Presently the total intake of the B.Tech. program is 120 and the M.E. in “Industrial Systems & Drives” program has an intake of 25. A new B.Tech. program in "Internet of Things" with an intake of 60 has been started in 2020 by the department.
          The thrust areas of the department are IoT Architecture and Protocols, Data Analytics and Machine Learning, Network & Web Security, and IoT Applications.
          The department educates the students to take up challenging jobs in a wide range of industries and engage in research & development activities for the betterment of society. The syllabi of the courses are continuously updated and the laboratories are modernized to reflect the rapid changes in technology.
          The courses offered by the department cater to learning needs from the basics to the advanced level. In addition, the department offers a variety of discipline electives to cover modern technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Vision</h3>
            <p className="text-gray-600">
            "To Prepare Professionally Competent Electrical Engineers for Global Industrial requirements and Social needs."
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Mission</h3>
            <p className="text-gray-600">
            Impart state-of-the-art technical education at UG, PG, and Ph.D. levels through good academic support & facilities. (Academic Development).
            Keep pace with the latest technological developments in the domain. (R&D Activities).
            Effective interactions with industries, academia, and other stakeholders. (Industrial & Societal needs)
            Provide training on soft skills, managerial skills, and professional ethics for the overall development of students and society in an ethical manner. (Human Potential Development).
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Values</h3>
            <p className="text-gray-600">
              Excellence, Innovation, Integrity, and Social Responsibility.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors" onClick={()=> window.location.href = drivelink}>
            BROCHURE
          </button>
          <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors">
            Explore Courses
          </button>
          <button
          className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          onClick={() => window.open(locate_us, "_blank")}
          >
            Locate Us
          </button>
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Option to Design Your Own Degree</h2>
        </div>
        <div className="flex justify-center py-6">
          <img 
          src="https://web.mitsgwalior.in/images/EEIOT/Choose%20your%20own%20degree.jpg" 
          alt="Description of the image" 
          className="rounded-lg shadow-lg w-80"
          />
        </div>

      </section>
    </div>
  );
};

export default Home;