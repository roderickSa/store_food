import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import Home from "@/src/components/Home/Home";
import Layout from "@/src/components/Layout/Layout";
import Loader from "@/src/components/Loader/Loader";

export default function Index() {
  return (
    <Layout>
      <Header />
      <Home />
      <Footer />
      <Loader />
    </Layout>
  );
}
