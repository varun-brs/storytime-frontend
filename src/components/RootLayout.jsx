import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import { useSelector } from "react-redux";

const RootLayout = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <>
      {isLoggedIn && <NavigationBar />}
      <Outlet />
    </>
  );
};

export default RootLayout;
