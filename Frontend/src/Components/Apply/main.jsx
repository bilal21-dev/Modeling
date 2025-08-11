import Apply from "./apply";
import ApplyForm from "./applyForm";
import ContactSection from '../Sections/ContactSection';

export default function ApplyUs() {
  return (
    <main className="min-h-screen">
      <Apply/>
      <ApplyForm/>
      <ContactSection />
    </main>
  );
}