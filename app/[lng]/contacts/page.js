import 'bootstrap/dist/css/bootstrap.min.css';
import '../fonts.css';
import Header from "@/components/Header";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

export default async function ContactsPage({ params }) {
  const { lng } = await params;

  return (
    <div>
        <Header lng={lng} />
        <Contacts lng={lng} />
        <Footer lng={lng} />
    </div>
  );
}
