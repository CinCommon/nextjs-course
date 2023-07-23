import Link from 'next/link';

import classes from './main-header.module.css';
import {useTranslation} from "react-i18next";
import IconGlobal from "../icons/icon-global";
import {useState} from "react";

function MainHeader() {
    const [t] = useTranslation();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const options = ['Option 1', 'Option 2', 'Option 3'];
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href={'/'}>
                    Steven's Blog
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href={'/tags'}>{t`header.tags`}</Link>
                    </li>
                    <li>
                        <Link href={'/posts'}>{t`header.allPosts`}</Link>
                    </li>
                    <li>
                        <Link href={'/contact'}>{t`header.contact`}</Link>
                    </li>
                    <li>
                        <div className="relative">
                            <button
                                className="text-gray-500 hover:text-gray-900"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <IconGlobal/>
                            </button>

                            {isOpen && (
                                <div className="absolute right-0 w-40 bg-white shadow-md py-2">
                                    {options.map(option => (
                                        <a
                                            key={option}
                                            className="block px-4 py-2 text-gray-600 hover:bg-indigo-500 hover:text-white"
                                        >
                                            {option}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
        ;
}

export default MainHeader;
