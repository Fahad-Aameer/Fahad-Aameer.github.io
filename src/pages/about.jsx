import { Details } from "../components/detail";
import { Services } from "../components/services";
import { motion } from "framer-motion";

export function About() {
    const imgSrc = "/assets/fahad.jpeg";
    const detail = "I'm a Web Developer working in a start-up in Bengaluru, Karnataka";

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{opacity: 0}}
        >             
            <h1 className="mt-40 text-center text-4xl md:text-8xl lg:text-8xl font-extrabold text-gray-50 font-secondary-font">
                I'm Fahad.
            </h1>
            
            <Details img={imgSrc} detail={detail}/>
            <Services />
            
            <div className="items-center mx-10 md:mx-80 lg:mx-80 md:mt-28 lg:mt-28 mb-8">
                <p className="text-base md:text-xl font-thin text-gray-400 leading-relaxed mb-8">
                    Prior to pursuing a career in programming, I completed my studies 
                    in mechanical engineering. However, I developed a strong interest 
                    in programming and decided to make a transition into the field. 
                    During my final year of mechanical engineering, I began self-teaching 
                    programming and focused on creating various games using the Unity platform.
                </p>
                <p className="text-base md:text-xl font-thin text-gray-400 leading-relaxed">
                    In addition to programming, I have a genuine passion for continuous learning. 
                    I am particularly enthusiastic about technological advancements and aspire 
                    to contribute to their development and implementation.               
                </p>
            </div>
        </motion.div>
    );
}