import React from "react";
import { motion } from "framer-motion";

const FramerMotion =({children, delay=0.1})=> {


return (<>

<motion.div
  initial={{ y: 10, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: delay }}
>
  {children}
</motion.div>

</> ) }; export { FramerMotion};