import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const userSchema = Yup.object().shape({
  first_name: Yup.string()
    .required("First Name is required")
    .min(3, "First Name must be at least 3 characters")
    .max(15, "First Name must not exceed 15 characters"),
  last_name: Yup.string()
    .required("Last Name is required")
    .min(3, "Last Name must be at least 3 characters")
    .max(15, "Last Name must not exceed 15 characters"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
});

// initial values
const initialValues = {
  first_name: "John",
  last_name: "Doe",
  email: "johndoe@test.com",
};

const Account = () => {
  const submitHandler = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    setTimeout(() => {
      console.log(values);
      resetForm();
      setSubmitting(false);
    }, 5000);
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={submitHandler}
      >
        {({ isSubmitting }) => (
          <Form>
            <section>
              <div className="max-w-2xl">
                <h3 className="mt-4 mb-4">Personal Info</h3>
                <div className="mb-8">
                  <label className="text-white text-xs mb-3">
                    Email Address
                  </label>
                  <Field
                    type="email"
                    name="email"
                    disabled="true"
                    placeholder="Email Address"
                    className="border-0 border-b outline-none bg-transparent text-sm py-2 w-full border-opacity-25"
                  />
                  <ErrorMessage
                    className="err_msg"
                    name="email"
                    component="div"
                  />
                </div>
                <div className="mb-8">
                  <label className="text-white text-xs mb-3">First Name</label>
                  <Field
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    className="border-0 border-b outline-none bg-transparent text-sm py-2 w-full border-opacity-25"
                  />
                  <ErrorMessage
                    className="err_msg"
                    name="first_name"
                    component="div"
                  />
                </div>
                <div className="mb-8">
                  <label className="text-white text-xs mb-3">Last Name</label>

                  <Field
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    className="border-0 border-b outline-none bg-transparent text-sm py-2 w-full border-opacity-25"
                  />

                  <ErrorMessage
                    className="err_msg"
                    name="last_name"
                    component="div"
                  />
                </div>

                <div className="d-grid gap-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`py-2 px-4 btnPurpleColor ${
                      isSubmitting
                        ? "bg-blue-400 cursor-not-allowed"
                        : "bg-blue-500 hover:bg-blue-700 text-white font-bold"
                    }`}
                  >
                    Update
                  </button>
                </div>
              </div>
            </section>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Account;
