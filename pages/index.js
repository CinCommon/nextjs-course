import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';

function HomePage(props) {
    console.log("HomePage", props)
  const featuredEvents = getFeaturedEvents();

  return (
      <div>
          <h1>{props.time}</h1>
        <EventList items={featuredEvents} />
      </div>
  );
}

export async function getStaticProps() {
    const response = await fetch("https://next-js-course-event-default-rtdb.asia-southeast1.firebasedatabase.app/events.json");
    const json = response.json();
    console.log(json);
    return {
        props: {
            products: [],
            time: new Date().toLocaleTimeString()
        },
        revalidate: 5
    };
}


export default HomePage;
