import { Details } from "../components/detail";
import { Services } from "../components/services";
import { motion } from "framer-motion";

export function About() {
    const imgSrc = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80";
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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime aliquam cumque minima, quis vitae libero, nam obcaecati itaque fugiat quod id error magni omnis quae labore voluptate similique cupiditate at.
                </p>
                <p className="text-base md:text-xl font-thin text-gray-400 leading-relaxed">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime aliquam cumque minima, quis vitae libero, nam obcaecati itaque fugiat quod id error magni omnis quae labore voluptate similique cupiditate at.
                </p>
            </div>
        </motion.div>
    );
}