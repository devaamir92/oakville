import Link from 'next/link';

const Listings = [
  {
    id: 1,
    title: 'New Listings',
    href: '/homes-for-sale',
  },
  {
    id: 2,
    title: 'Sold',
    href: '/sold-homes',
  },
  {
    id: 3,
    title: 'Condos',
    href: '/condos-for-sale',
  },
  {
    id: 4,
    title: 'Townhouses',
    href: '/condo-townhouses-for-sale',
  },
  {
    id: 5,
    title: 'Detached',
    href: '/houses-for-sale',
  },

  {
    id: 6,
    title: 'New Homes',
    href: '/new-homes',
  },
];

function ListingTypes() {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
          {Listings.map(listing => (
            <Link
              href={listing.href}
              key={listing.id}
              className="flex items-center justify-center rounded bg-secondary-400 px-6 py-1.5 md:py-3"
            >
              <p className="leading-0 font-semibold xl:text-base 2xl:text-lg">
                {listing.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ListingTypes;
