const categories = [
  {
    _id: 1,
    name: "Popular Stories Podcasts",
    keywords: "popular stories podcasts",
  },
  {
    _id: 2,
    name: "Spooky Horror Podcasts",
    keywords: "spooky mystery ghost",
  },
  {
    _id: 3,
    name: "Learn About Indian Mythology",
    keywords: "indian mythology religious history",
  },
  {
    _id: 4,
    name: "Stories and Fairy Tales for Children",
    keywords: "kids stories children stories",
  },
  {
    _id: 5,
    name: "Inspiring Stories from Real People",
    keywords: "motivating exciting interviews podcasts",
  },
  { _id: 6, name: "Podcasts and Shows", keywords: "podcasts shows" },
];

const languages = [
  { _id: 1, code: "ta", name: "Tamil" },
  { _id: 2, code: "en", name: "English" },
  { _id: 3, code: "te", name: "Telugu" },
  { _id: 4, code: "hi", name: "Hindi" },
];

const CategoriesPage = () => {
  return (
    <>
      <div style={{ backgroundColor: "#443280" }}>
        <div className="container mx-auto px-6">
          <section>
            <div className="py-6 rounded-xl mt-5">
              <header className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold tracking-tight text-white hover:underline">
                  Languages
                </h3>
              </header>

              <div className="flex mb-10">
                {languages.map((language) => (
                  <div key={language._id}>
                    <button className="flex bg-white text-black px-3 py-1 rounded-full mr-3">
                      {language.name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 ml-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              <header className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold tracking-tight text-white hover:underline">
                  Catergories
                </h3>
              </header>

              <div className="grid grid-cols-4 gap-x-4 gap-y-4">
                {categories.map((category, index) => {
                  return (
                    <div
                      key={category._id}
                      className={`p-6 rounded-xl hover:bg-active group active h-64 text-3xl flex items-end siraledge category-${
                        index + 1
                      } `}
                    >
                      <button className="text-left">{category.name}</button>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;
