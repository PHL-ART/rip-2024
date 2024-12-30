import { MainLayoutProps } from "@/models";
import { FC } from "react";

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-svh w-full items-center justify-center md:p-10">
      <div className="absolute top-0 left-0 w-full h-full bg z-0"></div>
      <div className="z-10 select-none w-full mx-auto">{children}</div>
    </div>
  );
};
