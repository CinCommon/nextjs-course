import Link from 'next/link';

import classes from './main-header.module.css';

function MainHeader() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Steven' Blog</div>
            <nav>
                <ul>
                    <li>
                        <Link href={'/tags'}>Tags</Link>
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
