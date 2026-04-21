import { motion } from "framer-motion";

const BasketballSVG = () => (
  <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="36" cy="36" r="35" fill="#D85A30" stroke="#993C1D" strokeWidth="1.5" />
    <path d="M36 1 C36 1 36 71 36 71" stroke="#6B2410" strokeWidth="2" strokeLinecap="round" />
    <path d="M1 36 C1 36 71 36 71 36" stroke="#6B2410" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 14 C20 22 26 36 24 52" stroke="#6B2410" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <path d="M64 14 C52 22 46 36 48 52" stroke="#6B2410" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <circle cx="36" cy="36" r="35" fill="none" stroke="#993C1D" strokeWidth="1.5" />
  </svg>
);

interface BasketballLoaderProps {
  /** When true, shows the loader; when false, reveals children */
  isLoading: boolean;
  /** Content to reveal after loading */
  children?: React.ReactNode;
  /** Label shown under the ball */
  label?: string;
}

export function BasketballLoader({
  isLoading,
  children,
  label = "Chargement",
}: BasketballLoaderProps) {
  return (
    <>
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-12 gap-6">
          {/* Ball + shadow stage */}
          <div className="relative w-[100px] h-[140px] flex flex-col items-center justify-end">
            {/* Ball */}
            <motion.div
              className="absolute top-0 w-[72px] h-[72px]"
              animate={{ y: [0, 62], scaleX: [1, 1.18], scaleY: [1, 0.82] }}
              transition={{
                duration: 0.72,
                repeat: Infinity,
                repeatType: "mirror",
                ease: [0.33, 0, 0.66, 0],
              }}
            >
              <BasketballSVG />
            </motion.div>

            {/* Shadow */}
            <motion.div
              className="absolute bottom-0 w-[50px] h-[10px] rounded-full bg-black"
              style={{ originX: "50%", originY: "50%" }}
              animate={{ scaleX: [0.55, 1], opacity: [0.06, 0.14] }}
              transition={{
                duration: 0.72,
                repeat: Infinity,
                repeatType: "mirror",
                ease: [0.33, 0, 0.66, 0],
              }}
            />
          </div>

          {/* Label + dots */}
          <motion.div
            className="flex items-center gap-1 text-muted-foreground tracking-widest"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "18px" }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.44, repeat: Infinity, ease: "easeInOut" }}
          >
            {label}
            <span className="flex items-center gap-[3px] ml-1">
              {[0, 0.24, 0.48].map((delay, i) => (
                <motion.span
                  key={i}
                  className="block w-1 h-1 rounded-full bg-current"
                  animate={{ y: [0, -4, 0], opacity: [0, 1, 0] }}
                  transition={{
                    duration: 1.44,
                    repeat: Infinity,
                    delay,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </span>
          </motion.div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}