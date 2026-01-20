import React from "react";
import logo from "../assets/ASF_PHOTO.png";
import visaImg from "../assets/visa.jpg";
import mastercardImg from "../assets/mastercard.png";
import paypalImg from "../assets/paypal.png";
import amexImg from "../assets/amex.png";

const Footer = () => {
  const paymentMethods = [visaImg, mastercardImg, paypalImg, amexImg];

  return (
    <footer className="bg-black text-gray-300 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
        {/* Discover AirFareScope */}
        <div className="flex flex-col items-center sm:items-start">
          {/* Logo */}
          <img src={logo} alt="AirFareScope Logo" className="h-15 w-auto mb-4 rounded-md" />

          <h3 className="text-lg font-semibold text-white mb-4">
            Discover AirFareScope
          </h3>
          <ul className="space-y-2">
            {["About Us", "Explore", "Deals"].map((item, i) => (
              <li
                key={i}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Payment Methods */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-lg font-semibold text-white mb-4">Payment Methods</h3>
          <div className="flex flex-wrap justify-center sm:justify-start gap-3">
            {paymentMethods.map((img, i) => (
              <div
                key={i}
                className="w-14 h-10 rounded-md overflow-hidden bg-gray-800 flex items-center justify-center transition-transform transform hover:scale-105"
              >
                <img src={img} alt="Payment Method" className="h-6 object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Need Help */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-lg font-semibold text-white mb-4">Need Help?</h3>
          <ul className="space-y-2">
            {["FAQ", "Support Center", "Cancellation"].map((item, i) => (
              <li
                key={i}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>
              Email:{" "}
              <span className="hover:text-white transition-colors cursor-pointer">
                support@airfarescope.com
              </span>
            </li>
            <li>
              Phone:{" "}
              <span className="hover:text-white transition-colors cursor-pointer">
                +880 1234 567 890
              </span>
            </li>
            <li>Address: 123 Travel St, Dhaka, Bangladesh</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} AirFareScope. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
