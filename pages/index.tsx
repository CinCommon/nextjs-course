import {getFeaturedEvents} from '../helpers/api-util';
import {Fragment} from "react";
import Hero from "../components/home-pages/hero";
import {GetStaticProps} from "next";
import {getPostContents, getPostNames} from "../helpers/posts-utils";

function HomePage(props) {
  return (
    <Fragment>
      <Hero />
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPostContents();
  console.log('getStaticProps:', posts)

  return {
    props: {
      posts: [],
    },
    revalidate: 1800,
  };
}

export default HomePage;
