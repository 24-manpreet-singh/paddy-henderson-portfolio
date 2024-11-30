import { motion } from "framer-motion";
import { memo } from "react";

const icon = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        fill: "(221, 36, 118) 100%"
    }
};

const Loader = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="h-20 w-20 loaderContainer">
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                className="item"
            >
                <motion.path
                    d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
                    variants={icon}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 3, ease: [1, 0, 0.8, 1] }
                    }}
                />
            </motion.svg>
        </div>
    </div >
);

export default memo(Loader);
