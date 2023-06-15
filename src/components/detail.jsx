export function Details(props) {
    return (
        <div className="mx-10 my-14 md:mx-44 md:my-28 lg:mx-44 lg:my-28 md:flex md:items-center md:justify-between space-x-0 md:space-x-20 lg:space-x-20">
            <img className="w-auto mx-auto rounded-3xl md:w-72 h-80" src={props.img} alt="Fahad's Image" />
            <div className="mt-8">
                <h2 className="text-2xl md:text-4xl md:text-left font-extrabold text-gray-50 font-secondary-font mb-8">{props.detail}</h2>
                <p className="text-base md:text-xl md:text-left font-thin text-gray-400 mb-8 leading-relaxed">I have spent the last six months building websites with Laravel and other front-end tools. My programming journey started three years ago with Unity game development, but I shifted to web development for career opportunities.</p>
                <p className="text-base md:text-xl md:text-left font-thin text-gray-400 mb-8 leading-relaxed"> Presently, I am fully engaged as a web developer and eagerly 
                    seeking new challenges to enhance my skills and expertise.</p>
            </div>
        </div>
    )
}