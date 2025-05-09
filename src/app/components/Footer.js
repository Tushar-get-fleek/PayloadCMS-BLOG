"use client";

import Link from 'next/link';

const Footer = () => {
  // Structured Data (Schema.org)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Get Fleek',
    url: 'https://www.getfleek.app',
    logo: 'https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/fleek%20logo.png',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-9353853270',
        contactType: 'Customer Service',
        availableLanguage: ['English'],
        areaServed: 'IN',
      },
    ],
    sameAs: [
      'https://linkedin.com',
      'https://facebook.com',
      'https://instagram.com',
      'https://twitter.com',
      'https://youtube.com',
      'https://wa.me/919353853270',
    ],
  };

  return (
    <footer className="bg-black text-white py-10 xs:py-12 sm:py-16 px-4 xs:px-6 sm:px-8">
      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 xs:gap-8">
        {/* Left Section: Join the Fleek Revolution */}
        <div className="md:w-1/3">
          <h3 className="text-xl xs:text-2xl font-bold mb-3 xs:mb-4">Join the Fleek Revolution!</h3>
          <p className="text-xs xs:text-sm text-gray-400">
            Never pay full price for subscriptions again. Save more by tracking & managing subscriptions in one place. Think Fleek!
          </p>
        </div>

        {/* Middle Section: Links */}
        <nav className="md:w-1/3 flex flex-col sm:flex-row gap-6 xs:gap-8">
          <div>
            <h4 className="text-base xs:text-lg font-semibold mb-3 xs:mb-4">Fleek</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-xs xs:text-sm text-gray-400 hover:text-gray-200 focus:ring-2 focus:ring-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-xs xs:text-sm text-gray-400 hover:text-gray-200 focus:ring-2 focus:ring-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/corporate" className="text-xs xs:text-sm text-gray-400 hover:text-gray-200 focus:ring-2 focus:ring-white">
                  Corporate
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-xs xs:text-sm text-gray-400 hover:text-gray-200 focus:ring-2 focus:ring-white">
                  Booking
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-base xs:text-lg font-semibold mb-3 xs:mb-4">Help & Policy</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-xs xs:text-sm text-gray-400 hover:text-gray-200 focus:ring-2 focus:ring-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-xs xs:text-sm text-gray-400 hover:text-gray-200 focus:ring-2 focus:ring-white">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-base xs:text-lg font-semibold mb-3 xs:mb-4">Partner with us</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-xs xs:text-sm text-gray-400 hover:text-gray-200 focus:ring-2 focus:ring-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-xs xs:text-sm text-gray-400 hover:text-gray-200 focus:ring-2 focus:ring-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Right Section: Follow Us */}
        <div className="md:w-1/3">
          <h4 className="text-base xs:text-lg font-semibold mb-3 xs:mb-4">Follow us on</h4>
          <div className="flex flex-wrap gap-3 xs:gap-4 mb-3 xs:mb-4">
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-gray-200 focus:ring-2 focus:ring-white"
              aria-label="Follow Fleek on LinkedIn"
              rel="nofollow noopener"
            >
              <svg className="w-5 xs:w-6 h-5 xs:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-1.337-.026-3.058-1.866-3.058-1.867 0-2.154 1.458-2.154 2.964v5.698h-3v-11h2.875v1.497h.041c.4-.754 1.378-1.546 2.833-1.546 3.03 0 3.592 1.993 3.592 4.586v6.463z" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              className="text-gray-400 hover:text-gray-200 focus:ring-2 focus:ring-white"
              aria-label="Follow Fleek on Facebook"
              rel="nofollow noopener"
            >
              <svg className="w-5 xs:w-6 h-5 xs:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-3 7h-1.924c-.616 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-400 hover:text-gray-200 focus:ring-2 focus:ring-white"
              aria-label="Follow Fleek on Instagram"
              rel="nofollow noopener"
            >
              <svg className="w-5 xs:w-6 h-5 xs:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 3.441c1.928 0 2.162.008 2.926.042.706.032 1.091.15 1.347.25.34.132.586.285.842.541.256.256.409.502.541.842.1.256.218.641.25 1.347.034.764.042.998.042 2.926s-.008 2.162-.042 2.926c-.032.706-.15 1.091-.25 1.347-.132.34-.285.586-.541.842-.256.256-.502.409-.842.541-.256.1-.641.218-1.347.25-.764.034-.998.042-2.926.042s-2.162-.008-2.926-.042c-.706-.032-1.091-.15-1.347-.25-.34-.132-.586-.285-.842-.541-.256-.256-.409-.502-.541-.842-.1-.256-.218-.641-.25-1.347-.034-.764-.042-.998-.042-2.926s.008-2.162.042-2.926c.032-.706.15-1.091.25-1.347.132-.34.285-.586.541-.842.256-.256.502-.409.842-.541.256-.1.641-.218 1.347-.25.764-.034.998-.042 2.926-.042zm0-.789c-1.953 0-2.206.009-2.972.043-.766.034-1.288.157-1.745.336-.465.183-.86.428-1.256.824-.396.396-.641.791-.824 1.256-.179.457-.302.979-.336 1.745-.034.766-.043 1.019-.043 2.972s.009 2.206.043 2.972c.034.766.157 1.288.336 1.745.183.465.428.86.824 1.256.396.396.791.641 1.256.824.457.179.979.302 1.745.336.766.034 1.019.043 2.972.043s2.206-.009 2.972-.043c.766-.034 1.288-.157 1.745-.336-.465-.183-.86-.428-1.256-.824-.396-.396-.641-.791-.824-1.256-.179-.457-.302-.979-.336-1.745-.034-.766-.043-1.019-.043-2.972s.009-2.206.043-2.972c-.034-.766-.157-1.288-.336-1.745-.183-.465-.428-.86-.824-1.256-.396-.396-.791-.641-1.256-.824-.457-.179-.979-.302-1.745-.336-.766-.034-1.019-.043-2.972-.043zm0 2.348c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 9.652c-1.988 0-3.652-1.664-3.652-3.652s1.664-3.652 3.652-3.652 3.652 1.664 3.652 3.652-1.664 3.652-3.652 3.652zm5.406-9.652c0 .775-.627 1.402-1.402 1.402s-1.402-.627-1.402-1.402.627-1.402 1.402-1.402 1.402.627 1.402 1.402z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-gray-200 focus:ring-2 focus:ring-white"
              aria-label="Follow Fleek on Twitter"
              rel="nofollow noopener"
            >
              <svg className="w-5 xs:w-6 h-5 xs:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.72 0-4.924 2.204-4.924 4.924 0 .386.043.762.127 1.122-4.092-.205-7.719-2.165-10.141-5.144-.424.729-.666 1.575-.666 2.478 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 0-.626-.03-.927-.086.626 1.956 2.444 3.379 4.6 3.419-1.68 1.319-3.809 2.105-6.102 2.105-.397 0-.788-.023-1.175-.068 2.179 1.397 4.768 2.212 7.548 2.212 9.054 0 14.002-7.496 14.002-13.986 0-.213-.005-.426-.014-.637.961-.695 1.8-1.562 2.462-2.549z" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              className="text-gray-400 hover:text-gray-200 focus:ring-2 focus:ring-white"
              aria-label="Follow Fleek on YouTube"
              rel="nofollow noopener"
            >
              <svg className="w-5 xs:w-6 h-5 xs:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-1.854-.22-7.615-.22-7.615-.22s-5.761 0-7.615.22c-.854.101-1.615.562-1.716 1.416-.22 1.854-.22 5.584-.22 5.584s0 3.73.22 5.584c.101.854.862 1.315 1.716 1.416 1.854.22 7.615.22 7.615.22s5.761 0 7.615-.22c.854-.101 1.615-.562 1.716-1.416.22-1.854.22-5.584.22-5.584s0-3.73-.22-5.584c-.101-.854-.862-1.315-1.716-1.416zm-10.615 12.416v-8.5l6.5 4.25-6.5 4.25z" />
              </svg>
            </a>
          </div>
          <address className="space-y-2 not-italic">
            <a
              href="https://wa.me/919353853270"
              className="flex items-center gap-2 text-xs xs:text-sm text-gray-400 hover:text-gray-200 focus:ring-2 focus:ring-white"
              aria-label="Contact Fleek via WhatsApp"
              rel="nofollow noopener"
            >
              <svg className="w-5 xs:w-6 h-5 xs:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 15.144c-.162.453-.465.847-.963 1.15-.498.302-1.089.47-1.865.502-.904.038-1.145.055-3.238-.452-2.093-.507-3.858-1.706-4.668-2.548-.81-.842-1.619-2.024-1.619-3.369 0-1.345.486-2.103 1.089-2.831.603-.728 1.341-.982 1.982-1.025.641-.043 1.193.086 1.693.172.5.086.963.194 1.388.388.425.194.756.518.894.949.138.431.216.949.108 1.467-.108.518-.324 1-.54 1.388-.216.388-.486.862-.594 1.15-.108.288-.162.603-.108.894.054.291.216.603.432.894.216.291.486.603.81.894.324.291.702.603 1.08.862.378.259.81.518 1.242.691.432.172.918.302 1.404.388.486.086.999.043 1.512-.108.513-.151.999-.431 1.404-.862.405-.431.648-.949.648-1.512 0-.563-.189-1.025-.513-1.467z" />
              </svg>
              +91 9353853270
            </a>
            <a
              href="tel:+919353853270"
              className="flex items-center gap-2 text-xs xs:text-sm text-gray-400 hover:text-gray-200 focus:ring-2 focus:ring-white"
              aria-label="Call Fleek support"
              rel="nofollow"
            >
              <svg className="w-5 xs:w-6 h-5 xs:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.487 17.14c-.5-.7-1.2-1.2-2.1-1.5-.9-.3-1.9-.3-2.8.1-.6.3-1.1.7-1.6 1.2-.5.5-1.1.9-1.7 1.2-.6.3-1.3.5-2 .5-1.4 0-2.7-.5-3.7-1.5-1-1-1.5-2.3-1.5-3.7 0-.7.2-1.4.5-2 .3-.6.7-1.2 1.2-1.7.5-.5 1-.9 1.6-1.2.9-.4 1.9-.4 2.8-.1.9.3 1.6.8 2.1 1.5.5.7 1.2 1.2 2.1 1.5.9.3 1.9.3 2.8-.1.6-.3 1.1-.7 1.6-1.2.5-.5 1.1-.9 1.7-1.2.6-.3 1.3-.5 2-.5 1.4 0 2.7.5 3.7 1.5 1 1 1.5 2.3 1.5 3.7 0 .7-.2 1.4-.5 2-.3.6-.7 1.2-1.2 1.7-.5.5-1 .9-1.6 1.2-.9.4-1.9.4-2.8.1zm-8.487-17.14c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10z" />
              </svg>
              +91 9353853270
            </a>
          </address>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-6 xs:mt-8 text-center text-xs xs:text-sm text-gray-400">
        © {new Date().getFullYear()} Fleek Tech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;