export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

        <p className="text-lg text-gray-300 mb-8 text-center">
          We&apos;re eager to hear from you! Whether you have questions about our services, need a custom security solution, or just want to learn more, please don&apos;t hesitate to reach out. Our team is ready to assist you with any inquiries.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center mb-8 gap-4">
          <a
            href="tel:+15551234567"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-green-500 text-white hover:bg-green-500/90 h-10 px-4 py-2"
          >
            Call Us: +1 (555) 123-4567
          </a>
          <a
            href="mailto:info@jss-security.co.uk"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-500 text-white hover:bg-blue-500/90 h-10 px-4 py-2"
          >
            Email Us: info@jss-security.co.uk
          </a>
        </div>
      </div>
    </div>
  );
}