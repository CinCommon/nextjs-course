import { PostProp } from "@/props/PostProp";
import ReactMarkdown from "react-markdown";
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import classes from './post-content.module.css';

interface PostContentProps {
    postProp: PostProp
}

const PostContent: React.FC<PostContentProps> = ({ postProp }) => {
    const components = {
        p(paragraph) {
            const { node } = paragraph;

            if (node.children[0].tagName === 'img') {
                const image = node.children[0];

                return (
                    <div className={classes.image}>
                        <Image
                            src={`../assets/${image.properties.src}`}
                            alt={image.alt}
                            width={600}
                            height={300}
                        />
                    </div>
                );
            }
            return <p>{paragraph.children}</p>;
        },
        code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
                <SyntaxHighlighter
                    {...props}
                    children={String(children).replace(/\n$/, '')}
                    style={atomDark}
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

    return (
        <article className={classes.content}>
            <ReactMarkdown components={components}>{postProp.content}</ReactMarkdown>
        </article>
    );
};

export default PostContent;