import { SmoothScroll } from './scrollToTop';
import { HashRouter, NavLink } from 'react-router-dom';
import { AnimatedRoutes } from './AnimatedRoutes';
import { useEffect, useState } from 'react';

export function NavBar() {
    const [scrollClass, setScrollClass] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const scrollThreshold = 50;

            if (scrolled > scrollThreshold) {
                setScrollClass('bg-gray-900/95 rounded-full')
            } else {
                setScrollClass('');
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <HashRouter basename='/'>
        <SmoothScroll>
            <div className={`fixed inset-x-0 mx-auto max-w-max top-10 z-10 ${scrollClass}`}>
                <div className='w-4/5 text-sm md:text-xl lg:text-xl space-x-10 md:space-x-20 lg:space-x-20 text-gray-400 px-12 py-4'>
                    <NavLink to='/' className={({isActive, isPending}) => 
                    isPending ? "hover:text-indigo-400" : isActive ? "text-indigo-400" : ""}>Home</NavLink>
                    <NavLink to='/about' className={({isActive, isPending}) => 
                    isPending ? "hover:text-indigo-400" : isActive ? "text-indigo-400" : ""}>About</NavLink>
                    <NavLink to='/contact' className={({isActive, isPending}) => 
                    isPending ? "hover:text-indigo-400" : isActive ? "text-indigo-400" : ""}>Contact</NavLink>
                </div>
            </div>
            <AnimatedRoutes />
        </SmoothScroll>
      </HashRouter>
    )
}