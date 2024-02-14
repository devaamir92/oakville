import Link from 'next/link';

interface SchoolTableProps {
  id: string;
  schoolType: string;
  data: any;
}

const SchoolTable: React.FC<SchoolTableProps> = ({ id, schoolType, data }) => {
  return (
    <article id={id} className="flex flex-col gap-8">
      <div className="mt-4 flex flex-col justify-center gap-3">
        <h2 className="text-center text-2xl font-medium">{schoolType}</h2>
        <hr className="border-gray-300" />
      </div>
      <div className="grid grid-cols-2  gap-16 pb-10">
        {data.map((school: any) => (
          <div className="flex flex-col gap-4" key={school.id}>
            <p className="text-md font-medium">{school.name}</p>
            <table className="w-full">
              <tbody className="divide-y divide-gray-300 bg-white">
                <tr className="flex text-sm">
                  <td className="flex-1  py-1.5 font-medium text-gray-500">
                    Address:
                  </td>
                  <td className="flex-1  py-1.5 font-medium text-gray-700">
                    {school.address}
                  </td>
                </tr>
                <tr className="flex text-sm">
                  <td className="flex-1 py-1.5 font-medium text-gray-500">
                    Phone:
                  </td>
                  <td className="flex-1 py-1.5 font-medium text-gray-700">
                    <Link
                      href={`tel:${school.phone}`}
                      className="flex items-center gap-1"
                    >
                      <span>{school.phone}</span>
                    </Link>
                  </td>
                </tr>
                <tr className="flex text-sm">
                  <td className=" flex-1 py-1.5 font-medium text-gray-500">
                    Website:
                  </td>
                  <td className=" flex-1 py-1.5 font-medium text-gray-700">
                    <Link
                      href={school.url}
                      className="flex items-center gap-1 text-blue-500"
                    >
                      Link
                    </Link>
                  </td>
                </tr>
                {school.grades && (
                  <tr className="flex text-sm">
                    <td className=" flex-1 py-1.5 font-medium text-gray-500">
                      Grades:
                    </td>
                    <td className=" flex-1 py-1.5 font-medium text-gray-700">
                      {school.grades}
                    </td>
                  </tr>
                )}
                {school.raking && (
                  <tr className="flex text-sm">
                    <td className=" flex-1 py-1.5 font-medium text-gray-500">
                      Fraser Ranking Score:
                    </td>
                    <td className=" flex-1 py-1.5 font-medium text-gray-700">
                      {school.raking.toFixed(1)}
                    </td>
                  </tr>
                )}
                {school.school_year && (
                  <tr className="flex text-sm">
                    <td className=" flex-1 py-1.5 font-medium text-gray-500">
                      School Year:
                    </td>
                    <td className=" flex-1 py-1.5 font-medium text-gray-700">
                      {school.school_year}
                    </td>
                  </tr>
                )}
                <tr className="flex text-sm">
                  <td className=" flex-1 py-1.5 font-medium text-gray-500">
                    Program:
                  </td>
                  <td className=" flex-1 py-1.5 font-medium text-gray-700">
                    {school.program}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </article>
  );
};

export default SchoolTable;
