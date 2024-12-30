import { FC, useRef, useEffect } from "react";
import { SectionProps } from "@/models";
import { motion, useAnimation, useInView } from "motion/react";

export const Section: FC<SectionProps> = ({ children, title, description }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section className="body-font w-full">
      <div className="container py-24 mx-auto">
        <div className="flex flex-col text-left w-full mb-20 px-4">
          <motion.h1
            ref={ref}
            initial={"hidden"}
            animate={controls}
            variants={{
              visible: { transform: "translateY(0px)", opacity: 1 },
              hidden: { transform: "translateY(-50px)", opacity: 0 },
            }}
            transition={{ type: "spring", duration: 1 }}
            className="sm:text-3xl text-2xl font-bold title-font mb-4 text-white uppercase"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              ref={ref}
              initial={"hidden"}
              animate={controls}
              variants={{
                visible: { transform: "translateY(0px)", opacity: 1 },
                hidden: { transform: "translateY(-50px)", opacity: 0 },
              }}
              transition={{ type: "spring", duration: 1, delay: 0.5 }}
              className="lg:w-3/3 leading-relaxed font-thin text-xl"
            >
              {description}
            </motion.p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};
