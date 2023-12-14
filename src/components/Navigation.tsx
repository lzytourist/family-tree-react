import Link from "next/link";
import React, {useState} from "react";
import Image from "next/image";


export default function Navigation() {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    const links: Array<Object> = [
        {
            name: 'Dashboard',
            path: '/dashboard'
        },
        {
            name: 'Logout',
            path: '/dashboard/logout'
        },
        {
            name: 'Family Members',
            path: '/dashboard/members'
        }
    ]

    // @ts-ignore
    // @ts-ignore
    return (
        <nav className="bg-primary p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-white text-2xl font-light">
                    <Image src={'/logo.png'} alt={'logo'} width={100} height={40} />
                </Link>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        onClick={toggleDrawer}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex">
                    {
                        links.map((link: Object) => (
                            <li key={link.path} className={'list-item list-none'}>
                                <Link
                                    className={'text-white py-5 px-3 hover:bg-primary-foreground hover:text-primary'}
                                    href={link.path}>{link.name}</Link>
                            </li>
                        ))
                    }
                </div>
            </div>

            {/* Navigation Drawer */}
            <div
                className={`lg:hidden fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-lg transform transition-transform ease-in-out duration-300 ${
                    isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                {/* Close Button */}
                <div className="flex justify-end p-4">
                    <button
                        onClick={toggleDrawer}
                        className="text-gray-500 focus:outline-none"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                </div>

                {/* Drawer Content */}
                <div className="p-4">
                    <a href="#" className="block text-gray-800 mb-2">
                        Home
                    </a>
                    <a href="#" className="block text-gray-800 mb-2">
                        About
                    </a>
                    <a href="#" className="block text-gray-800 mb-2">
                        Services
                    </a>
                    <a href="#" className="block text-gray-800">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    )
}