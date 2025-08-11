import Hire from "./hire";
import HireForm from "./hireForm";
import ContactSection from '../Sections/ContactSection';

export default function ApplyUs() {
  return (
    <main className="min-h-screen">
      <Hire/>
      <HireForm/>
      <ContactSection />
    </main>
  );
}