import { useRef } from "react"
import emailjs from '@emailjs/browser';

export function Form() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bfdesum', 'template_4ezkh7u', form.current, 'k2mD8E4J0QmOFsplv')
        .then((result) => {
            console.log(result.text);
            alert("Message successfully sent.")
            window.location.reload(false);
            
        }, (error) => {
            console.log(error.text);
            alert("Oops! Something went wrong, please try again.")
        });
    };

    return(
        <div className="md:w-2/4 bg-gray-50/5 ring-1 ring-gray-50/10 rounded-3xl px-6 py-6 md:px-12 md:py-12">
            <form ref={form} onSubmit={sendEmail} className="space-y-3 md:space-y-6">
                <div>
                    <label for="user_name" class="mb-1 md:mb-2.5 block text-xs md:text-sm font-semibold leading-6 text-gray-50 font-secondary-font">Your name</label>
                    <input name="user_name" required type="text" className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 focus:outline-none"/>
                </div>
                <div>
                    <label for="user_email" class="mb-1 md:mb-2.5 block text-xs md:text-sm font-semibold leading-6 text-gray-50 font-secondary-font">Email</label>
                    <input name="user_email" required type="email" className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 focus:outline-none"/>
                </div>
                <div>
                    <label for="message" class="mb-1 md:mb-2.5 block text-xs md:text-sm font-semibold leading-6 text-gray-50 font-secondary-font">Message</label>
                    <textarea name="message" required className="mb-2 block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 focus:outline-none" id="" cols="30" rows="4"></textarea>
                </div>
                <input type="submit" value="Send message" className="w-full md:w-auto items-center flex-none rounded-full bg-indigo-500 px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-semibold text-gray-50 shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"/>
            </form>
        </div>
    )
}