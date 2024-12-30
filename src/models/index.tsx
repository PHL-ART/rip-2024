import { ReactNode } from "react";

interface FunctionComponentProps {
  children?: React.ReactNode | string | null;
}

export interface MainLayoutProps extends FunctionComponentProps {}
export interface HeaderProps extends FunctionComponentProps {}
export interface OtherProps extends FunctionComponentProps {}
export interface BlogProps extends FunctionComponentProps {}
export interface ProjectsProps extends FunctionComponentProps {}
export interface MoviesProps extends FunctionComponentProps {}
export interface BooksProps extends FunctionComponentProps {}
export interface GamesProps extends FunctionComponentProps {}
export interface SectionProps extends FunctionComponentProps {
  title: string;
  description?: string;
}

export interface MovieElemProps {
  year: string | number;
  title: string;
  img: string;
}
export interface OtherElemProps {
  icon: ReactNode;
  title: string;
  value: number;
}
export interface BlogElemProps {
  icon: ReactNode;
  title: string;
  value: number;
}
export interface BookElemProps {
  title: string;
}
export interface GameElemProps {
  title: string;
}
export interface ProjectElemProps {
  title: string;
  description: string;
}
