import { HeaderProps } from "@/models";
import { motion } from "motion/react";
import { FC } from "react";

export const Header: FC<HeaderProps> = () => {
  return (
    <header className="body-font w-full">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        <div className="flex title-font items-center text-white mb-4 md:mb-0 select-none">
          <motion.div
            initial={{ transform: "translateY(-50px)", opacity: 0 }}
            animate={{ transform: "translateY(0px)", opacity: 1 }}
            transition={{ type: "spring", duration: 1, delay: 1 }}
            className="max-w-8 max-h-8"
          >
            <svg
              width="80%"
              height="100%"
              viewBox="0 0 1065 1623"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M136 160C136 160 277.5 0 532.5 0C787.5 0 929 160 929 160V1372H136C136 898.685 136 633.315 136 160Z"
                fill="white"
              />
              <path d="M0 1396H1065V1623H0V1396Z" fill="white" />
            </svg>
          </motion.div>
          <div className="ml-3 text-5xl flex flex-wrap gap-4 flex-row">
            <motion.div
              initial={{ transform: "scale(1.2)", opacity: 0 }}
              animate={{ transform: "scale(1)", opacity: 1 }}
              transition={{ type: "spring", duration: 0.5, delay: 0 }}
              className="uppercase font-bold"
            >
              Кладбище{" "}
            </motion.div>
            <motion.div
              initial={{ transform: "translateX(250px)", opacity: 0 }}
              animate={{ transform: "translateX(0px)", opacity: 1 }}
              transition={{ type: "spring", duration: 0.5, delay: 0.5 }}
              className="font-thin"
            >
              2024
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};
