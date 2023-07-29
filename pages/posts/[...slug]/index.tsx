import {getPostContent, getPostNames} from "../../../helpers/posts-utils";
import ReactMarkdown from "react-markdown";
import {PostProp} from "../../../props/PostProp";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import React from "react";

const PostDetail: React.FC<PostProp> = ({postProp}: PostProp) => {
    const components = {
        code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
                <SyntaxHighlighter
                    {...props}
                    children={String(children).replace(/\n$/, '')}
                    style={dark}
                    language={match[1]}
                    PreTag="div"
                />
            ) : (
                <code {...props} className={className}>
                    {children}
                </code>
            )
        }
    };
    return <>
        <div className="px-4 py-8 max-w-3xl mx-auto">
            <h1 className="uppercase text-2xl font-bold text-indigo-600">
                {postProp.data?.title}
            </h1>
            <div className="bg-gray-100 p-4 mt-4 rounded-lg">
                <ReactMarkdown
                    components={components}
                >{postProp.content}</ReactMarkdown>
            </div>
        </div>
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

export const getStaticPaths = (context) => {
    const prefixLength = `${process.cwd()}/data/`.length
    const postsNames = getPostNames();
    // .map((postsName: string) => postsName.substring(prefixLength))
    // .map(((value: string) => encodeURI(value)));
    const paths = postsNames.map(name => {
        const slug = name.substring(prefixLength).split('/');
        return {
            params: {slug}
        }
    });
    return {
        paths,
        fallback: false
    }
}

export default PostDetail;
