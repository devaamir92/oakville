const Listings = [
  {
    id: 1,
    title: 'Condos',
  },
  {
    id: 2,
    title: 'Townhouses',
  },
  {
    id: 3,
    title: 'Detached',
  },
  {
    id: 4,
    title: 'Sold',
  },
  {
    id: 5,
    title: 'New Developments',
  },
  {
    id: 6,
    title: 'Assignment Sale',
  },
];

function ListingTypes() {
  return (
    <section className="px-4 py-6">
      <div className="2xl:container">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {Listings.map(listing => (
            <div
              key={listing.id}
              className="flex items-center justify-center rounded bg-secondary-400 px-6 py-3"
            >
              <h3 className="mt-2 text-lg font-semibold">{listing.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ListingTypes;
