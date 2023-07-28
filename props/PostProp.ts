export interface PostProp {
    data: { [key: string]: any }
    content: string
    excerpt?: string
    language?: string
    category?: string[]
}


export interface Post {
    date: string;
    title: string;
    excerpt: string;
    slug: string;
    image: string;
}

export interface PostItemProps {
    post: Post;
}
