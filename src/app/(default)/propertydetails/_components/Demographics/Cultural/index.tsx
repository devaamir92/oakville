import Immigration from './Immigration';
import Language from './Language';

const ImmigrationData = [
  {
    name: 'Immigrant',
    value: 49,
  },
  {
    name: 'Non-Immigrant',
    value: 51,
  },
];

const LanguageData = [
  { name: 'English', value: 11 },
  { name: 'Mandarin', value: 10 },
  { name: 'Arabic', value: 7 },
  { name: 'Urdu', value: 7 },
  { name: 'Multiple Languages', value: 6 },
];

function SocioEconomic() {
  return (
    <div className="rounded border border-gray-300 bg-white ">
      <div className="flex items-center justify-between px-4 py-2">
        <h4 className="text-lg font-medium text-black">Cultural</h4>
      </div>
      <hr />
      <div className="flex">
        <div className="flex flex-1 flex-col gap-4 border-r border-gray-300 p-4">
          <p className="text-lg font-medium">Dominant Language</p>
          <Language data={LanguageData} />
        </div>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <p className="text-lg font-medium">Immigration Status</p>
          <Immigration data={ImmigrationData} />
        </div>
      </div>
    </div>
  );
}

export default SocioEconomic;
