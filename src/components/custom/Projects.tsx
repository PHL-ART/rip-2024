import { ProjectElemProps, ProjectsProps } from "@/models";
import { FC, useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "motion/react";
import { Section } from "./Sections";

const ProjectElem: FC<ProjectElemProps> = ({ description, title }) => {
  const item = {
    hidden: { opacity: 0, transform: "scale(0.5)" },
    visible: { opacity: 1, transform: "scale(1)" },
  };

  return (
    <motion.div
      className="p-2 lg:w-1/3 md:w-1/2 w-full"
      variants={item}
      transition={{ duration: 0.25 }}
    >
      <div className="h-full flex items-center border-gray-500 border p-4">
        <div className="flex-grow">
          <h2 className="text-white title-font font-medium">
            {title}
          </h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>

    </motion.div>
  );
};

export const Projects: FC<ProjectsProps> = () => {
  const initialState: ProjectElemProps[] = [
    {
      title: "ph1l74",
      description: "Глобальное обновление сайта",
    },
    {
      title: "filatique",
      description: "Сайт музыкального проекта filatique",

    },

    {
      title: "Not yet Pozner Library",
      description: "Список литературы из выпусков Ещенепознер",

    },
    {
      title: "PBarista Bot",
      description: "Бот для заказа кофе",
    },
    {
      title: "ph1l74 api",
      description: "Большой сервис для удбства работы с сайтом",
    },
    {
      title: "Planner",
      description: "Свой удобный планировщик и todo-лист",
    },
  ];

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [projects, _] = useState<ProjectElemProps[]>(initialState);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <Section
      title="Проекты"
      description="Проекты, которые были начаты, но не доделаны до конца в этом году. Помним."
    >
      <motion.div
        className="flex flex-wrap"
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
        {projects.map((el, index) => (
          <ProjectElem
            title={el.title}
            description={el.description}
            key={`blog_${index}`}
          />
        ))}
      </motion.div>
    </Section>
  );
};