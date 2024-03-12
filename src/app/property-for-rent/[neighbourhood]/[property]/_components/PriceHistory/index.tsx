import Link from 'next/link';

interface PriceHistoryProps {
  data: any;
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

const PriceHistory: React.FC<PriceHistoryProps> = ({ data }) => {
  console.log(data);
  const historyData = () => {
    if (!data) {
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
      <div className="overflow-hidden overflow-x-auto rounded border">
        <table className="min-w-full">
          <thead className="border-b bg-gray-50">
            <tr>
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
                MLS Number
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500"
              >
                View Listing
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {data.length !== 0 ? (
              data.map((item: any, index: number) => (
                <tr key={history[index].text}>
                  <td className="whitespace-nowrap px-4 py-2.5">
                    {history[index].text}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2.5">
                    {dateParser(item[history[index].date])}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2.5">
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      maximumFractionDigits: 0,
                      currencyDisplay: 'symbol',
                    }).format(item.Sp_dol)}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2.5">
                    {item.Ml_num}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2.5">
                    <Link
                      href={`/${item.Slug}`}
                      className="text-blue-500 underline"
                    >
                      View Listing
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
