import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from "framer-motion"
import { FaInstagram } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const Nav = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        function handleRouteChange() {
            setOpen(false);
        }

        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        }
    }, [])

    return (
        <>
            <nav className="fixed z-50 top-0 left-0 bg-gray-300 border-b border-gray-800 w-screen h-16 flex justify-between">
                <ul className="h-full flex">
                    <Link href='/'>
                        <li role='button' className={`${router.pathname === '/' ? 'bg-gray-800 hover:bg-gray-900' : 'bg-gray-300 hover:bg-gray-400'} flex items-center px-6 pt-1 border-r border-gray-800 transition-all`}>
                                <a>
                                    <Image className="mix-blend-exclusion" src='/logo_w.svg' alt='Felix Bahr Logo' width={24} height={30}/>
                                </a>
                        </li>
                    </Link>
                    <Link href='/work'>
                        <li role='button' className={`${router.pathname === '/work' || router.pathname === '/work/[slug]' ? 'bg-gray-800 text-gray-300 hover:bg-gray-900' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'} flex items-center px-8 border-r border-gray-800 transition-all sm:hidden`}>
                                <a className="font-button">WORK</a>
                        </li>
                    </Link>
                    <Link href='/about'>
                        <li role='button' className={`${router.pathname === '/about' ? 'bg-gray-800 text-gray-300 hover:bg-gray-900' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'} flex items-center px-8 border-r border-gray-800 transition-all sm:hidden`}>
                                <a className="font-button">ABOUT</a>
                        </li>
                    </Link>
                </ul>
                <ul className="h-full flex">
                    <li role='button' className="flex items-center px-6 border-r border-l border-gray-800 hover:bg-gray-400 transition-all sm:hidden">
                        <a href='https://github.com/bhrflx' target='blank'>
                            <FaGithub size={25} style={{color: '#262626'}}/>
                        </a>
                    </li>
                    <li role='button' className="flex items-center px-6 border-r border-gray-800 hover:bg-gray-400 transition-all sm:hidden">
                        <a href='https://www.instagram.com/bhrflx/' target='blank'>
                            <FaInstagram size={25} style={{color: '#262626'}}/>
                        </a>
                    </li>
                    <li role='button' className="flex items-center px-6 border-r border-gray-800 hover:bg-gray-400 transition-all sm:hidden">
                        <a href='mailto:felix.bahr@kabelmail.de'>
                            <FiMail size={25} style={{color: '#262626'}}/>
                        </a>
                    </li>
                    <li role='button' onClick={() => setOpen(prevOpen => !prevOpen)} className="hidden sm:flex sm:items-center px-6 border-l border-gray-800 active:bg-gray-400 transition-all">
                        <button className="font-button focus:outline-none">MENU</button>
                    </li>
                </ul>
            </nav>
            <AnimatePresence>
                {open && <motion.div 
                    key="mobileNav"
                    initial={{ y: -300, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -300, opacity: 0 }}
                    className="fixed z-40 top-0 left-0 w-screen flex flex-col items-center">
                    <ul className="w-full pt-16 flex flex-col items-center bg-gray-300 shadow-xl">
                        <Link href='/work'>
                            <li role='button' className="w-full text-gray-800 text-center text-xl font-button py-10 border-b border-gray-800 active:bg-gray-500">
                                    <a className="font-button">WORK</a>
                            </li>
                        </Link>
                        <Link href='/about'>
                            <li role='button' className="w-full text-gray-800 text-center text-xl font-button py-10 border-b border-gray-800 active:bg-gray-500">
                                    <a className="font-button">ABOUT</a>
                            </li>
                        </Link>
                        <ul className="flex flex-row items-center py-10">
                            <li role='button' className="flex items-center px-5">
                                <a href='https://github.com/bhrflx' target='blank'>
                                    <FaGithub size={25} style={{color: '#262626'}}/>
                                </a>
                            </li>
                            <li role='button' className="flex items-center px-5">
                                <a href='https://www.instagram.com/bhrflx/' target='blank'>
                                    <FaInstagram size={25} style={{color: '#262626'}}/>
                                </a>
                            </li>
                            <li role='button' className="flex items-center px-5">
                                <a href='mailto:felix.bahr@kabelmail.de'>
                                    <FiMail size={25} style={{color: '#262626'}}/>
                                </a>
                            </li>
                        </ul>
                    </ul>
                    <div onClick={() => setOpen(false)} className="w-full h-screen z-30"/>
                </motion.div>}
            </AnimatePresence>
        </>
    )
}

export default Nav
