import React from 'react';

interface SummaryProps {
  data: {
    name: string;
    value: string;
  }[];
}

const Summary: React.FC<SummaryProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="flex items-center gap-1 text-lg font-medium  2xl:text-xl">
        Project Facts
      </h3>
      <div className="flex flex-col gap-0 divide-y-[1px] divide-gray-300 md:flex-row md:gap-8 md:divide-y-0 lg:gap-12">
        <div className="flex-1">
          <table className="w-full">
            <tbody className="divide-y divide-gray-300 bg-white">
              {data.slice(0, 4).map(item => (
                <tr key={item.name} className="flex justify-between text-sm">
                  <td className="py-1.5 font-medium text-gray-500">
                    {item.name}
                  </td>
                  <td className="py-1.5 text-right font-medium capitalize text-gray-700 md:text-left">
                    {item.name === 'Pricing' ? `$${item.value}` : item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex-1">
          <table className="w-full">
            <tbody className="divide-y divide-gray-300 bg-white">
              {data.slice(4, 20).map(item => (
                <tr key={item.name} className="flex justify-between text-sm">
                  <td className=" py-1.5 font-medium text-gray-500">
                    {item.name}
                  </td>
                  <td className="py-1.5 text-right font-medium capitalize text-gray-700 md:text-left">
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Summary;
