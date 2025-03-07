import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts.css';
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default async function Home({ params }) {
  const { lng } = await params;

  return (
    <div>
        <Header lng={lng} />
        <Hero lng={lng} />
    </div>
  );
}
