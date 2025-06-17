import Image from "next/image";

export default function Services() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-0"> {/* Added px-4 and md:px-0 */}
      <h1 className="text-3xl font-bold mb-6">
        About Our Security Installation Services
      </h1>

      <p className="mb-4">
        We are a leading security installation firm dedicated to providing
        comprehensive security solutions for homes and businesses. With years of
        experience and a team of highly skilled technicians, we are committed to
        protecting your property and ensuring your peace of mind.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Our Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">Alarm Systems</h3>
          <p>
            We offer a wide range of alarm systems, including wired and wireless
            options, to suit your specific needs. Our alarm systems are equipped
            with advanced features such as motion detectors, door and window
            sensors, and 24/7 monitoring.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Surveillance Cameras</h3>
          <p>
            Our high-definition surveillance cameras provide crystal-clear video
            footage, allowing you to monitor your property remotely. We offer a
            variety of camera types, including indoor, outdoor, and PTZ
            (pan-tilt-zoom) cameras.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Access Control Systems</h3>
          <p>
            Control who enters your property with our advanced access control
            systems. We offer keycard entry, biometric scanners, and keypad
            systems to ensure only authorized personnel can access your premises.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Smart Home Security</h3>
          <p>
            Integrate your security system with your smart home devices for
            seamless control and automation. Our smart home security solutions
            allow you to arm/disarm your system, view camera footage, and control
            door locks from your smartphone.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Our Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Professional Installation</h3>
          <p>
            Our certified technicians provide professional installation services
            to ensure your security system is properly installed and functioning
            optimally. We handle everything from wiring to configuration, so you
            can rest assured your system is in good hands.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">24/7 Monitoring</h3>
          <p>
            Our 24/7 monitoring services provide round-the-clock protection for
            your property. In the event of an alarm, our monitoring center will
            immediately dispatch emergency services to your location.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Maintenance and Repair</h3>
          <p>
            We offer comprehensive maintenance and repair services to keep your
            security system running smoothly. Our technicians are available to
            troubleshoot issues, replace faulty components, and perform routine
            maintenance.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Custom Security Solutions</h3>
          <p>
            We understand that every property is unique, which is why we offer
            custom security solutions tailored to your specific needs. Our
            security experts will work with you to design a system that provides
            the optimal level of protection for your home or business.
          </p>
        </div>
      </div>
    </div>
  );
}
