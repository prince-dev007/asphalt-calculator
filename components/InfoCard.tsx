import React from 'react';
import { Info } from 'lucide-react';

const InfoCard = () => {
  return (
    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
      <div className="flex items-center gap-2 mb-4">
        <Info className="w-6 h-6 text-yellow-400" />
        <h2 className="text-xl font-semibold">Tips</h2>
      </div>

      <ul className="space-y-3 text-slate-300">
        <li className="flex items-start gap-2">
          <span className="block w-2 h-2 mt-2 rounded-full bg-yellow-400" />
          <span>Standard driveway depth is typically 2-4 inches</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="block w-2 h-2 mt-2 rounded-full bg-yellow-400" />
          <span>Commercial parking lots usually require 4-6 inches</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="block w-2 h-2 mt-2 rounded-full bg-yellow-400" />
          <span>Add 10% extra for compaction and waste</span>
        </li>
      </ul>
    </div>
  );
};

export default InfoCard;