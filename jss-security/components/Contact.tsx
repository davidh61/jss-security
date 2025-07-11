import { Mail } from 'lucide-react';

export default function Contact() {
  return (
      <section id="contact" className="bg-gray-100 py-12 bg-gradient-to-b from-blue-900 to-blue-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
          <p className="text-lg mb-8 text-center">
            We&apos;d love to hear from you! Contact us for inquiries, quotes, or support.
          </p>
          <div className="md:justify-items-center">
            <div className="text-center">
              <div className="flex items-center justify-center md:justify-start">
                <p className="mr-2"><Mail height="20" /></p>
                <p className="text-gray-300">info@jss-security.co.uk</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}