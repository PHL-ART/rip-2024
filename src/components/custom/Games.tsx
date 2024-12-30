import { GamesProps } from "@/models";
import { FC } from "react";
import { Section } from "./Sections";

export const Games: FC<GamesProps> = () => {
  return (
    <Section title="Игры" description="Те, что запустил. Во всех смыслах.">
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <div className="p-2 sm:w-1/2 w-full">
          <div className=" rounded flex p-4 h-full items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-white w-6 h-6 flex-shrink-0 mr-4"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            </svg>
            <span className="title-font font-medium text-white">
              Authentic Cliche Forage
            </span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-800 rounded flex p-4 h-full items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-white w-6 h-6 flex-shrink-0 mr-4"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium text-white">
              Kinfolk Chips Snackwave
            </span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-800 rounded flex p-4 h-full items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-white w-6 h-6 flex-shrink-0 mr-4"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium text-white">
              Coloring Book Ethical
            </span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-800 rounded flex p-4 h-full items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-white w-6 h-6 flex-shrink-0 mr-4"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium text-white">
              Typewriter Polaroid Cray
            </span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-800 rounded flex p-4 h-full items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-white w-6 h-6 flex-shrink-0 mr-4"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium text-white">
              Pack Truffaut Blue
            </span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-800 rounded flex p-4 h-full items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-white w-6 h-6 flex-shrink-0 mr-4"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium text-white">
              The Catcher In The Rye
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
};
