import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts.css';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MainProducts from "@/components/MainProducts";
import WithUs from "@/components/WithUs";
import VideoAndStatistics from "@/components/VideoAndStatistics";

export default async function Home({ params }) {
  const { lng } = await params;

  return (
    <div>
        <Header lng={lng} />
        <Hero lng={lng} />
        <MainProducts lng={lng} />
        <WithUs lng={lng} />
        <VideoAndStatistics lng={lng} />
    </div>
  );
}
