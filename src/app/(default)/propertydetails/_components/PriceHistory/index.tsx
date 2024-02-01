import Link from 'next/link';

const data = [
  {
    address: '5050 CAMBIE STREET',
    date: 'Sep 25, 2023',
    daysAgo: '4 months ago',
    status: 'Terminated',
    listedFor: '$1,870,000',
    listedOn: 'Aug 23, 2023',
  },
  {
    address: '5050 CAMBIE STREET',
    date: 'Jul 27, 2023',
    daysAgo: '6 months ago',
    status: 'Expired',
    listedFor: '$2,096,000',
    listedOn: 'Apr 19, 2023',
  },
  {
    address: '5050 CAMBIE STREET',
    date: 'Apr 19, 2023',
    daysAgo: '10 months ago',
    status: 'Terminated',
    listedFor: '$1,980,000',
    listedOn: 'Mar 29, 2023',
  },
];

export default function Table() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <h3 className="flex items-center gap-1 text-xl font-medium text-gray-800">
          Listing History
        </h3>
        <p className="text-xs text-gray-600">
          The property price history is available only to registered users.
        </p>
      </div>
      <div className="overflow-hidden rounded border">
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
                Status
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
                List Period
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500"
              >
                Listed On
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
            {data.map(item => (
              <tr key={item.address} className="text-sm">
                <td className="whitespace-nowrap px-4 py-2.5">{item.date}</td>
                <td className="whitespace-nowrap px-4 py-2.5">{item.status}</td>
                <td className="whitespace-nowrap px-4 py-2.5">
                  {item.listedFor}
                </td>
                <td className="whitespace-nowrap px-4 py-2.5">
                  {item.daysAgo}
                </td>
                <td className="whitespace-nowrap px-4 py-2.5">
                  {item.listedOn}
                </td>

                <td className="whitespace-nowrap px-4 py-2.5">
                  <Link href="/" className="text-blue-500 underline">
                    View Listing
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
