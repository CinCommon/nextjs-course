import Head from 'next/head';
import {getFileRelativePath, getPostContent, getPostNames} from "../../../helpers/posts-utils";
import {PostProp} from "../../../props/PostProp";
import React from "react";
import PostContent from "@/components/posts/post-content";

interface PostDetailProps {
    postProp: PostProp
}

const PostDetail: React.FC<PostDetailProps> = ({postProp}: PostDetailProps) => {
    return <>
        <Head>
        <title>{postProp.data?.title}</title>
        <meta name='description' content={postProp.excerpt} />
        </Head>
        <div className="px-4 py-8 max-w-3xl mx-auto">
            <h1 className="uppercase text-2xl font-bold text-indigo-600">
                {postProp.data?.title}
            </h1>
        </div>
        <PostContent postProp={postProp}/>
    </>;
}

export const getStaticProps = (context) => {
    const filePath = context.params.slug.join('/');
    const postProp = getPostContent(`${process.cwd()}/data/${filePath}`);
    return {
        props: {
            postProp
        }
    }
}

export const getStaticPaths = () => {
    const prefixLength = `${process.cwd()}/data/`.length
    const postsNames = getPostNames();
    const paths = postsNames.map(name => {
        return {
            params: {slug: getFileRelativePath(name, prefixLength).split('/')}
        }
    });
    return {
        paths,
        fallback: false
    }
}

export default PostDetail;
