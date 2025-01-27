import { Formik, Form } from "formik";
import { useGetLanguagesQuery } from "../store/language/languageApiSlice";
import LoadingSpinner from "../LoadingSpinner";
import { useSelector } from "react-redux";

const Preference = () => {
  const { userData } = useSelector((state) => state.auth);
  const { data: languages, isLoading, error } = useGetLanguagesQuery();
  console.log(languages);

  const handleLanguageClick = (languageId) => {
    console.log(languageId);
  };
  return (
    <div>
      <Formik>
        <Form>
          <h3>Languages</h3>
          <div>
            {languageAPISlice.map((language) => (
              <div key={language._id}>
                <div onClick={handleLanguageClick(language._id)}>
                  <p>{language.name}</p>
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
