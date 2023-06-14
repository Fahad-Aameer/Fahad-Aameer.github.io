export function SkillList(props) {
    return(
        <div className="text-gray-400 bg-gray-50/5 ring-1 ring-gray-50/10 rounded-3xl px-2 py-4 md:px-8 md:py-8 lg:px-8 lg:py-8 w-full">
            <h3 className="text-base md:text-xl lg:text-xl font-bold text-gray-50 font-secondary-font ml-3 mb-4">{props.topic}</h3>
            <table className="text-xs md:text-lg lg:text-lg font-thin text-gray-400 leading-loose tracking-widest">
                <tr>
                    <td>
                        <ul className="custom-list mr-2 md:mr-20 lg:mr-20">
                            {props.firstRow.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </td>
                    <td>
                        <ul className="custom-list mr-2 md:mr-20 lg:mr-20">
                            {props.secondRow.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </td>
                </tr>
            </table>
        </div>
    )
}