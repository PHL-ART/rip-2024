import { BookElemProps, BooksProps } from "@/models";
import { FC, useEffect, useRef, useState } from "react";
import { Section } from "./Sections";
import { motion, useAnimation, useInView } from "motion/react";
import { Book } from "lucide-react";

const BookElem: FC<BookElemProps> = ({ title }) => {

  const item = {
    hidden: { opacity: 0, transform: "scale(0.5)" },
    visible: { opacity: 1, transform: "scale(1)" },
  };

  return (

    <motion.div
      className="p-2 sm:w-1/2 w-full"
      variants={item}
      transition={{ duration: 0.15 }}
    >
      <div className=" border-gray-500 border flex p-4 h-full gap-6 items-center">
        <Book size={32} />
        <span className="title-font font-medium text-white">
          {title}
        </span>
      </div>
    </motion.div>

  );
};

export const Books: FC<BooksProps> = () => {
  const initialState: BookElemProps[] = [
    {
      title: "Иллиада. Одиссея. (Гомер)",
    },
    {
      title: "Музыка Свободного Джаза (Сергей Беличенко)",
    },
    {
      title: "В Страние Водяных (Рюноскэ Акутагава)",
    },
    {
      title: "Майор Гром. Чумной Доктор (части 1-2)",
    },
    {
      title: "Теория Кино. Краткий Путеводитель (Ричард Осборн)",
    },
    {
      title: "Искусство США. Пути национального сознания (Е. Г. Короткевич)",
    },
    {
      title: "Сборник Японской Классической Поэзии",
    },
    {
      title: "Стэнли Кубрик. Сборник (из серии 'лица' журнала Сеанс)",
    },
    {
      title: "Листья Травы (Уолт Уитмен)",
    },
    {
      title: "Планетроника: популярная история электронной музыки (Ник Завриев)",
    },
    {
      title: "Король Лир (Уильям Шекспир в переводе Осии Сороки)",
    },
    {
      title: "Закат Кёнингсберга (Михаэль Вик)",
    },
  ];


  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [books, _] = useState<BookElemProps[]>(initialState);


  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);


  return (
    <Section
      title="Книги"
      description="Те, что купил и планировал прочесть, но они до сих пор пыляться на полке. Любим и скорбим."
    >
      <motion.div
        className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2"
        ref={ref}
        initial={"hidden"}
        animate={controls}
        transition={{
          type: "spring",
          duration: 0.5,
          delay: 0.5,
          staggerChildren: 0.1,
        }} >
        {books?.map((el, index) => (
          <BookElem
            title={el.title}
            key={`movie_${index}`}
          />
        ))}
      </motion.div>
    </Section>
  );
};


