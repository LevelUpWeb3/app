import { IconButton } from "@mui/material";
import { motion } from "framer-motion";

const MenuTrigger = (props) => {
  const { isOpen, ...restProps } = props;

  const variants = {
    open: {
      d: "M30 9L33.5 6L37 9",
    },
    closed: {
      d: "M37 6L33.5 9L30 6",
    },
  };
  return (
    <IconButton {...restProps}>
      <svg
        width="38"
        height="14"
        viewBox="0 0 38 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1.5H23M1 7H23M1 12.5H23"
          stroke="#101010"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <motion.path
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          stroke="#101010"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconButton>
  );
};

export default MenuTrigger;
