import { BlogElemProps, BlogProps } from "@/models";
import { FC, useEffect, useRef, useState } from "react";
import { AnimatedNumber } from "./AnimatedNumbers";
import { Section } from "./Sections";
import {
  ImagesIcon,
  NotebookPenIcon,
  PenToolIcon,
  RssIcon,
} from "lucide-react";
import { motion, useAnimation, useInView } from "motion/react";

const BlogElem: FC<BlogElemProps> = ({ icon, title, value }) => {
  const item = {
    hidden: { opacity: 0, transform: "translateY(-50px)" },
    visible: { opacity: 1, transform: "translateY(0px)" },
  };

  return (
    <motion.div
      className="p-4 md:w-1/4 sm:w-1/2 w-full"
      variants={item}
      transition={{ duration: 0.5 }}
    >
      <div className="border-2 border-gray-500 px-4 py-6 flex flex-col items-center gap-2">
        {icon}
        <h2 className="title-font font-medium text-3xl text-white">
          <AnimatedNumber value={value} />
        </h2>
        <p className="leading-relaxed">{title}</p>
      </div>
    </motion.div>
  );
};

export const Blog: FC<BlogProps> = () => {
  const initialState: BlogElemProps[] = [
    {
      title: "Ненаписанных обзоров",
      icon: <PenToolIcon size={48} />,
      value: 35,
    },
    {
      title: "Незапущенных рубрик",
      icon: <NotebookPenIcon size={48} />,
      value: 3,
    },

    {
      title: "Наопубликованных фотографий",
      icon: <ImagesIcon size={48} />,
      value: 186,
    },
    {
      title: "Неопубликованных постов",
      icon: <RssIcon size={48} />,
      value: 17,
    },
  ];

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [blog, _] = useState<BlogElemProps[]>(initialState);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <Section title="Блог" description="Которым обещал заниматься круглый год, но что-то пошло не так...">
      <motion.div
        className="flex flex-wrap text-left"
        ref={ref}
        initial={"hidden"}
        animate={controls}
        transition={{
          type: "spring",
          duration: 0.5,
          delay: 0.5,
          staggerChildren: 0.25,
        }}
      >
        {blog.map((el, index) => (
          <BlogElem
            icon={el.icon}
            title={el.title}
            value={el.value}
            key={`blog_${index}`}
          />
        ))}
      </motion.div>
    </Section>
  );
};
