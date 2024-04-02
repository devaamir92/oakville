import Link from 'next/link';
import Image from 'next/image';

import LoginBtn from '@components/ListingCard/loginbtn';
import VerBtn from '@components/ListingCard/verBtn';

interface ItemCardProps {
  Ml_num: string;
  Status: string;
  address: string;
  price: number;
  beds?: number;
  baths?: number;
  parking?: number;
  sqft?: string;
  Lsc: string;
  url: string;
  isLocked: boolean;
  session: any;
}

const ItemCard: React.FC<ItemCardProps> = async ({
  Ml_num,
  Status,
  address,
  price,
  beds,
  baths,
  parking,
  sqft,
  Lsc,
  url,
  isLocked,
  session,
}) => {
  return (
    <div className="relative flex w-full">
      {!session && <LoginBtn status={Status} isLocked={isLocked} />}
      {session && !session?.user.verified && (
        <VerBtn status={Status} isLocked={isLocked} showBtn />
      )}
      <Link href={url} className="flex w-full gap-4 py-4">
        <div className="size-24 overflow-hidden rounded md:h-[150px] md:w-[250px]">
          <Image
            src={`https://api.preserveoakville.ca/api/v1/stream/${Ml_num}/photo_1.webp`}
            alt={address}
            width={250}
            height={150}
            priority
            className="size-full overflow-hidden object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex items-center justify-between">
            <h5 className="text-xl font-semibold text-primary-500">
              {address}
            </h5>
            <span className="text-sm text-gray-500">
              {Status === 'A' ? 'Active' : `UnActive - ${Lsc}`}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <span>Price:</span>
            <span className="font-semibold">$ {price.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>{beds} Beds</span>
            <span>{baths} Baths</span>
            <span>{parking} Parking</span>
          </div>
          {sqft && (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Sqft: {sqft}</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>MLS: {Ml_num}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ItemCard;
