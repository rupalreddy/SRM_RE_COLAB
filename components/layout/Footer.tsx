import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>

            <h2 className="text-3xl font-bold text-blue-400">
              SRM RE-Colab
            </h2>

            <p className="mt-4 text-gray-400 leading-relaxed">
              A modern academic collaboration platform
              connecting faculties, scholars, and researchers
              for innovation and research excellence.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <Link href="#">
                Home
              </Link>

              <Link href="#">
                Features
              </Link>

              <Link href="#">
                Research
              </Link>

              <Link href="#">
                Collaboration
              </Link>

            </div>

          </div>

          {/* Platform */}
          <div>

            <h3 className="text-lg font-semibold mb-4">
              Platform
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <Link href="#">
                Dashboard
              </Link>

              <Link href="#">
                Publications
              </Link>

              <Link href="#">
                Research Feed
              </Link>

              <Link href="#">
                Smart Meetings
              </Link>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-lg font-semibold mb-4">
              Contact
            </h3>

            <div className="space-y-3 text-gray-300">

              <p>
                SRM Institute of Science and Technology
              </p>

              <p>
                support@srmrecolab.com
              </p>

              <p>
                +91 9876543210
              </p>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">

          <p>
            © 2026 SRM RE-Colab. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;