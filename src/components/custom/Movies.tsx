import { MovieElemProps, MoviesProps } from "@/models";
import { FC, useEffect, useRef, useState } from "react";
import { Section } from "./Sections";
import { motion, useAnimation, useInView } from "motion/react";

const MovieElem: FC<MovieElemProps> = ({ year, title }) => {

  const item = {
    hidden: { opacity: 0, transform: "scale(0.5)" },
    visible: { opacity: 1, transform: "scale(1)" },
  };

  return (
    <motion.div
      className="xl:w-1/4 md:w-1/2 p-4"
      variants={item}
      transition={{ duration: 0.15 }}>
      <div className="bg-opacity-40 p-6 border border-gray-500">
        {/* <img
          className="h-40 rounded w-full aspect-[4/3] object-cover object-center mb-6"
          src={img}
          alt="content"
        /> */}
        <h3 className="tracking-widest text-white text-xs font-medium title-font">
          {year}
        </h3>
        <h2 className="text-lg text-white font-medium title-font">
          {title}
        </h2>
      </div>
    </motion.div>
  );
};

export const Movies: FC<MoviesProps> = () => {
  const initialState: MovieElemProps[] = [
    {
      title: "Тетрис / Tetris",
      year: 2023,
      img: "https://dummyimage.com/400x720",
    },
    {
      title: "Гарри и Тонто / Harry & Tonto",
      year: 1974,
      img: "https://dummyimage.com/400x720",
    },
    {
      title: "Ящик / La caja",
      year: 2021,
      img: "https://dummyimage.com/720x720",
    },
    {
      title: "Ошибка резидента",
      year: 1968,
      img: "https://dummyimage.com/400x720",
    },
    {
      title: "Хранители: Часть 1 / Watchman: Chapter I",
      year: 2024,
      img: "https://dummyimage.com/400x720",
    },
    {
      title: "Климт и Шиле / Klimt & Schiele",
      year: 2018,
      img: "https://dummyimage.com/400x720",
    },
    {
      title: "Не хороните меня без Ивана",
      year: 2022,
      img: "https://dummyimage.com/400x720",
    },
    {
      title: "Хитровка. Знак четырех",
      year: 2023,
      img: "https://dummyimage.com/400x720",
    },
    {
      title: "Падение Империи / Civil War",
      year: 2024,
      img: "https://dummyimage.com/400x720",
    },
    {
      title: "Мой Декабрь / My December",
      year: 2023,
      img: "https://dummyimage.com/400x720",
    },
    {
      title: "Джокер: Безумие на двоих / Folie a Deux",
      year: 2024,
      img: "https://dummyimage.com/400x720",
    },
    {
      title: "Платформа / Zhantai",
      year: 2000,
      img: "https://dummyimage.com/400x720",
    },
    {
      title: "Доктор Мабузе, игрок / Dr.Mabuse, der Spieler",
      year: 1922,
      img: "https://dummyimage.com/400x720",
    },
    {
      title: "Пиковая Дама",
      year: 1916,
      img: "https://dummyimage.com/400x720",
    },
    {
      title: "Солтберн / Saltburn",
      year: 2023,
      img: "https://dummyimage.com/400x720",
    },
  ];


  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [movies, _] = useState<MovieElemProps[]>(initialState);


  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);


  return (
    <Section
      title="Фильмы и сериалы"
      description="Те, что начал смотреть, но бросил на половине, или и того меньше... Пусть земля им будет пухом."
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
          staggerChildren: 0.1,
        }} >
        {movies?.map((el, index) => (
          <MovieElem
            img={el.img}
            title={el.title}
            year={el.year}
            key={`movie_${index}`}
          />
        ))}
      </motion.div>
    </Section>
  );
};
