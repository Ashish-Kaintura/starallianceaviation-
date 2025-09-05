import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-6 pt-32">
      <Helmet>
        <title></title>
        <meta name="description" content="" />
        <link rel="canonical" href="" />
      </Helmet>
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-10 relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-200 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-200 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-pulse"></div>

        {/* Title */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-center text-Secondary mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Terms & Conditions
        </motion.h1>

        {/* Content */}
        <div className="space-y-8 text-gray-700 leading-relaxed relative z-10">
          <section>
            <h2 className="text-xl font-semibold text-primary mb-2 font-heading">
              Definitions
            </h2>
            <p className="font-sans">
              “Star Alliance Aviation Academy ” (“we,” “us,” “our”) refers to
              the aviation training institute located in New Delhi, India.
            </p>
            <p className="mt-3">
              “You” or “Participant” refers to any individual accessing or using
              our website or enrolling in one of our training programs.
            </p>
            <p className="mt-3">
              “Services” refers to any programs or courses offered by the
              Academy, including cabin crew training, aviation management,
              travel & tourism, and hospitality management.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2 font-heading">
              Acceptance of Terms
            </h2>
            <p className="font-sans">
              By using our website or enrolling in our services, you agree to
              abide by these Terms &amp; Conditions, including any updates that
              we may publish from time to time. Continued use indicates
              acceptance of any revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2 font-heading">
              Use of Website & Services
            </h2>
            <p className="font-sans">
              You may use our website and services solely for lawful, personal,
              non-commercial purposes. Misuse—including unauthorized access,
              copying, scraping, or infringement of intellectual property—is
              strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2 font-heading">
              Payment, Fees & Refunds
            </h2>
            <p className="font-sans">
              Course fees must be paid according to the instructions provided
              during enrollment.
            </p>
            <p className="mt-3">
              Any specific payment schedules, additional fees (e.g., for course
              updates or rescheduling), refunds, or cancellation policies will
              be clearly communicated during the enrollment process or via
              dedicated policy pages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2 font-heading">
              Intellectual Property
            </h2>
            <p className="font-sans">
              All content, materials, branding, and course resources offered by
              the Academy remain our exclusive property. You are granted a
              limited, non-exclusive license to use them only for personal
              educational purposes. Any unauthorized use, distribution, or
              reproduction is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2 font-heading">
              Participant Conduct
            </h2>
            <p className="font-sans">
              Participants are expected to conduct themselves professionally and
              respectfully during training. Any misconduct, such as harassment,
              fraud, or disruptive behavior, may result in disciplinary action,
              up to and including termination of services without refund.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2 font-heading">
              Disclaimers & Limitations of Liability
            </h2>
            <p className="font-sans">
              Our services and website are provided “as is.” While we strive for
              accuracy and reliability, we make no warranties—express or
              implied—about the completeness, security, or suitability for a
              particular purpose. We are not liable for any indirect,
              incidental, or consequential losses arising from your use of our
              services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2 font-heading">
              Governing Law
            </h2>
            <p className="font-sans">
              These Terms are governed by the laws of India. Any disputes
              arising from or related to these Terms will be subject to the
              exclusive jurisdiction of the courts in New Delhi.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2 font-heading">
              Modifications to Terms
            </h2>
            <p className="font-sans">
              We reserve the right to update these terms at any time. Revisions
              will become effective immediately upon posting to our website. It
              is your responsibility to review this page regularly. Continued
              use of our website or services after changes indicates your
              acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2 font-heading">
              Links to Third-Party Websites
            </h2>
            <p className="font-sans">
              Our website may include links to third-party websites. These links
              are provided for convenience only; we do not endorse, and are not
              responsible for, their content, policies, or practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2 font-heading">
              Privacy Policy
            </h2>
            <p className="font-sans">
              Your use of our services is also governed by our Privacy Policy,
              which describes how we collect and process personal information.
              Please review it to understand your rights and our practices
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
              Summary Table
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 border-b border-gray-200">
                      Section
                    </th>
                    <th className="text-left p-3 border-b border-gray-200">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border-b border-gray-200">
                      Definitions
                    </td>
                    <td className="p-3 border-b border-gray-200">
                      Clarifies key terms like "Participant" and "Services"
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border-b border-gray-200">
                      Acceptance of Terms
                    </td>
                    <td className="p-3 border-b border-gray-200">
                      Your consent is assumed through usage
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border-b border-gray-200">
                      Use of Website & Services
                    </td>
                    <td className="p-3 border-b border-gray-200">
                      Restricted to personal, lawful use
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border-b border-gray-200">
                      Payment & Refunds
                    </td>
                    <td className="p-3 border-b border-gray-200">
                      Governed by communicated enrollment policies
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border-b border-gray-200">
                      Intellectual Property
                    </td>
                    <td className="p-3 border-b border-gray-200">
                      Protects our content and resources
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border-b border-gray-200">
                      Participant Conduct
                    </td>
                    <td className="p-3 border-b border-gray-200">
                      Sets behavioral expectations
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border-b border-gray-200">
                      Disclaimers & Liability
                    </td>
                    <td className="p-3 border-b border-gray-200">
                      Limits our legal risk
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border-b border-gray-200">
                      Governing Law
                    </td>
                    <td className="p-3 border-b border-gray-200">
                      Indian jurisdiction (New Delhi)
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border-b border-gray-200">
                      Modifications to Terms
                    </td>
                    <td className="p-3 border-b border-gray-200">
                      We may update these at our discretion
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border-b border-gray-200">
                      Third-Party Links
                    </td>
                    <td className="p-3 border-b border-gray-200">
                      We’re not liable for external content
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3">Privacy Policy</td>
                    <td className="p-3">
                      Complements these terms with data practices
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
