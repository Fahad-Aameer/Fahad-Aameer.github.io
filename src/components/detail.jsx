export function Details(props) {
    return (
        <div className="mx-10 my-14 md:mx-44 md:my-28 lg:mx-44 lg:my-28 md:flex lg:flex items-center justify-between space-x-0 md:space-x-20 lg:space-x-20">
            <img className="rounded-3xl w-72 h-80" src={props.img} alt="Fahad's Image" />
            <div className="mt-8">
                <h2 className="text-2xl md:text-4xl md:text-left font-extrabold text-gray-50 font-secondary-font mb-8">{props.detail}</h2>
                <p className="text-base md:text-xl md:text-left font-thin text-gray-400 mb-8 leading-relaxed">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate error ipsam aspernatur incidunt distinctio id eum provident. Quis mollitia beatae numquam? Sunt totam.</p>
                <p className="text-base md:text-xl md:text-left font-thin text-gray-400 mb-8 leading-relaxed">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus labore, debitis nihil dolor facere quis unde.</p>
            </div>
        </div>
    )
}