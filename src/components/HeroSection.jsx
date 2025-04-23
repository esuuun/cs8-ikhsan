import React from "react";

function HeroSection() {
  return (
    <section class="bg-background">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a
          href="#"
          class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-primary rounded-full  dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 ease-in-out duration-300"
          role="alert"
        >
          <span class="text-xs bg-primary-600 rounded-full text-foreground px-4 py-1.5 mr-3">
            New
          </span>{" "}
          <span class="text-sm font-medium">
            Telegram is out! Start using it today.
          </span>
          <svg
            class="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-foreground md:text-5xl lg:text-6xl ">
          Telegram
        </h1>
        <p class="mb-8 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48 ">
          Telegram is a cloud-based mobile and desktop messaging app with a
          focus on security and speed.
        </p>
        <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-foreground rounded-lg bg-primary hover:bg-muted ease-in-out duration-300"
          >
            Start Using Telegram
            <svg
              class="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 ease-in-out duration-300"
          >
            Learn More About Telegram
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
