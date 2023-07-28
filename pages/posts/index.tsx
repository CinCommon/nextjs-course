import React from "react";
import Image from "next/image";

interface PostsProps {

}

const Posts: React.FC<PostsProps> = () => {
    return (
        <h1>
            <div className="max-w-sm mx-auto overflow-hidden rounded shadow-lg">
                <Image
                    className="w-full"
                    width={400}
                    height={300}
                    src={"https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}
                    alt=""
                />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Title</div>
                    <p className="text-gray-700 text-base">Description here.</p>
                    <p className="text-gray-500 text-sm">Posted on: July 28, 2023</p>
                </div>
            </div>
        </h1>
    );
};

export default Posts;
