import {getFeaturedEvents} from '../helpers/api-util';
import {Fragment} from "react";
import Hero from "../components/home-pages/hero";

function HomePage(props) {
  return (
    <Fragment>
      <Hero />
    </Fragment>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
