import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-900 mt-20">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                <img src="/telegram.png" className="h-8 me-3" alt="Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Telegram
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  About
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="" className="hover:underline">
                      FAQ
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="" className="hover:underline">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:underline">
                      Press
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Platform
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="" className="hover:underline ">
                      API
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="" className="hover:underline">
                      Translations
                    </a>
                  </li>
                  <li className="">
                    <a href="" className="hover:underline">
                      Instant View
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2025{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Ikhsan Kurniawan - 2306210784™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
