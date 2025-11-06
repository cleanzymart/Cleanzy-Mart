import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f6f8f6] text-[#111813]">
      {/* TopNavBar */}
      <header className="sticky top-0 z-50 bg-[#f6f8f6]/80 backdrop-blur-sm border-b border-[#f0f4f2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              {/* Logo SVG */}
              <div className="w-6 h-6 text-[#2bee6c]">
                <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z"></path>
                  <path clipRule="evenodd" fillRule="evenodd" d="M39.998 12.236C39.9944 12.2537 39.9875 12.2845 39.9748 12.3294C39.9436 12.4399 39.8949 12.5741 39.8346 12.7175C39.8168 12.7597 39.7989 12.8007 39.7813 12.8398C38.5103 13.7113 35.9788 14.9393 33.7095 15.4811C30.9875 16.131 27.6413 16.5217 24 16.5217C20.3587 16.5217 17.0125 16.131 14.2905 15.4811C12.0012 14.9346 9.44505 13.6897 8.18538 12.8168C8.17384 12.7925 8.16216 12.767 8.15052 12.7408C8.09919 12.6249 8.05721 12.5114 8.02977 12.411C8.00356 12.3152 8.00039 12.2667 8.00004 12.2612C8.00004 12.261 8 12.2607 8.00004 12.2612C8.00004 12.2359 8.0104 11.9233 8.68485 11.3686C9.34546 10.8254 10.4222 10.2469 11.9291 9.72276C14.9242 8.68098 19.1919 8 24 8C28.8081 8 33.0758 8.68098 36.0709 9.72276C37.5778 10.2469 38.6545 10.8254 39.3151 11.3686C39.9006 11.8501 39.9857 12.1489 39.998 12.236ZM4.95178 15.2312L21.4543 41.6973C22.6288 43.5809 25.3712 43.5809 26.5457 41.6973L43.0534 15.223C43.0709 15.1948 43.0878 15.1662 43.104 15.1371L41.3563 14.1648C43.104 15.1371 43.1038 15.1374 43.104 15.1371L43.1051 15.135L43.1065 15.1325L43.1101 15.1261L43.1199 15.1082C43.1276 15.094 43.1377 15.0754 43.1497 15.0527C43.1738 15.0075 43.2062 14.9455 43.244 14.8701C43.319 14.7208 43.4196 14.511 43.5217 14.2683C43.6901 13.8679 44 13.0689 44 12.2609C44 10.5573 43.003 9.22254 41.8558 8.2791C40.6947 7.32427 39.1354 6.55361 37.385 5.94477C33.8654 4.72057 29.133 4 24 4C18.867 4 14.1346 4.72057 10.615 5.94478C8.86463 6.55361 7.30529 7.32428 6.14419 8.27911C4.99695 9.22255 3.99999 10.5573 3.99999 12.2609C3.99999 13.1275 4.29264 13.9078 4.49321 14.3607C4.60375 14.6102 4.71348 14.8196 4.79687 14.9689C4.83898 15.0444 4.87547 15.1065 4.9035 15.1529C4.91754 15.1762 4.92954 15.1957 4.93916 15.2111L4.94662 15.223L4.95178 15.2312ZM35.9868 18.996L24 38.22L12.0131 18.996C12.4661 19.1391 12.9179 19.2658 13.3617 19.3718C16.4281 20.1039 20.0901 20.5217 24 20.5217C27.9099 20.5217 31.5719 20.1039 34.6383 19.3718C35.082 19.2658 35.5339 19.1391 35.9868 18.996Z"></path>
                </svg>
              </div>
              <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">Cleanzy Mart</h2>
            </div>
            
            <div className="hidden md:flex flex-1 justify-center items-center gap-9">
            <Link to="/" className="text-sm font-medium hover:text-[#2bee6c] transition-colors">Home</Link>
              <a className="text-sm font-medium hover:text-[#2bee6c] transition-colors" href="#services">Services</a>
              <a className="text-sm font-medium hover:text-[#2bee6c] transition-colors" href="#pricing">Pricing</a>
              <a className="text-sm font-medium hover:text-[#2bee6c] transition-colors" href="#how-it-works">How It Works</a>
              <a className="text-sm font-medium hover:text-[#2bee6c] transition-colors" href="#contact">Contact</a>
            </div>
            
            <div className="flex items-center gap-4">
              <Link 
                to="/login"
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#2bee6c]/20 text-[#111813] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#2bee6c]/30 transition-colors"
              >
                <span className="truncate">Log In</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* HeroSection */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="min-h-[480px] flex flex-col gap-8 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center text-center px-4 py-10 md:px-10"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://images.unsplash.com/photo-1582735689256-cc447dae1477?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")`
            }}
          >
            <div className="flex flex-col gap-4 max-w-2xl">
              <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
                Seamless Laundry & Dry-Cleaning, Delivered.
              </h1>
              <h2 className="text-white/90 text-base md:text-lg font-normal leading-normal">
                Enjoy the convenience of fresh, clean clothes with our professional and reliable service, right at your doorstep.
              </h2>
            </div>
            <Link 
              to="/signup"
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#2bee6c] text-[#102216] text-base font-bold leading-normal tracking-[0.015em] hover:brightness-110 transition-all shadow-lg"
            >
              <span className="truncate">Schedule a Pickup</span>
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-center">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Service Card 1 */}
              <div className="flex flex-col items-center text-center gap-4 p-6 bg-white rounded-xl border border-[#f0f4f2] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#2bee6c]/20 text-[#2bee6c]">
                  <span className="text-3xl">🧺</span>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-lg font-bold">Wash & Fold</p>
                  <p className="text-sm text-[#61896f]">Everyday laundry, perfectly washed and folded.</p>
                </div>
              </div>

              {/* Service Card 2 */}
              <div className="flex flex-col items-center text-center gap-4 p-6 bg-white rounded-xl border border-[#f0f4f2] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#2bee6c]/20 text-[#2bee6c]">
                  <span className="text-3xl">👔</span>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-lg font-bold">Dry Cleaning</p>
                  <p className="text-sm text-[#61896f]">Expert care for your delicate and special garments.</p>
                </div>
              </div>

              {/* Service Card 3 */}
              <div className="flex flex-col items-center text-center gap-4 p-6 bg-white rounded-xl border border-[#f0f4f2] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#2bee6c]/20 text-[#2bee6c]">
                  <span className="text-3xl">♨️</span>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-lg font-bold">Ironing</p>
                  <p className="text-sm text-[#61896f]">Crisp, wrinkle-free clothes, ready to wear.</p>
                </div>
              </div>

              {/* Service Card 4 */}
              <div className="flex flex-col items-center text-center gap-4 p-6 bg-white rounded-xl border border-[#f0f4f2] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#2bee6c]/20 text-[#2bee6c]">
                  <span className="text-3xl">🚚</span>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-lg font-bold">Pickup & Delivery</p>
                  <p className="text-sm text-[#61896f]">Conveniently scheduled right from your home.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-white rounded-xl">
          <div className="flex flex-col gap-12">
            <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-center">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-2xl">👩‍💼</span>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-base italic">"Cleanzy Mart has been a lifesaver! The pickup and delivery are always on time, and my clothes come back perfectly clean and folded. Highly recommend!"</p>
                  <p className="font-bold text-sm">- Sarah J.</p>
                </div>
                <div className="flex">
                  <span className="text-xl text-yellow-400">⭐</span>
                  <span className="text-xl text-yellow-400">⭐</span>
                  <span className="text-xl text-yellow-400">⭐</span>
                  <span className="text-xl text-yellow-400">⭐</span>
                  <span className="text-xl text-yellow-400">⭐</span>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-2xl">👨‍💼</span>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-base italic">"The quality of the dry cleaning is top-notch. They got a stubborn stain out of my favorite suit. The convenience is just the cherry on top."</p>
                  <p className="font-bold text-sm">- Michael B.</p>
                </div>
                <div className="flex">
                  <span className="text-xl text-yellow-400">⭐</span>
                  <span className="text-xl text-yellow-400">⭐</span>
                  <span className="text-xl text-yellow-400">⭐</span>
                  <span className="text-xl text-yellow-400">⭐</span>
                  <span className="text-xl text-yellow-400">⭐</span>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-2xl">👩‍🎓</span>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-base italic">"As a busy professional, I don't have time for laundry. Their wash and fold service is affordable, fast, and saves me hours every week."</p>
                  <p className="font-bold text-sm">- Emily R.</p>
                </div>
                <div className="flex">
                  <span className="text-xl text-yellow-400">⭐</span>
                  <span className="text-xl text-yellow-400">⭐</span>
                  <span className="text-xl text-yellow-400">⭐</span>
                  <span className="text-xl text-yellow-400">⭐</span>
                  <span className="text-xl text-yellow-400">⭐</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-16 md:mt-24 border-t border-[#f0f4f2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 text-[#2bee6c]">
                  <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z"></path>
                    <path clipRule="evenodd" fillRule="evenodd" d="M39.998 12.236C39.9944 12.2537 39.9875 12.2845 39.9748 12.3294C39.9436 12.4399 39.8949 12.5741 39.8346 12.7175C39.8168 12.7597 39.7989 12.8007 39.7813 12.8398C38.5103 13.7113 35.9788 14.9393 33.7095 15.4811C30.9875 16.131 27.6413 16.5217 24 16.5217C20.3587 16.5217 17.0125 16.131 14.2905 15.4811C12.0012 14.9346 9.44505 13.6897 8.18538 12.8168C8.17384 12.7925 8.16216 12.767 8.15052 12.7408C8.09919 12.6249 8.05721 12.5114 8.02977 12.411C8.00356 12.3152 8.00039 12.2667 8.00004 12.2612C8.00004 12.261 8 12.2607 8.00004 12.2612C8.00004 12.2359 8.0104 11.9233 8.68485 11.3686C9.34546 10.8254 10.4222 10.2469 11.9291 9.72276C14.9242 8.68098 19.1919 8 24 8C28.8081 8 33.0758 8.68098 36.0709 9.72276C37.5778 10.2469 38.6545 10.8254 39.3151 11.3686C39.9006 11.8501 39.9857 12.1489 39.998 12.236ZM4.95178 15.2312L21.4543 41.6973C22.6288 43.5809 25.3712 43.5809 26.5457 41.6973L43.0534 15.223C43.0709 15.1948 43.0878 15.1662 43.104 15.1371L41.3563 14.1648C43.104 15.1371 43.1038 15.1374 43.104 15.1371L43.1051 15.135L43.1065 15.1325L43.1101 15.1261L43.1199 15.1082C43.1276 15.094 43.1377 15.0754 43.1497 15.0527C43.1738 15.0075 43.2062 14.9455 43.244 14.8701C43.319 14.7208 43.4196 14.511 43.5217 14.2683C43.6901 13.8679 44 13.0689 44 12.2609C44 10.5573 43.003 9.22254 41.8558 8.2791C40.6947 7.32427 39.1354 6.55361 37.385 5.94477C33.8654 4.72057 29.133 4 24 4C18.867 4 14.1346 4.72057 10.615 5.94478C8.86463 6.55361 7.30529 7.32428 6.14419 8.27911C4.99695 9.22255 3.99999 10.5573 3.99999 12.2609C3.99999 13.1275 4.29264 13.9078 4.49321 14.3607C4.60375 14.6102 4.71348 14.8196 4.79687 14.9689C4.83898 15.0444 4.87547 15.1065 4.9035 15.1529C4.91754 15.1762 4.92954 15.1957 4.93916 15.2111L4.94662 15.223L4.95178 15.2312ZM35.9868 18.996L24 38.22L12.0131 18.996C12.4661 19.1391 12.9179 19.2658 13.3617 19.3718C16.4281 20.1039 20.0901 20.5217 24 20.5217C27.9099 20.5217 31.5719 20.1039 34.6383 19.3718C35.082 19.2658 35.5339 19.1391 35.9868 18.996Z"></path>
                  </svg>
                </div>
                <h2 className="text-xl font-bold">Cleanzy Mart</h2>
              </div>
              <p className="text-sm text-[#61896f] max-w-sm">Your one-stop solution for fresh, clean clothes. We handle your laundry with care so you can focus on what matters most.</p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-[#2bee6c] transition-colors text-gray-600">About Us</Link></li>
                <li><a className="hover:text-[#2bee6c] transition-colors text-[#61896f]" href="#">Careers</a></li>
                <li><a className="hover:text-[#2bee6c] transition-colors text-[#61896f]" href="#">Press</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-[#61896f]">
                <li>support@cleanzymart.com</li>
                <li>(555) 123-4567</li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a className="text-[#61896f] hover:text-[#2bee6c] transition-colors" href="#">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"></path>
                  </svg>
                </a>
                <a className="text-[#61896f] hover:text-[#2bee6c] transition-colors" href="#">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-[#f0f4f2] pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[#61896f]">
            <p>© 2024 Cleanzy Mart. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a className="hover:text-[#2bee6c] transition-colors" href="#">Terms of Service</a>
              <a className="hover:text-[#2bee6c] transition-colors" href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;