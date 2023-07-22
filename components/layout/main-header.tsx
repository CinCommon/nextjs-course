import Link from 'next/link';

import classes from './main-header.module.css';
import {useTranslation} from "react-i18next";

function MainHeader() {
    const [t] = useTranslation();
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href={'/'}  >
                    Steven' Blog
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href={'/tags'}>
                            <div>{t`header.tags`}</div>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/contact'}>{t`header.contact`}</Link>
                    </li>
                    <li>
                        <Link href={'/posts'}>{t`header.allPosts`}</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainHeader;
