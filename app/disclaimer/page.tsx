import SEO from "@/components/SEO";

export default function DisclaimerPage() {
  return (
    <>
      <SEO
        title="Disclaimer"
        description="Calculate the exact amount of asphalt needed for your paving project. Get accurate measurements for driveways, parking lots, and roads."
        canonical="/disclaimer"
      />
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Disclaimer</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            If you require any more information or have any questions about our
            sites disclaimer, please feel free to contact us by email at
            asphaltcalculator007@gmail.com.
          </p>
        </div>

        {/* Policy Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">
              Disclaimers for Asphalt Calculator
            </h2>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <p className="text-slate-300 mb-4">
                All the information on this website -
                https://asphaltcalculator.io/ - is published in good faith and
                for general information purpose only. Asphalt Calculator does
                not make any warranties about the completeness, reliability and
                accuracy of this information. Any action you take upon the
                information you find on this website (Asphalt Calculator), is
                strictly at your own risk. Asphalt Calculator will not be liable
                for any losses and/or damages in connection with the use of our
                website.
              </p>
            </div>
          </section>

          <section>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <p className="text-slate-300 mb-4">
                From our website, you can visit other websites by following
                hyperlinks to such external sites. While we strive to provide
                only quality links to useful and ethical websites, we have no
                control over the content and nature of these sites. These links
                to other websites do not imply a recommendation for all the
                content found on these sites. Site owners and content may change
                without notice and may occur before we have the opportunity to
                remove a link which may have gone bad.
              </p>
            </div>
          </section>

          <section>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <p className="text-slate-300 mb-4">
                Please be also aware that when you leave our website, other
                sites may have different privacy policies and terms which are
                beyond our control. Please be sure to check the Privacy Policies
                of these sites as well as their Terms of Service before engaging
                in any business or uploading any information.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Consent</h2>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <p className="text-slate-300 mb-4">
                By using our website, you hereby consent to our disclaimer and
                agree to its terms.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Update</h2>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <p className="text-slate-300 mb-4">
                Should we update, amend or make any changes to this document,
                those changes will be prominently posted here.
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
