import {
  Award,
  Users,
  Building2,
  Target,
  Percent,
  UserCheck,
  PersonStanding,
  Headset,
} from "lucide-react";
import Head from "next/head";
import SEO from "@/components/SEO";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
    <SEO
        title="About Us"
        description="Calculate the exact amount of asphalt needed for your paving project. Get accurate measurements for driveways, parking lots, and roads."
        canonical="/about"
      />
       <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We are dedicated to providing precise calculations and professional
            tools for the construction industry.
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <Image
              src="https://devopsden.s3.ap-south-1.amazonaws.com/pexels-jeshoots-7435.jpg"
              alt="Construction site"
              className="rounded-xl shadow-lg"
              width={600}
              height={600}
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-slate-300 mb-4">
              Founded in 2024, Asphalt Calculator emerged from a simple idea:
              make construction calculations accessible and accurate for
              everyone in the industry.
            </p>
            <p className="text-slate-300">
              Our flagship tool, the Asphalt Calculator, was designed with both
              DIY homeowners and professional contractors in mind. We understand
              how crucial accurate calculations are when planning an asphalt
              paving project, which is why we developed a user-friendly and
              precise calculator to help you achieve the best results.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-slate-300">
                Committed to providing the highest quality calculations
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
              <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-slate-300">
                Supporting contractors and DIY enthusiasts alike
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
              <Building2 className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-slate-300">
                Continuously improving our calculation tools
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
              <Target className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Precision</h3>
              <p className="text-slate-300">
                Delivering accurate results every time
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
              <Percent className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Accuracy</h3>
              <p className="text-slate-300">
                Our Asphalt Calculator delivers precise estimations based on
                real-world data
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
              <UserCheck className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ease of Use</h3>
              <p className="text-slate-300">
                Whether you’re a first-time user or a seasoned contractor, our
                tool is simple and intuitive.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
              <PersonStanding className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Free Access</h3>
              <p className="text-slate-300">
                The Asphalt Calculator is available to you at no cost, so you
                can plan your projects without worrying about fees.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
              <Headset className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Reliable Support</h3>
              <p className="text-slate-300">
                We’re here to assist you with any questions about using our
                Asphalt Calculator or other resources on our site.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
