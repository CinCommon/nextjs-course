import Link from 'next/link';

import classes from './main-header.module.css';
import {useTranslation} from "next-i18next";

function MainHeader() {
    const i18n = useTranslation();
    console.log(i18n);
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Steven' Blog</div>
            <nav>
                <ul>
                    <li>
                        <Link href={'/tags'}>{i18n.t("header.tags")}</Link>
                    </li>
                    <li>
                        <Link href={'/contact'}>Contact</Link>
                    </li>
                    <li>
                        <Link href={'/posts'}>All Posts</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainHeader;
