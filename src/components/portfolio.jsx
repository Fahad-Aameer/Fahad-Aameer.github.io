export function Portfolio(props) {

    return(
        <div className={`pl-4 pt-7 md:pl-8 lg:pl-8 md:pt-14 lg:pt-14 rounded-3xl overflow-hidden transition-all duration-300 ${props.class}`}>
            <div className="text-right mr-7 md:mr-14 lg:mr-14">
                <h3 className="text-xs md:text-sm lg:text-sm font-thin tracking-widest text-gray-50 font-secondary-font">{props.detail}</h3>
                <h2 className="text-lg md:text-xl lg:text-xl font-extrabold text-gray-50 font-secondary-font">{props.work}</h2>
            </div>
            <a href={props.href}><img className="relative top-5 left-5 md:top-7 lg:top-7 md:left-7 lg:left-7 rounded-xl hover:top-3 hover:left-3 md:hover:top-5 md:hover:left-5 lg:hover:top-5 lg:hover:left-5 transition-all duration-300" src={props.src} alt="Portfolio Image" /></a>
        </div>
    );
}