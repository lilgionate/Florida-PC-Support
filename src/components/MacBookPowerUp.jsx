import React from 'react';

const commonFixes = [
  'Repair logic board',
  'Replace logic board',
  'Perform spill clean-up',
  'Replace battery',
  'Replace charger',
  'Cooling system repair',
  'Replace hard drive',
  'Replace Magsafe board',
  'Replace power'
];

const sharedDarkClasses = 'dark:text-zinc-300';

const MacRepairComponent = () => {
  return (
    <div className="container mx-auto px-4 py-6">
        <p>No power on your Mac? That’s a real bummer. 
            But, we have been able to revive many non-powering up Macs at our Mac repair 
            shop in NYC. Perhaps, you spilled liquid on your Mac? Or it took a sad fall? 
            We don’t judge. We just want to fix your Mac!
        </p>
      <h2 className="text-2xl font-semibold mb-4 dark:text-white">Common fixes we can perform for your Mac that doesn't power up:</h2>
      <ul className="list-disc pl-5 space-y-2 mb-4 dark:text-zinc-300">
        {commonFixes.map((fix, index) => (
          <li key={index}>{fix}</li>
        ))}
      </ul>
      <p className="mb-4 dark:text-zinc-400">Mac models supported: MacBook, MacBook Pro, MacBook Air, iMac, Mac Pro, Mac mini</p>
      <div className="border-t border-zinc-200 pt-4 dark:border-zinc-700">
        <h3 className="text-xl font-semibold mb-2 dark:text-white">Mac No Power Repair Costs:</h3>
        <div className="flex justify-between items-center">
          <p className={sharedDarkClasses}>Charger / Battery Replacement</p>
          <p className="font-semibold dark:text-zinc-300">$65 - $150</p>
        </div>
        <div className="flex justify-between items-center">
          <p className={sharedDarkClasses}>Charging Port Repair</p>
          <p className="font-semibold dark:text-zinc-300">$125 - $150</p>
        </div>
        <div className="flex justify-between items-center">
          <p className={sharedDarkClasses}>Hard drive Replacement</p>
          <p className="font-semibold dark:text-zinc-300">$210+</p>
        </div>
        <div className="flex justify-between items-center">
          <p className={sharedDarkClasses}>Spill / Logic Board Fix</p>
          <p className="font-semibold dark:text-zinc-300">$250+</p>
        </div>
      </div>
    </div>
  );
};

export default MacRepairComponent;