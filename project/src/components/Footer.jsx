import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">
              Madhav Institute of Technology & Science
              <br />
              Gwalior - 474005
              <br />
              Madhya Pradesh, India
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="http://rti.mp.gov.in/index.html" className="text-gray-400 hover:text-white">RTI</Link></li>
              <li><Link to="https://www.rgpv.ac.in/" className="text-gray-400 hover:text-white">RGPV</Link></li>
              <li><Link to="https://www.aicte-india.org/" className="text-gray-400 hover:text-white">AICTE</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="http://moodle.mitsgwalior.in/" className="text-gray-400 hover:text-white">Moodle</a></li>
              <li><a href="https://ims.mitsgwalior.in/" className="text-gray-400 hover:text-white">IMS</a></li>
              <li><a href="https://onlinecourses.nptel.ac.in/" className="text-gray-400 hover:text-white">NPTEL</a></li>
              <li><a href="https://alumni.mitsgwalior.in/" className="text-gray-400 hover:text-white">Alumni</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/MitsMadhavIstituteOfTechnologyScienceGwalior/" className="text-gray-400 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="https://x.com/i/flow/login?redirect_after_login=%2FMITS_Gwalior" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.linkedin.com/school/mitsgwl/#" className="text-gray-400 hover:text-white">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.instagram.com/mits_gwalior/?hl=en#" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">© 2024 Madhav Institute of Technology & Science. All rights reserved.</p>
        </div>
        <div >
          <p className="text-gray-400 text-center">Designed and Developed by 0901EO221051.</p>
        </div>
      </div>
    </footer>
  );
}