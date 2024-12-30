import { OtherElemProps, OtherProps } from "@/models";
import { FC, useEffect, useRef, useState } from "react";
import { AnimatedNumber } from "./AnimatedNumbers";
import { Section } from "./Sections";
import {
  CameraIcon,
  ComponentIcon,
  FileAudio2Icon,
  Music2Icon,
} from "lucide-react";
import { motion, useAnimation, useInView } from "motion/react";

const OtherElem: FC<OtherElemProps> = ({ icon, title, value }) => {
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

export const Others: FC<OtherProps> = () => {
  const initialState: OtherElemProps[] = [
    {
      title: "Необработанных фото",
      icon: <CameraIcon size={48} />,
      value: 1261,
    },
    {
      title: "Брошенных плейлистов в Spotify",
      icon: <FileAudio2Icon size={48} />,
      value: 97,
    },
    {
      title: "Незаконченных игр",
      icon: <ComponentIcon size={48} />,
      value: 75,
    },

    {
      title: "Невыпущенных музыкальных композиций",
      icon: <Music2Icon size={48} />,
      value: 52,
    },
  ];

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [other, _] = useState<OtherElemProps[]>(initialState);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <Section title="Другое" description="... и ничто не забыто.">
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
        {other.map((el, index) => (
          <OtherElem
            icon={el.icon}
            title={el.title}
            value={el.value}
            key={`other_${index}`}
          />
        ))}
      </motion.div>
    </Section>
  );
};
