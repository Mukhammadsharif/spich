import 'bootstrap/dist/css/bootstrap.min.css';
import '../fonts.css';
import Header from "@/components/Header";
import WithUs from "@/components/WithUs";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutUs from "@/components/AboutUs";

export default async function Home({ params }) {
  const { lng } = await params;

  return (
    <div>
        <Header lng={lng} />
        <AboutHero lng={lng} />
        <AboutUs lng={lng} />
        <WithUs lng={lng} />
        <Contacts lng={lng} />
        <Footer lng={lng} />
    </div>
  );
}
