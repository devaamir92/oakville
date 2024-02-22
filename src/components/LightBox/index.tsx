'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import Viewer from './viewer';

interface Props {
  Images: string[];
  mls: string;
  address: string;
}

const LightBox: React.FC<Props> = ({ Images, mls, address }) => {
  const [currentImage, setCurrentImage] = useState<{
    index: number;
    image: string;
  }>({ index: 0, image: Images[0] });
  const [isopen, setIsopen] = useState(false);

  return (
    <div
      id="description"
      className="relative flex h-60 gap-2 overflow-hidden rounded md:h-80 lg:h-[420px]"
    >
      <div className="relative w-full overflow-hidden md:w-3/5 ">
        <Image
          className="cursor-pointer object-cover"
          src={`https://api.preserveoakville.ca/api/v1/stream/${mls}/${Images[0]}`}
          alt={Images[0]}
          fill
          sizes="(min-width: 320px) 320w, (max-width: 640px) 640w, (min-width: 641px) 768w, (max-width: 1023px) 1024w, (min-width: 1024px) 1280w"
          onClick={
            Images.length > 5
              ? () => {
                  setIsopen(true);
                  setCurrentImage({ index: 0, image: Images[0] });
                }
              : undefined
          }
        />
      </div>
      <div className="hidden flex-1 grid-cols-1 items-center gap-2 shadow md:grid">
        {Images.slice(1, 3).map(image => (
          <div
            className="relative col-span-1 size-full overflow-hidden "
            key={image}
          >
            <Image
              className="cursor-pointer object-cover"
              src={`https://api.preserveoakville.ca/api/v1/stream/${mls}/${image}`}
              alt={image}
              fill
              sizes="(min-width: 320px) 320w, (max-width: 640px) 640w, (min-width: 641px) 768w, (max-width: 1023px) 1024w, (min-width: 1024px) 1280w"
              onClick={
                Images.length > 5
                  ? () => {
                      setIsopen(true);
                      setCurrentImage({
                        index: Images.indexOf(image),
                        image: Images[Images.indexOf(image)],
                      });
                    }
                  : undefined
              }
            />
          </div>
        ))}
      </div>
      {Images.length > 5 && (
        <div className="absolute bottom-5 right-5">
          <Viewer
            mls={mls}
            PropertyName={address}
            Images={Images}
            open={isopen}
            setOpen={setIsopen}
            currentImage={currentImage}
            setCurrentImage={setCurrentImage}
          />
        </div>
      )}
    </div>
  );
};

export default LightBox;
