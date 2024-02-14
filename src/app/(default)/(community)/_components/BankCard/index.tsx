import Link from 'next/link';

import BankStatus from '../BankStatus';

interface BankCardProps {
  id: string;
  data: any;
}

const BankCard: React.FC<BankCardProps> = ({ id, data }) => {
  return (
    <section id={id} className="grid grid-cols-2  gap-16 pb-10">
      {data.map((bank: any) => (
        <article className="" key={bank.id}>
          <div className="flex flex-col gap-4">
            <p className="text-md font-medium">{bank.name}</p>
            <table className="w-full">
              <tbody className="divide-y divide-gray-300 bg-white">
                {bank.intersection && (
                  <tr className="flex text-sm">
                    <td className="flex-1  py-1.5 font-medium text-gray-500">
                      Intersection:
                    </td>
                    <td className="flex-1  py-1.5 font-medium text-gray-700">
                      {bank.intersection}
                    </td>
                  </tr>
                )}
                <tr className="flex text-sm">
                  <td className="flex-1  py-1.5 font-medium text-gray-500">
                    Address:
                  </td>
                  <td className="flex-1  py-1.5 font-medium text-gray-700">
                    {bank.address}
                  </td>
                </tr>
                <tr className="flex text-sm">
                  <td className="flex-1 py-1.5 font-medium text-gray-500">
                    Phone:
                  </td>
                  <td className="flex-1 py-1.5 font-medium text-gray-700">
                    <Link
                      href={`tel:${bank.phone}`}
                      className="flex items-center gap-1"
                    >
                      <span>{bank.phone}</span>
                    </Link>
                  </td>
                </tr>
                <tr className="flex text-sm">
                  <td className=" flex-1 py-1.5 font-medium text-gray-500">
                    Website:
                  </td>
                  <td className=" flex-1 py-1.5 font-medium text-gray-700">
                    <Link
                      href={bank.url}
                      target="_blank"
                      className="flex items-center gap-1 text-blue-500"
                    >
                      Link
                    </Link>
                  </td>
                </tr>
                <tr className="flex text-sm">
                  <td className=" flex-1 py-1.5 font-medium text-gray-500">
                    Hours:
                  </td>
                  <td className=" flex-1 py-1.5 font-medium text-gray-700">
                    <BankStatus hours={bank.hours} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      ))}
    </section>
  );
};

export default BankCard;
