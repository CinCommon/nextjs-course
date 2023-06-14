import { getFeaturedEvents } from '../dummy-data';
import fs from 'fs';
import path from 'path'
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
    const filePath = path.join(process.cwd(), 'data', 'dummy-data.json')
    const dataStr = fs.readFileSync(filePath);
    const data = JSON.parse(dataStr);
    return {
        props: {
            products: data.products,
            time: new Date().toLocaleTimeString()
        },
        revalidate: 5
    };
}


export default HomePage;
