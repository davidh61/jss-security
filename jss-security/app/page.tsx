import ServicesComponent from "@/components/Services";
import ContactComponent from "@/components/Contact";
import IntroComponent from "@/components/Intro";

export default function Home() {
  return (
    <div> 
      <IntroComponent />

      <ServicesComponent />

      <ContactComponent />
    </div>
  );
}

