import { Formik, Form } from "formik";

const languages = [
  { _id: 1, code: "ta", name: "Tamil" },
  { _id: 2, code: "en", name: "English" },
  { _id: 3, code: "te", name: "Telugu" },
  { _id: 4, code: "hi", name: "Hindi" },
];

const Preference = () => {
  return (
    <div>
      <Formik>
        <Form>
          <h3 className="text-2xl text-white font-semibold tracking-tight">
            Languages
          </h3>

          <div className="grid grid-cols-6 gap-x-6 gap-y-6 mt-3">
            {languages.map((language) => (
              <div key={language._id}>
                <div className="bg-transperent border p-4 rounded-lg hover:bg-active group active text-center">
                  <p className="line-clamp-2 text-link text-xl mt-1">
                    {language.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Preference;
