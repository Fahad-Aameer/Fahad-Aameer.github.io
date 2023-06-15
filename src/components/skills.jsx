import {SkillList} from "./skillList";

export function Skills() {
    const frontFirst = ['HTML', 'CSS', 'Javascript'];
    const frontSecond = ['TailwindCSS', 'Bootstrap', 'React'];
    const backFirst = ['Node.js', 'Express.js', 'MongoDB'];
    const backSecond = ['PHP', 'MySQL', 'Laravel'];

    return (
        <div className="mb-10 mx-10 md:mx-20 lg:mx-20 my-14 md:my-28 lg:my-28">
            <h2 className="text-2xl md:text-4xl lg:text-4xl font-extrabold text-gray-50 font-secondary-font mb-8">My skill highlights.</h2>
                <div className="space-y-10 md:space-y-0 lg:space-y-0 md:flex lg:flex items-center justify-between md:space-x-10 lg:space-x-10">
                    <SkillList topic="Frontend" firstRow = {frontFirst} secondRow={frontSecond} />
                    <SkillList topic="Backend" firstRow = {backFirst} secondRow={backSecond} />
                </div>
        </div>
    );
}