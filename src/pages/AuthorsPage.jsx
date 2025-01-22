import AuthorsList from "../components/authors/AuthorsList";
const authorsList = [
  {
    id: 1,
    url: "https://i.scdn.co/image/ab67656300005f1f973a89728038eec4769d3157",
    name: "Sam",
  },
  {
    id: 2,
    url: "https://i.scdn.co/image/ab67656300005f1ffcceceed9f257ebbe9591bde",
    name: "Kids candle",
  },
  {
    id: 3,
    url: "https://i.scdn.co/image/4166df29f494ffa171d90410cfcc7759e6f2433f",
    name: "Jerry",
  },
  {
    id: 4,
    url: "https://i.scdn.co/image/ab67656300005f1fae8ff8070da992ab3ee6f39e",
    name: "Le Mai",
  },
  {
    id: 5,
    url: "https://i.scdn.co/image/ab67656300005f1f72a4b9f3e4052d86b9cd543c",
    name: "Balaji R 4714",
  },
  {
    id: 6,
    url: "https://i.scdn.co/image/ab67656300005f1f973a89728038eec4769d3157",
    name: "Balaji R 4714",
  },
  {
    id: 7,
    url: "https://i.scdn.co/image/ab67656300005f1fae8ff8070da992ab3ee6f39e",
    name: "Le Mai",
  },
  {
    id: 8,
    url: "https://i.scdn.co/image/ab67656300005f1f72a4b9f3e4052d86b9cd543c",
    name: "Balaji R 4714",
  },
  {
    id: 9,
    url: "https://i.scdn.co/image/ab67656300005f1f973a89728038eec4769d3157",
    name: "Sam",
  },
  {
    id: 10,
    url: "https://i.scdn.co/image/4166df29f494ffa171d90410cfcc7759e6f2433f",
    name: "Jerry",
  },
  {
    id: 11,
    url: "https://i.scdn.co/image/ab67656300005f1fae8ff8070da992ab3ee6f39e",
    name: "Le Mai",
  },
];

const AuthorsPage = () => {
  return (
    <div className="container mx-auto mt-5 px-5">
      <AuthorsList authors={authorsList} />
    </div>
  );
};

export default AuthorsPage;
