export function SkillList(props) {
    return(
        <div className="text-gray-400 bg-gray-50/5 ring-1 ring-gray-50/10 rounded-3xl px-2 py-4 md:px-8 md:py-8 lg:px-8 lg:py-8 w-full">
            <h3 className="text-base md:text-xl lg:text-xl font-bold text-gray-50 font-secondary-font ml-6 md:ml-9 mb-6 mt-2">{props.topic}</h3>
            <div className="flex items-center text-xs md:text-lg lg:text-lg font-thin text-gray-400 leading-loose tracking-widest">
                <ul className="custom-list ml-4 md:ml-6 space-y-4">
                    {props.firstRow.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            
                <ul className="custom-list ml-8 md:ml-12 space-y-4">
                    {props.secondRow.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}