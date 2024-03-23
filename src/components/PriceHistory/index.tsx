import Link from 'next/link';

import { BsEye } from 'react-icons/bs';

import VerBtn from '@components/ListingCard/verBtn';
import { PriceFormat } from '@utils/priceFormat';

interface PriceHistoryProps {
  data: any;
  location: string;
  session?: any;
}

const statusMap = [
  { label: 'Dft', text: 'Deal Fell Through', date: 'Unavail_dt' },
  { label: 'Exp', text: 'Expired', date: 'Xd' },
  { label: 'Ext', text: 'Extension', date: 'Xdtd' },
  { label: 'Sc', text: 'Sold Conditionally', date: 'Unavail_dt' },
  { label: 'Sld', text: 'Sold', date: 'Cd' },
  { label: 'Sus', text: 'Suspended', date: 'Dt_sus' },
  { label: 'Ter', text: 'Terminated', date: 'Dt_ter' },
  { label: 'Pc', text: 'Partially Conditional', date: 'Unavail_dt' },
  { label: 'Lsd', text: 'Leased', date: 'Td' },
];

const PriceHistory: React.FC<PriceHistoryProps> = ({
  data,
  location,
  session,
}) => {
  const historyData = () => {
    if (!data) {
      return [];
    }

    function filterNullLSC(prop: any) {
      return prop.filter((item: any) => item.Lsc === null);
    }
    if (filterNullLSC(data).length > 0) {
      return [];
    }

    const historyMap: any[] = data.map((item: any) => {
      const object2 = statusMap.find((obj2: any) => obj2.label === item.Lsc);

      return object2;
    });

    return historyMap;
  };
  const history = historyData();
  const dateParser = (inputDate: string) => {
    const [date] = inputDate.split(' ');
    const [year, month, day] = date.split('-');
    return `${day}-${month}-${year}`;
  };
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <h3 className="flex items-center gap-1 text-lg font-medium  2xl:text-xl">
          Listing History
        </h3>
        <p className="text-xs text-gray-600">
          The property price history is available only to registered users.
        </p>
      </div>
      <div className="relative overflow-hidden overflow-x-auto rounded border">
        {history.length !== 0 && !session?.user.verified ? (
          <VerBtn isLocked />
        ) : null}
        <table className="min-w-full">
          <thead className="border-b bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500"
              >
                Last Update
              </th>

              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500"
              >
                List Price
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500"
              >
                Sold Price
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500"
              >
                Listing ID
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {history.length !== 0 ? (
              data.map((item: any, index: number) => (
                <tr key={history[index].text}>
                  <td className="whitespace-nowrap px-4 py-2.5">
                    {dateParser(item[history[index].date])}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2.5">
                    {PriceFormat(Number(item.Lp_dol))}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2.5">
                    {item.Sp_dol > 0 ? (
                      PriceFormat(Number(item.Sp_dol))
                    ) : (
                      <span className="ml-6">---</span>
                    )}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2.5">
                    {history[index].text}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2.5">
                    <Link
                      href={`${location}/${item.Slug}`}
                      className="flex items-center justify-center gap-1 text-blue-500"
                    >
                      {item.Ml_num} <BsEye />
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="p-4 text-center">
                  <p className="text-sm text-gray-600">No data available</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceHistory;
