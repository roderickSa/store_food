import Principal from "./Principal/Principal";
import Speciality from "./Speciality/Speciality";
import Step from "./Step/Step";
import Gallery from "./Gallery/Gallery";
import Popular from "./Popular/Popular";
import Review from "./Review/Review";
import ScrollTop from "./ScrollTop/ScrollTop";
import Order from "./Order/Order";

const Home = () => {
  return (
    <>
      <Principal />
      <Speciality />
      <Popular />
      <Step />
      <Gallery />
      <Review />
      <Order />
      <ScrollTop />
    </>
  );
};

export default Home;
