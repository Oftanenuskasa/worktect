const Footer = () => {
    return (
      <footer className="bg-white py-8 px-4">
        <div className="container mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="col-span-1">
              <h2 className="text-2xl text-sky-400 font-bold mb-4">AK-VISION.</h2>
              <p className="text-gray-600 mb-4">
                Our multifaceted company delivers a broad range of services, tailored to meet various client needs with a focus on excellence, productivity, and satisfaction.
              </p>
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                  </svg>
                </a>
                <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                  <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.227-.415.562-.217.96-.477 1.382-.896.419-.42.679-.819.896-1.381.164-.422.36-1.057.413-2.227.057-1.266.07-1.646.07-4.85s-.015-3.585-.074-4.85c-.061-1.17-.256-1.805-.421-2.227-.224-.562-.479-.96-.897-1.382-.419-.419-.824-.679-1.38-.896-.42-.164-1.065-.36-2.235-.413-1.274-.057-1.649-.07-4.859-.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
              </div>
            </div>
  
            {/* Quick Links - First Column */}
            <div className="col-span-1">
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Services Offered</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Our Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Reach Out</a></li>
              </ul>
            </div>
  
            {/* Quick Links - Second Column */}
            <div className="col-span-1">
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Customer Support</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Help Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Talk to Us</a></li>
              </ul>
            </div>
  
            {/* Quick Links - Third Column */}
            <div className="col-span-1">
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Meet Our Team</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Our Portfolio</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Statement</a></li>
              </ul>
            </div>
          </div>
  
          {/* Bottom Footer */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-600 text-sm mb-4 md:mb-0">
                Copyright © . All Rights Reserved. — Crafted with Care and Precision by Worktecture's Development Team
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Terms of Use</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  