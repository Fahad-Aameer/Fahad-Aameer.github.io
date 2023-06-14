import { Portfolio } from "./portfolio"

export function Experience() {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mx-10 md:mx-20 lg:mx-20 my-14 md:my-28 lg:my-28">
            <div>
                <h2 className="text-2xl md:text-4xl lg:text-4xl text-center md:text-left lg:text-left font-extrabold text-gray-50 font-secondary-font mb-8">My work experience and projects.</h2>
                <p className="text-base md:text-xl lg:text-xl text-center md:text-left lg:text-left font-thin text-gray-400 mb-8 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Debitis quo, quidem magnam excepturi nesciunt pariatur ad 
                    praesentium eveniet adipisci dolor recusandae consequatur 
                    illum cum error maiores deleniti vero omnis. Voluptas?</p>
                <a href="https://drive.google.com/file/d/1vn_vkjkTM5gsePbDIgBIFGgj8WuR9HKP/view?usp=sharing" className="block md:inline-block lg:inline-block text-sm md:text-base lg:text-base text-center rounded-full bg-indigo-500 px-6 py-3 font-semibold text-gray-50 shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Download Resume</a>
            </div>

            <Portfolio href="https://github.com/Fahad-Aameer/laravel-cms-project-from-laracasts" src="/assets/portfolio-1.png" class="bg-portfolio-1" detail="Laravel" work="CMS"/>
            <Portfolio href="https://github.com/Fahad-Aameer/weather-api" src="/assets/portfolio-2.png" class="bg-portfolio-1" detail="API" work="Weather"/>
            <Portfolio href="https://github.com/Fahad-Aameer/journal" src="/assets/portfolio-3.png" class="bg-portfolio-1" detail="MongoDB" work="Journal"/>
        </div>
    )
}