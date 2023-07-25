import {Fragment} from "react";

import Image from "next/image";

const PostsMainContainer = () => {
    const posts = []

    return (
        <Fragment>
            <div className="grid grid-cols-3 gap-10">
            {
                posts.map(post => (
                    <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
                        <div>
                            <Image
                                width={400}
                                height={300}
                                src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                                className="w-full object-cover" alt=""/>
                        </div>
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"/>
                        <div className="absolute inset-x-0 bottom-0 z-20 p-4">
                            <span
                                className="mb-1 text-sm text-white text-opacity-80"><time>18 Nov 2022</time></span>
                            <h3 className="text-xl font-medium text-white">{post.title}</h3>
                            <span className="mt-1 text-white text-opacity-80">{post.description}</span>
                        </div>
                    </div>)
                )
            }
            </div>
        </Fragment>


    );
};

export default PostsMainContainer;
