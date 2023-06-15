export function Footer() {
    return(
        <div className="px-10 py-20 md:px-60 md:py-40 lg:px-60 lg:py-40 md:flex lg:flex justify-between">
            <p className="text-center mb-10 md:mb-0 lg:mb-0 text-xs md:text-base lg:text-base font-thin text-gray-400 tracking-widest">© 2023 Fahad Aameer <strong className="text-gray-50/10">•</strong> Made with React</p>
            <div className="flex justify-between lg:justify-between mx-8 md:mx-0 space-x-16 md:space-x-40 lg:space-x-40">
                <div className="space-y-4 md:space-y-6 lg:space-y-6">
                    <h4 className="text-sm md:text-base lg:text-base font-semibold tracking-wide text-gray-50 font-secondary-font">More</h4>
                    <ul className="text-sm md:text-base lg:text-base font-thin tracking-widest text-gray-400 space-y-4 md:space-y-6 lg:space-y-6">
                        <li className="hover:text-indigo-400"><a href="https://drive.google.com/file/d/1vn_vkjkTM5gsePbDIgBIFGgj8WuR9HKP/view?usp=sharing">Read.cv</a></li>
                        <li className="hover:text-indigo-400"><a href="https://github.com/Fahad-Aameer">Github</a></li>
                        <li className="hover:text-indigo-400"><a href="https://fahadaameer.itch.io/">itch.io</a></li>
                    </ul>
                </div>
                <div className="space-y-4 md:space-y-6 lg:space-y-6">
                    <h4 className="text-sm md:text-base lg:text-base font-semibold tracking-wide text-gray-50 font-secondary-font">Contact</h4>
                    <ul className="text-sm md:text-base lg:text-base font-thin tracking-widest text-gray-400 space-y-4 md:space-y-6 lg:space-y-6">
                        <li className="hover:text-indigo-400"><a href="https://twitter.com/FahadAameer">Twitter</a></li>
                        <li className="hover:text-indigo-400"><a href="https://www.linkedin.com/in/fahad-aameer/">Linkedin</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
