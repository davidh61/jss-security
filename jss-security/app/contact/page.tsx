import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <ContactForm />
    </div>
  );
}