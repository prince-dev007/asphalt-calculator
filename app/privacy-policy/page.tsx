import SEO from "@/components/SEO";

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="Terms and Conditions"
        description="Calculate the exact amount of asphalt needed for your paving project. Get accurate measurements for driveways, parking lots, and roads."
        canonical="/terms-and-conditions"
      />
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Terms and Conditions</h1>
          <p className="text-xl text-slate-300">
            These Terms and Conditions outline the rules and regulations for the
            use of Asphalt Calculator Website, located at
            https://asphaltcalculator.io/.
          </p>
          <p className="text-xl text-slate-300 mt-5">
            By accessing this website we assume you accept these terms and
            conditions. Do not continue to use Asphalt Calculator if you do not
            agree to take all of the terms and conditions stated on this page.
          </p>
          <p className="text-xl text-slate-300 mt-5">
            The following terminology applies to these Terms and Conditions,
            Privacy Statement and Disclaimer Notice and all Agreements: Client,
            You and Your refers to you, the person log on this website and
            compliant to the Company terms and conditions. The Company,
            Ourselves, We, Our and Us, refers to our Company. Party, Parties, or
            Us, refers to both the Client and ourselves.
          </p>
        </div>

        {/* Policy Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Cookies</h2>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <p className="text-slate-300 mb-4">
                We employ the use of cookies. By accessing Asphalt Calculator,
                you agree to use cookies in agreement with Asphalt Calculator
                Privacy Policy.
              </p>
              <p className="text-slate-300 mb-4">
                Most interactive websites use cookies to let us retrieve the
                user details for each visit. Cookies are used by our website to
                enable the functionality of certain areas to make it easier for
                people visiting our website.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. License</h2>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <p className="text-slate-300 mb-4">
                Unless otherwise stated, Asphalt Calculator and/or its licensors
                own the intellectual property rights for all material on Asphalt
                Calculator. All intellectual property rights are reserved. You
                may access this from Asphalt Calculator for your own personal
                use subjected to restrictions set in these terms and conditions.
              </p>
              <p className="text-slate-300 mb-4">You must not:</p>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>Republish material from Asphalt Calculator</li>
                <li>
                  Sell, rent or sub-license material from Asphalt Calculator
                </li>
                <li>
                  Reproduce, duplicate or copy material from Asphalt Calculator
                </li>
                <li>Redistribute content from Asphalt Calculator</li>
              </ul>
              <p className="text-slate-300 mb-4 mt-5">
                This Agreement shall begin on the date hereof.
              </p>
              <p className="text-slate-300 mb-4">
                Parts of this website offer an opportunity for users to post and
                exchange opinions and information in certain areas of the
                website. Asphalt Calculator does not filter, edit, publish, or
                review comments prior to their presence on the website. Comments
                do not reflect the views and opinions of Asphalt Calculator, its
                agents, and/or affiliates.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              3. Hyperlinking to Our Content
            </h2>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <p className="text-slate-300 mb-4">
                We reserve the right to approve or deny requests to link to the
                content on our site. Any links that are approved should be in
                accordance with the following:
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>
                  Links must not be misleading or falsely represent the
                  relationship between the parties.
                </li>
                <li>
                  Links should not violate any intellectual property rights.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Your Rights</h2>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <p className="text-slate-300 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to processing of your information</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <p className="text-slate-300 mb-4">
                If you have any questions about these Terms and Conditions,
                please contact us at:
              </p>
              <p className="text-slate-300">
                Email: asphaltcalculator007@gmail.com
                <br />
                Phone: (+91) 8299727256
                <br />
                Address: Noida Sector 135, Uttar Pradesh, India
              </p>
            </div>
          </section>

          <section>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <p className="text-slate-300 text-sm">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
