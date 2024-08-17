import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "../components";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";

function HomeLayout() {
  const navigation = useNavigation();
  const isPageLoading = navigation.state == "loading";

  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <main className="align-elements">
          <Outlet />
        </main>
      )}
    </>
  );
}

export default HomeLayout;
