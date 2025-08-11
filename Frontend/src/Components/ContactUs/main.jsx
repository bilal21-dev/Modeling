import AboutUs from "./aboutUs";
import AboutUs2 from "./AboutUs2";
import Locations from '../Sections/Locations';
import Stats from "./stats";
import ContactSection from '../Sections/ContactSection';

export default function ContactUs() {
  return (
    <main className="min-h-screen">
      <AboutUs />
      <AboutUs2/>
      <Locations/>
      <Stats/>
      <ContactSection />
    </main>
  );
}
