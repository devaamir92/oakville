import Link from 'next/link';
import Image from 'next/image';

function ItemCard() {
  return (
    <Link href="/" className="flex gap-4 py-4">
      <div className="relative overflow-hidden rounded md:h-[150px] md:w-[250px]">
        <Image
          src="/images/webp/listing/1.webp"
          alt="listing-1"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-center justify-between">
          <h5 className="text-xl font-semibold text-primary-500">
            Oakville Ontario L6X 5A6
          </h5>
          <span className="text-sm text-gray-500">Sold Out</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <span>Price:</span>
          <span className="font-semibold">$ {(600000).toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>2 Beds</span>
          <span>4 Baths</span>
          <span>1 Parking</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>376 sq ft - 975 sq ft</span>
        </div>
      </div>
    </Link>
  );
}

export default ItemCard;
