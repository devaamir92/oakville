import { Button } from '@components/ui/Button';

const data = [
  {
    name: 'John Doe',
    min: 100,
    max: 200,
    notification: 'daily',
    date: '2021-10-10',
  },
  {
    name: 'John Doe',
    min: 100,
    max: 200,
    notification: 'weekly',
    date: '2021-10-10',
  },
  {
    name: 'John Doe',
    min: 100,
    max: 200,
    notification: 'monthly',
    date: '2021-10-10',
  },
];

const category = [
  {
    name: 'Daily',
  },
  {
    name: 'Weekly',
  },
  {
    name: 'Monthly',
  },
];

function SavedSearches() {
  return (
    <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data &&
        data.map(item => (
          <div
            key={item.name}
            className="flex flex-col gap-4 rounded border p-4"
          >
            <div className="flex items-center justify-between gap-2">
              <h1 className="text-lg font-medium">{item.name}</h1>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
            <p className="text-sm text-gray-500">
              Price: {item.min} - {item.max}
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-500">Notification:</p>
              <select className="flex h-9 w-full rounded border border-slate-300 bg-transparent px-2 py-1 text-sm focus:outline-none">
                {category.map(cat => (
                  <option key={cat.name} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-end">
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  className="text-primary-500"
                >
                  Update Notification
                </Button>
                <Button
                  type="button"
                  className="text-red-500"
                  variant="outline"
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        ))}
      {data.length === 0 && (
        <div className="col-span-full min-h-[calc(100vh-360px)] p-4 text-gray-500">
          <h1 className="text-center text-xl font-medium">No saved searches</h1>
        </div>
      )}
    </div>
  );
}

export default SavedSearches;
