import classes from './post-item.module.css'
import Link from "next/link";
import Image from "next/image";
import React from "react";
import {PostItemProps} from "../../props/PostProp";

const PostItem: React.FC<PostItemProps> = (props) => {
    const {date, title, excerpt, slug, image} = props.post;

    const formattedDate = new Date(date).toLocaleDateString('en-US');

    const imagePath = `/images/posts/${slug}/${image}`;
    const linkPath = `/posts/${slug}`;

    return (
        <li className={classes.post}>
            <Link href={linkPath}>
                <div className={classes.image}>
                    <Image src={imagePath} alt={title} width={300} height={200} layout="responsive"/>
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <time>{formattedDate}</time>
                    <p>{excerpt}</p>
                </div>
            </Link>
        </li>
    );
};

export default PostItem;
