import { Link } from "react-router-dom";
import LibraryList from "../components/LibraryList";

const library = [
  {
    id: 1,
    name: "History",
    url: "https://i.scdn.co/image/ab67656300005f1f973a89728038eec4769d3157",
    publisher: "sam",
  },
  {
    id: 2,
    name: "Stories for kids",
    url: "https://i.scdn.co/image/ab67656300005f1ffcceceed9f257ebbe9591bde",
    publisher: "Kids candle",
  },
  {
    id: 3,
    name: "Tamil audio books",
    url: "https://i.scdn.co/image/4166df29f494ffa171d90410cfcc7759e6f2433f",
    publisher: "jerry",
  },
  {
    id: 4,
    name: "English stories",
    url: "https://i.scdn.co/image/ab67656300005f1fae8ff8070da992ab3ee6f39e",
    publisher: "Le Mai",
  },
  {
    id: 5,
    name: "The Balaji storytime",
    url: "https://i.scdn.co/image/ab67656300005f1f72a4b9f3e4052d86b9cd543c",
    publisher: "Balaji R 4714",
  },
  {
    id: 6,
    name: "The Balaji storytime",
    url: "https://i.scdn.co/image/ab67656300005f1f973a89728038eec4769d3157",
    publisher: "Balaji R 4714",
  },
  {
    id: 7,
    name: "The Balaji storytime",
    url: "https://i.scdn.co/image/4166df29f494ffa171d90410cfcc7759e6f2433f",
    publisher: "Balaji R 4714",
  },
];

const LibraryPage = () => {
  return (
    <div className="container mx-auto px-6 mt-8">
      {library.length === 0 && (
        <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
          <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center mt-7">
              <p className="text-2xl font-semibold md:text-3xl">
                The library is currently empty
              </p>
              <p className="mt-4 mb-8 dark:text-gray-400">
                Find more of the stories among our popular stories.
              </p>
              <Link
                className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
                to="/home"
              >
                Go To Popular Stories
              </Link>
            </div>
          </div>
        </section>
      )}
      {library.length > 0 && <LibraryList library={library} />}
    </div>
  );
};

export default LibraryPage;
