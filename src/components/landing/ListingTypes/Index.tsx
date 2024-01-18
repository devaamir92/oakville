import Link from 'next/link';

const Listings = [
  {
    id: 1,
    title: 'Condos',
    href: '/condos',
  },
  {
    id: 2,
    title: 'Townhouses',
    href: '/townhouses',
  },
  {
    id: 3,
    title: 'Detached',
    href: '/detached',
  },
  {
    id: 4,
    title: 'Sold',
    href: '/sold',
  },
  {
    id: 5,
    title: 'New Developments',
    href: '/new-developments',
  },
  {
    id: 6,
    title: 'Assignment Sale',
    href: '/assignment-sale',
  },
];

function ListingTypes() {
  return (
    <section className="px-4 py-6">
      <div className="2xl:container">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
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
