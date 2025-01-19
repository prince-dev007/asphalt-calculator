import React, { useState, useCallback } from 'react';
import { Calculator as CalcIcon, Ruler, Scale } from 'lucide-react';
import ResultCard from './ResultCard';
import InfoCard from './InfoCard';

const Calculator = () => {
  const [dimensions, setDimensions] = useState({
    length: '',
    width: '',
    depth: '',
  });
  const [results, setResults] = useState({
    squareFeet: 0,
    tons: 0,
    cubicYards: 0,
  });

  const calculateAsphalt = useCallback(() => {
    const length = parseFloat(dimensions.length);
    const width = parseFloat(dimensions.width);
    const depth = parseFloat(dimensions.depth);

    if (length && width && depth) {
      const squareFeet = length * width;
      const cubicFeet = squareFeet * (depth / 12); // Convert depth to feet
      const cubicYards = cubicFeet / 27;
      const tons = cubicYards * 2; // Approximate conversion: 1 cubic yard = 2 tons

      setResults({
        squareFeet,
        tons,
        cubicYards,
      });
    }
  }, [dimensions]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDimensions(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
          <div className="flex items-center gap-2 mb-6">
            <CalcIcon className="w-6 h-6 text-yellow-400" />
            <h2 className="text-xl font-semibold">Calculate Requirements</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">
                Length (feet)
              </label>
              <div className="relative">
                <Ruler className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="number"
                  name="length"
                  value={dimensions.length}
                  onChange={handleInputChange}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg py-2 px-10 text-white placeholder-slate-400 focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400"
                  placeholder="Enter length"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">
                Width (feet)
              </label>
              <div className="relative">
                <Ruler className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="number"
                  name="width"
                  value={dimensions.width}
                  onChange={handleInputChange}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg py-2 px-10 text-white placeholder-slate-400 focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400"
                  placeholder="Enter width"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">
                Depth (inches)
              </label>
              <div className="relative">
                <Scale className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="number"
                  name="depth"
                  value={dimensions.depth}
                  onChange={handleInputChange}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg py-2 px-10 text-white placeholder-slate-400 focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400"
                  placeholder="Enter depth"
                />
              </div>
            </div>

            <button
              onClick={calculateAsphalt}
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Calculate
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <ResultCard results={results} />
          <InfoCard />
        </div>
      </div>
    </div>
  );
};

export default Calculator;