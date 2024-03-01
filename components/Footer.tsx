import React from 'react';
import Link from 'next/link';
import { footerLinks } from '@/constants';

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100 z-50 '>
      <div className='flex max-md:flex-col flex-wrap justify-center gap-5 sm:px-16 px-6 py-10'>
        {/* Footer Links */}
        <div className='flex flex-wrap gap-8'>
          {footerLinks.map((link,index) => (
            <div key={index} className='footer__link'>
              <h3 className='font-bold'>{link.title}</h3>
              {link.links.map((item) => (
                <Link key={item.title} href={item.url} className='text-gray-500 block'>
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-start items-center mt-5 sm:px-16 px-6 py-5'>
        {/* Copyright */}
        <p className='text-gray-500'>Copyright @2024 TRACH. All rights reserved.</p>
        <div className='footer__copyrights-link ml-8'>
          <Link href={"/"} className='text-gray-500'>
            Privacy Policy
          </Link>
          <Link href={"/"} className='text-gray-500'>
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
