import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RootLayout = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <>
      {isLoggedIn && <NavigationBar />}
      <ToastContainer limit={1} />
      <Outlet />
    </>
  );
};

export default RootLayout;
