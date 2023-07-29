
const PostDetail = (params) => {
    console.log(params);
    return <div>My Post: </div>
}

export const getStaticProps = (context) => {
    console.log('getStaticProps', context);

    return {
        props: {

        }
    }
}

export const getStaticPaths = (context) => {
    console.log('getStaticPaths', context);

    return {
        paths: [],
        fallback: true
    }
}

export default PostDetail;
