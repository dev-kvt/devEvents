import Explorebtn from "@/components/Explorebtn";
import EventCard from "@/components/EventCard"; // Capitalized (recommended)
import Image from 'next/image';
import { events } from "@/lib/constants";


const Page = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className=" text-center item-center text-4xl font-semibold">
        Hope-Inn <br /> Events you can't miss
      </h1>
      <p className="text-center text-3xl mt-4  text-gray-600">
        Hackathons, Meetups — All in one Place
      </p>
      <Explorebtn />

      <div className="mt-20 w-full max-w-4xl space-y-7">
        <h3 className="text-2xl font-semibold">Featured Events</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event) => (
            <li key={event.title}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Page;