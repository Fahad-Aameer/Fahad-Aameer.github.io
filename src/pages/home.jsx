import { Experience } from '../components/experience';
import { Skills } from '../components/skills';
import { motion } from 'framer-motion';

export function Home() {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >        
            <h1 className="mt-40 text-center text-4xl md:text-8xl lg:text-8xl font-extrabold text-gray-50 font-secondary-font">
                Hi. I'm Fahad. <br />
                A Developer.
            </h1>
            <Experience />
            <Skills />
        </motion.div>
    );
}