import Navbarmenu from "../components/Navbarmenu"
import { motion } from "framer-motion";

function Contact()
{
    return <>
    <Navbarmenu></Navbarmenu>

    <motion.div
            initial={{ x: -300, scale: 0.5 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 2 }}
          >

    <h1>Contact page</h1>
</motion.div>
    
    </>
}

export default Contact