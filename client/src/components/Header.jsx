import React from 'react';
import { FaPhoneVolume } from "react-icons/fa6";
import {  Clock, MapPin } from 'lucide-react'; // Optional: use any icon library

const Header = () => {
  return (
    <div className="bg-white border-b-2 border-blue-900 px-8 py-5 flex flex-col sm:flex-row justify-around items-center text-sm text-[#1f2a56]">
      <div className="text-4xl font-bold">
        <span className=" text-[#1f2a56]">ME</span><span className="text-blue-900">DICAL</span>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-2 sm:mt-0">
        <div className="flex items-center gap-2">
          <FaPhoneVolume  className="w-8 h-8 text-blue-900" />
          <div>
            <p className="font-semibold text-xl">EMERGENCY</p>
            <p className="text-blue-900">(237) 681-812-255</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Clock className="w-8 h-8 text-blue-900" />
          <div>
            <p className="font-semibold text-xl">WORK HOUR</p>
            <p>09:00 - 20:00 <span className="text-blue-900">Everyday</span></p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <MapPin className="w-8 h-8 text-blue-900" />
          <div>
            <p className="font-semibold text-xl">LOCATION</p>
            <p className="text-blue-900">0123 Some Place</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
