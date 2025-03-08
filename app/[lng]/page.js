import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts.css';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MainProducts from "@/components/MainProducts";
import WithUs from "@/components/WithUs";
import VideoAndStatistics from "@/components/VideoAndStatistics";
import News from "@/components/News";
import Questions from "@/components/Questions";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

export default async function Home({ params }) {
  const { lng } = await params;

  return (
    <div>
        <Header lng={lng} />
        <Hero lng={lng} />
        <MainProducts lng={lng} />
        <WithUs lng={lng} />
        <VideoAndStatistics lng={lng} />
        <News lng={lng} />
        <Questions lng={lng} />
        <Contacts lng={lng} />
        <Footer lng={lng} />
    </div>
  );
}
