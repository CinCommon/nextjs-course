import {PostProp} from "../../props/PostProp";
import {Fragment} from "react";
import Image from "next/image";
import Link from "next/link";

interface FeaturePostsProps {
    postProps: PostProp[]
}

const FeaturedPosts: React.FC<FeaturePostsProps> = (props) => {
    const {postProps} = props;
    return (
        <Fragment>
            <div className="px-[10%] py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {
                        postProps.map(({data, excerpt}) => (
                            <Link key={data?.link} href={data?.link || ''} target={"_blank"}>
                            <div className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden">
                                <Image
                                    className="w-full h-48 object-cover"
                                    width={400}
                                    height={300}
                                    src={"https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}
                                    alt=""
                                />
                                <div className="p-4">
                                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                                        {data?.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm mt-2">
                                        {excerpt}
                                    </p>
                                    <div className="mt-4 flex items-center">
                                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd"
                                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="text-sm text-gray-400 ml-1">{"18 Nov 2022"}</span>
                                    </div>
                                </div>
                            </div>
                            </Link>)
                        )
                    }
                </div>
            </div>
        </Fragment>)
}
export default FeaturedPosts;
