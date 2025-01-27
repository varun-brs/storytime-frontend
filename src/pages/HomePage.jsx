import { useDispatch } from "react-redux";
import ImageBanner from "../components/home/ImageBanner";
import PopularStories from "../components/home/PopularStories";
import ShowsOfWeek from "../components/home/ShowsOfWeek";
import TopStories from "../components/home/TopStories";
import { setUserProfile } from "../store/user/authSlice";
import { useGetUserProfileAPIQuery } from "../store/user/userApiSlice";

const popularStoryList = [
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
];
const topStoryList = [
  {
    id: 1,
    name: "History",
    url: "https://i.scdn.co/image/ab6765630000ba8a0e269ca9fbb2c081d1f10e3c",
    publisher: "sam",
  },
  {
    id: 2,
    name: "Stories for kids",
    url: "https://i.scdn.co/image/ab67656300005f1f72a4b9f3e4052d86b9cd543c",
    publisher: "Kids candle",
  },
  {
    id: 3,
    name: "Tamil audio books",
    url: "https://i.scdn.co/image/ab67656300005f1f8480d07747057bc68c4ba083",
    publisher: "jerry",
  },
  {
    id: 3,
    name: "Tamil audio books",
    url: "https://i.scdn.co/image/ab67656300005f1f0f36d691418a89022e69ab24",
    publisher: "jerry",
  },
];
const showsOfWeekList = [
  {
    id: 1,
    name: "History",
    url: "https://i.scdn.co/image/ab6765630000ba8a0e269ca9fbb2c081d1f10e3c",
    publisher: "sam",
  },
  {
    id: 2,
    name: "Stories for kids",
    url: "https://i.scdn.co/image/ab67656300005f1f8480d07747057bc68c4ba083",
    publisher: "Kids candle",
  },
  {
    id: 3,
    name: "History",
    url: "https://i.scdn.co/image/ab67656300005f1f973a89728038eec4769d3157",
    publisher: "sam",
  },
];

const HomePage = () => {
  const dispatch = useDispatch();
  const { data } = useGetUserProfileAPIQuery();
  console.log(data);
  if (data) {
    dispatch(setUserProfile({ ...data }));
  }
  return (
    <div className="container mx-auto p-2">
      <ImageBanner />

      <section>
        <div className="container mx-auto">
          <div>
            <header className="flex items-center justify-between mb-2 mt-6">
              <div className="text-2xl text-white font-semibold tracking-tight hover:underline hover:cursor-pointer">
                Popular
              </div>

              <div className="text-xs hover:underline font-semibold uppercase text-link tracking-wider hover:cursor-pointer">
                SEE ALL
              </div>
            </header>

            <PopularStories stories={popularStoryList} />
          </div>

          <div>
            <header className="flex items-center justify-between mb-2">
              <div className="text-2xl text-white font-semibold tracking-tight hover:underline hover:cursor-pointer">
                Top Stories & Podcasts
              </div>

              <div className="text-xs hover:underline font-semibold uppercase text-link tracking-wider hover:cursor-pointer">
                SEE ALL
              </div>
            </header>
            <TopStories stories={topStoryList} />
          </div>

          <div>
            <header className="flex items-center justify-between mb-2">
              <div className="text-2xl text-white font-semibold tracking-tight hover:underline hover:cursor-pointer">
                Shows of the week
              </div>

              <div className="text-xs hover:underline font-semibold uppercase text-link tracking-wider hover:cursor-pointer">
                SEE ALL
              </div>
            </header>
            <ShowsOfWeek stories={showsOfWeekList} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
