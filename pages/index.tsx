import {getFeaturedEvents} from '../helpers/api-util';
import {Fragment} from "react";
import Hero from "../components/home-pages/hero";
import {GetStaticProps} from "next";
import {getPostContents} from "../helpers/posts-utils";

function HomePage(props) {
  return (
    <Fragment>
      <Hero posts={props.posts}/>
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const posts = getPostContents();
  console.log(posts);

  return {
    props: {
      posts,
    },
    revalidate: 1800,
  };
}

export default HomePage;
