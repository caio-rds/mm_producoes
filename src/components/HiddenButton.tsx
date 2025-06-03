import { motion } from "framer-motion";

import type { HiddenButtonProps } from "../@types";

const HiddenButton = (props: HiddenButtonProps) => {
    return (
        <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.85 }}
            className={`relative flex items-center justify-center w-fit max-w-[200px] h-12 p-4 rounded-lg shadow-md transition duration-300 ease-in-out 
            ${props.isOpen ? "bg-opacity-100" : "bg-opacity-0"}
            ${props.theme ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}
            `}
            onClick={() => {props.onClick()}}
        >
            {props.icon}
            {props.isOpen && props.label}
        </motion.button>
    );
};

export default HiddenButton;