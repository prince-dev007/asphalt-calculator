"use client";

import { useState } from "react";
import Calculator from "@/components/Calculator";
import { useToast } from "@/components/ui/use-toast";
import { Course, Semester } from "@/types/types";
import FAQAccordion from "@/components/FAQs";
import SEO from "@/components/SEO";
import { Truck, Clock, DollarSign, Ruler } from "lucide-react";

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Calculate the exact amount of asphalt needed for your paving project. Get accurate measurements for driveways, parking lots, and roads."
        canonical="/"
      />
      <main className="container  px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            You’re a few clicks away from accurate estimates with this Asphalt
            Calculator!
          </h1>
          <p className="text-xl text-slate-300  mx-auto">
            Are you planning an asphalt project?
          </p>
          <p className="text-xl text-slate-300  mx-auto">
            Whether it is a driveway, parking lot, or road, accuracy is
            paramount! An asphalt calculator is non-essential to eliminate
            uncertainties, save time, money, and resources.
          </p>
          <p className="text-xl text-slate-300  mx-auto">
            Inaccurate estimates can leads to:
          </p>
        </div>
        <ul className="list-disc pl-6 space-y-2 mt-5">
          <li className="text-lg text-slate-300">
            Underestimation can lead to project delays and costly emergency
            orders.
          </li>
          <li className="text-lg text-slate-300">
            Overestimation can waste money on excess material and disposal.
          </li>
        </ul>
        <div className="text-center mb-12 mt-12">
          <p className="text-xl text-slate-300  mx-auto">
            Leverage this asphalt calculator in different magnitudes like volume
            (cu ft, cubic yards, or cubic meters) and weight (tons or tonnes),
            our calculator conventional hot mix asphalt density.
          </p>
        </div>
        <Calculator />

        <section className="py-16">
          <p className="text-slate-300">
            The asphalt calculator lets you precisely estimate asphalt’s weight,
            volume, and cost. If you are one of those contractors, homeowners,
            or even DIY enthusiasts who are on their way toward making a dream
            construction project, you can bet on an asphalt calculator as the
            most responsible choice in partnering with your anticipated project.
          </p>
          <p className="text-slate-300 mt-5">
            This fantastic tool holds multiple different keywords like asphalt
            weight calculator, asphalt volume calculator, and asphalt cost
            calculator, which you can use to avoid any kind of casualties
            throughout your project, further helping you to maintain your
            budget.
          </p>

          <h2 className="text-3xl font-bold text-center mb-5 mt-5">
            Step-by-Step Instructions to Use Asphalt Calculator
          </h2>
          <h3 className="text-2xl font-bold text-center mb-5 mt-5">
            1. Select the Type of Calculation
          </h3>
          <p className="text-slate-300">
            You’ll find the dropdown menu labeled Select Calculation Type at the
            top of our website’s interface. You need to select an option from
            options such as length, width, depth, area, and volume as per the
            input data you have.
          </p>

          <h3 className="text-2xl font-bold text-center mb-5 mt-5">
            2. Input Project Dimensions
          </h3>
          <p className="text-slate-300">
            As per your selection, enter the relevant dimensions:
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-5">
            <li className="text-lg text-slate-300">
              Length: Input the area’s length and choose the unit (inches, feet,
              yards, cm, or meters).
            </li>
            <li className="text-lg text-slate-300">
              Width: Same with this. Select the unit after entering the area’s
              width..
            </li>
            <li className="text-lg text-slate-300">
              Depth: Input your desired depth and choose the unit.
            </li>
            <li className="text-lg text-slate-300">
              Area: Input the area and select the unit (square feet, square
              inches, etc), if the calculation is done area-wise.
            </li>
            <li className="text-lg text-slate-300">
              Volume: Input the volume and choose the unit (cubic feet, cubic
              inches, etc), if the calculation is done by volumes.
            </li>
          </ul>
          <h3 className="text-2xl font-bold text-center mb-5 mt-5">
            3. Define Asphalt Density
          </h3>
          <p className="text-slate-300">
            On the right of our website’s interface, you’ll find the Density
            section. Input the suitable asphalt density (lb/ft³, lb/yd³, etc.)
            there. Be aware when entering these figures as the type of asphalt
            mix you use may affect this.
          </p>

          <h3 className="text-2xl font-bold text-center mb-5 mt-5">
            4. Add Cost Information
          </h3>
          <p className="text-slate-300">
            To achieve a more detailed estimate, you can add cost information as
            per the following option:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-5">
            <li className="text-lg text-slate-300">
              Price per Unit of Mass: If you want a cost estimate as per the
              weight, input the price per unit of mass (e.g., per ton or
              kilogram).
            </li>
            <li className="text-lg text-slate-300">
              Price per Unit of Volume: To estimate prices based on volume, you
              can also input the price per unit of volume, such as per cubic
              foot or cubic meter.
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-center mb-5 mt-5">
            5. Calculate
          </h3>
          <p className="text-slate-300">
            After putting the right figures, you’ll finally get the results
            after clicking the calculate button. You’ll get the results in a
            pop-up box after the calculator processes your inputs.
          </p>

          <h3 className="text-2xl font-bold text-center mb-5 mt-5">
            6. View Results and Graphical Representation
          </h3>
          <p className="text-slate-300">
            You’ll get to see these figures in the result sections:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-5">
            <li className="text-lg text-slate-300">
              Area: As per your input dimension, it’ll cover the total area.
            </li>
            <li className="text-lg text-slate-300">
              Volume: Asphalt volume estimated or entered in the unit of your
              choice.
            </li>
            <li className="text-lg text-slate-300">
              Weight: The estimated weight of asphalt.
            </li>
            <li className="text-lg text-slate-300">
              Cost: If you submit pricing information, the projects anticipated
              cost will be displayed.
            </li>
            <li className="text-lg text-slate-300">
              Visual Representation: A graphical representation of your projects
              size and volume makes it easier to perform calculations.
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-center mb-5 mt-5">
            7. Reset If Needed
          </h3>
          <p className="text-slate-300">
            If you want to start over and calculate another estimation, click
            the Reset button.
          </p>

          <h3 className="text-2xl font-bold text-center mb-5 mt-5">
            8. Close Results
          </h3>
          <p className="text-slate-300">
            To close the results box, click the x button in the top corner of
            our websites interface.
          </p>
          {/* Features Section */}
          <section id="features" className="py-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Our Calculator?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <Ruler className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Precise Measurements
                </h3>
                <p className="text-slate-300">
                  Get exact calculations for your project requirements
                </p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <Clock className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Time-Saving</h3>
                <p className="text-slate-300">
                  Quick results to help you plan your project efficiently
                </p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <DollarSign className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cost-Effective</h3>
                <p className="text-slate-300">
                  Avoid over-ordering materials with accurate estimates
                </p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <Truck className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Project Planning</h3>
                <p className="text-slate-300">
                  Perfect for both small and large-scale projects
                </p>
              </div>
            </div>
          </section>
          <FAQAccordion />
        </section>
      </main>
    </>
  );
}
