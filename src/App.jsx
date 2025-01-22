import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import RootLayout from "./components/RootLayout";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ProfilePage from "./pages/ProfilePage";
import CategoriesPage from "./pages/CategoriesPage";
import ErrorPage from "./pages/ErrorPage";
import AuthorsPage from "./pages/AuthorsPage";
import LibraryPage from "./pages/LibraryPage";
import AuthorStoriesPage from "./pages/AuthorStoriesPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import EamilVerifyPage from "./pages/EamilVerifyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LoginPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/forgotpassword", element: <ForgotPasswordPage /> },
      { path: "/resetpassword/:token", element: <ResetPasswordPage /> },
      { path: "/verifyemail/:verifytoken", element: <EamilVerifyPage /> },

      {
        element: <ProtectedRoutes />,
        children: [
          { path: "/home", element: <HomePage /> },
          { path: "/profile", element: <ProfilePage /> },
          { path: "/categories", element: <CategoriesPage /> },
          { path: "/authors", element: <AuthorsPage /> },
          { path: "/authorstories", element: <AuthorStoriesPage /> },
          { path: "/library", element: <LibraryPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
