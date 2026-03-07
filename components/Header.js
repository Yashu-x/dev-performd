import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Import icons

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className="relative z-50 bg-white shadow-sm">
      {/* Announcement Bar */}
      <div className="w-full bg-[#22A18D] text-white text-center py-2 text-sm font-medium">
        All Started with a Comprehensive Strategy -{" "}
        <a
          href="/contactUs"
          className="underline font-semibold hover:opacity-80 transition-opacity"
        >
          Get Your Free Strategy Call Now 🚀
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a className="flex items-center">
                <span className="sr-only">Logo</span>
                <img src="/images/logo.png" className="h-8 w-auto sm:h-10" alt="Logo" />
              </a>
            </Link>
          </div>

          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#22A18D]"
              onClick={() => setNavbarOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <nav className="hidden md:flex space-x-10 items-center">
            <NavLinks desktop={true} />
          </nav>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#contact"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-[#22A18D] hover:bg-opacity-90"
            >
              FREE STRATEGY CALL
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${navbarOpen ? "fixed inset-0 z-50 md:hidden" : "hidden"}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setNavbarOpen(false)}></div>
        <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl flex flex-col overflow-y-auto">
          <div className="flex items-center justify-between px-5 pt-5 pb-6">
            <div>
              <img src="/images/logo.png" className="h-8 w-auto" alt="Logo" />
            </div>
            <div className="-mr-2">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#22A18D]"
                onClick={() => setNavbarOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="px-5 py-6 space-y-6">
            <nav className="grid gap-y-8">
              <NavLinks desktop={false} closeMenu={() => setNavbarOpen(false)} />
            </nav>
            <div>
              <a
                href="#contact"
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-[#22A18D] hover:bg-opacity-90"
                onClick={() => setNavbarOpen(false)}
              >
                FREE STRATEGY CALL
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLinks({ desktop, closeMenu }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  if (desktop) {
    return (
      <>
        <div
          className="relative group"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button
            className="text-gray-900 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-[#22A18D] focus:outline-none"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span>Services</span>
            <svg
              className={`ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Desktop Dropdown */}
          <div
            className={`absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-xs sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 transition-all duration-200 ${dropdownOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-1 invisible'}`}
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                <Link
                  href="/services"
                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                  onClick={() => setDropdownOpen(false)}
                >
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">SEO</p>
                  </div>
                </Link>
                <Link
                  href="/googleAds"
                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                  onClick={() => setDropdownOpen(false)}
                >
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">Google Ads</p>
                  </div>
                </Link>
                <Link
                  href="/googleAds"
                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                  onClick={() => setDropdownOpen(false)}
                >
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">Social Media Ads</p>
                  </div>
                </Link>
                <Link
                  href="/googleAds"
                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                  onClick={() => setDropdownOpen(false)}
                >
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">Marketplace Management</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Link href="/aboutUs" className="text-base font-medium text-gray-900 hover:text-[#22A18D]">
          About
        </Link>
        <Link href="/contactUs" className="text-base font-medium text-gray-900 hover:text-[#22A18D]">
          Contact
        </Link>
      </>
    );
  }

  // Mobile NavLinks
  return (
    <div className="space-y-4">
      <div>
        <button
          type="button"
          className="flex items-center justify-between w-full text-base font-medium text-gray-900 hover:text-[#22A18D]"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span>Services</span>
          <svg
            className={`ml-2 h-5 w-5 text-gray-400 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {dropdownOpen && (
          <div className="mt-2 pl-4 space-y-2">
            <Link
              href="/services"
              className="block text-base font-medium text-gray-600 hover:text-[#22A18D]"
              onClick={closeMenu}
            >
              SEO
            </Link>
            <Link
              href="/googleAds"
              className="block text-base font-medium text-gray-600 hover:text-[#22A18D]"
              onClick={closeMenu}
            >
              Google Ads
            </Link>
          </div>
        )}
      </div>
      <Link
        href="/aboutUs"
        className="block text-base font-medium text-gray-900 hover:text-[#22A18D]"
        onClick={closeMenu}
      >
        About
      </Link>
      <Link
        href="/contactUs"
        className="block text-base font-medium text-gray-900 hover:text-[#22A18D]"
        onClick={closeMenu}
      >
        Contact
      </Link>
    </div>
  );
}


