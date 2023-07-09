import {getFeaturedEvents} from '../helpers/api-util';
import {Fragment} from "react";
import Hero from "../components/home-pages/hero";
import {GetStaticProps} from "next";

function HomePage(props) {
  return (
    <Fragment>
      <Hero />
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
