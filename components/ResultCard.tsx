import React from 'react';
import { ClipboardList } from 'lucide-react';

interface ResultCardProps {
  results: {
    squareFeet: number;
    tons: number;
    cubicYards: number;
  };
}

const ResultCard = ({ results }: ResultCardProps) => {
  return (
    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
      <div className="flex items-center gap-2 mb-6">
        <ClipboardList className="w-6 h-6 text-yellow-400" />
        <h2 className="text-xl font-semibold">Results</h2>
      </div>

      <div className="space-y-4">
        <div className="bg-slate-900/50 p-4 rounded-lg">
          <p className="text-slate-400 text-sm">Area</p>
          <p className="text-xl font-semibold">{results.squareFeet.toFixed(2)} sq ft</p>
        </div>

        <div className="bg-slate-900/50 p-4 rounded-lg">
          <p className="text-slate-400 text-sm">Asphalt Required</p>
          <p className="text-xl font-semibold">{results.tons.toFixed(2)} tons</p>
        </div>

        <div className="bg-slate-900/50 p-4 rounded-lg">
          <p className="text-slate-400 text-sm">Volume</p>
          <p className="text-xl font-semibold">{results.cubicYards.toFixed(2)} cubic yards</p>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;