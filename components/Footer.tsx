import React from 'react';
import Link from 'next/link';
import { footerLinks } from '@/constants';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5'>
      <div className='w-full flex py-20'>
        {/* Footer Links */}
        <div className='w-full xl:w-[75rem] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 justify-items-stretch gap-y-6 px-4 mx-auto xl:px-0'>
          {footerLinks.map((link,index) => (
            <div key={index} className='flex flex-col gap-2 xl:gap-6 w-fit flex-1'>
              <h3 className='text-xl font-bold text-[#290F6A]'>{link.title}</h3>
              <div className="flex flex-col gap-2 xl:gap-6">
                {link.links.map((item) => (
                <Link key={item.title} href={item.url} className='text-[#7D7D7D] truncate  text-lg'>
                  {item.title}
                </Link>
              ))}</div>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full xl:w-[75rem] mx-auto flex flex-col md:flex-row justify-start md:justify-between items-center gap-4 mt-4 py-4 px-4 xl:px-0 border-t'>
        {/* Copyright */}
        <p className='text-gray-500'>Copyright @2024 TRACH. All rights reserved.</p>
        <div className='flex gap-4'>
            <FaFacebookF size={20} />
            <FaTwitter size={20} />
            <FaInstagram size={20} />
            <FaLinkedin size={20} />
            <FaYoutube size={20} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
