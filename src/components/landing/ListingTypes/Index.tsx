import Link from 'next/link';

const Listings = [
  {
    id: 1,
    title: 'Condos',
    href: '/homes-for-sale?type=.C.&page=1&type=.T.',
  },
  {
    id: 2,
    title: 'Townhouses',
    href: '/homes-for-sale?page=1&type=.T.&type=.A.',
  },
  {
    id: 3,
    title: 'Detached',
    href: '/homes-for-sale?page=1&type=.D.',
  },

  {
    id: 5,
    title: 'New Developments',
    href: '/new-homes',
  },
];

function ListingTypes() {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Listings.map(listing => (
            <Link
              href={listing.href}
              key={listing.id}
              className="flex items-center justify-center rounded bg-secondary-400 px-6 py-3"
            >
              <h3 className="leading-0  font-semibold xl:text-base 2xl:text-lg">
                {listing.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ListingTypes;
