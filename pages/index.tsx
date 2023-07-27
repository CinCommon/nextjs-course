import {getFeaturedEvents} from '../helpers/api-util';
import {Fragment} from "react";
import Hero from "../components/home-pages/hero";
import {GetStaticProps} from "next";
import {getPostContents} from "../helpers/posts-utils";
import FeaturedPosts from "../components/posts/featured-posts";

function HomePage(props) {
  return (
    <Fragment>
      <Hero/>
      <FeaturedPosts postProps={props.posts}/>
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const posts = getPostContents();

  return {
    props: {
      posts,
    },
    revalidate: 1800,
  };
}

export default HomePage;
