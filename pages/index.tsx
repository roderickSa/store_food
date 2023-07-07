import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Home from "@/components/Home/Home";
import Layout from "@/components/Layout/Layout";
import Loader from "@/components/Loader/Loader";

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
