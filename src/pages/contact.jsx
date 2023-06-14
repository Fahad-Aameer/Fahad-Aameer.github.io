import { Address } from "../components/address";
import { Form } from "../components/form";
import { motion } from "framer-motion";

export function Contact() {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{opacity: 0}}
        >  
            <div className="mt-40 mx-10 space-x-0 space-y-10 md:space-y-0 md:mt-48 md:mx-20 md:flex items-center justify-between md:space-x-20">
                <Address />
                <Form />                
            </div>
        </motion.div>
    );
}