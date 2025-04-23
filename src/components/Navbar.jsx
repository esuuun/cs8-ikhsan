import React, { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";

function Navbar() {
  const [state, setState] = useState(false);

  const navigation = [];

  const logoSrc = "/telegram.png";
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring", stiffness: 100, delay: 1.5 }}
      className="sticky top-0 z-50 p-5"
    >
      <header className="bg-secondary/30 backdrop-blur-sm rounded-3xl">
        <nav className="items-center py-2 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
          <div className="flex justify-between">
            <a href="#" className="hover:scale-105 ease-in-out duration-300">
              <img src={logoSrc} className="h-10 w-10" alt="Telegram logo" />
            </a>
            <button
              className="text-foreground outline-none md:hidden"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <ul
            className={`flex-1 justify-between mt-12 md:flex md:mt-0 ${
              state ? "" : "hidden"
            }`}
          >
            <li className="order-2 pb-5 md:pb-0">
              <Button className="text-foreground hover:bg-background ease-in-out duration-300">
                Get it now!
              </Button>
            </li>
            <div className="order-1 flex-1 justify-center items-center space-y-5 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => (
                <li
                  className="text-foreground text-lg hover:text-primary"
                  key={idx}
                >
                  <a href={item.path}>{item.title}</a>
                </li>
              ))}
            </div>
          </ul>
        </nav>
      </header>
    </motion.div>
  );
}

export default Navbar;
