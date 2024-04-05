import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface NewHomeCardProps extends React.HTMLAttributes<HTMLAnchorElement> {
  item: any;
}

const NewHomeCard: React.FC<NewHomeCardProps> = ({ item }) => {
  return (
    <Link href={`/new-homes/${item.slug}`} className="flex h-fit flex-col">
      <div className="flex flex-col overflow-hidden rounded border border-gray-300 bg-white">
        <div className="relative h-[250px] w-full">
          <Image
            src={`https://api.preserveoakville.ca/public/gallery/${item?.gallery[0].name}/${item?.gallery[0].image}`}
            // fill
            width={400}
            height={250}
            alt={item.gallery[0].name}
            sizes="25vw"
            className="size-full object-cover"
          />
          <div className="absolute right-3 top-3">
            {/* <span className="rounded bg-white px-3 py-1.5 text-sm font-semibold uppercase text-primary-500 shadow">
      {item.Status}
    </span> */}
          </div>
        </div>

        <div className="flex flex-col items-center gap-1 py-1">
          <h2 className="text-lg font-medium text-primary-500">{item.name}</h2>

          <div className="flex items-center gap-1 text-sm font-normal">
            <p>Est. Completion: {item.estimatedCompletionDate}</p>
            <div className="flex h-4 w-[1px] bg-primary-500" />
            <p>Starting At: {item.price}</p>
          </div>
          <h3 className="text-base font-medium capitalize text-primary-500">
            {item.neighbourhood}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default NewHomeCard;
