'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import Viewer from './viewer';

interface Props {
  Images: Array<{ src: string; alt: string }>;
}

const LightBox: React.FC<Props> = ({ Images }) => {
  const [isopen, setIsopen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div
      id="description"
      className="relative flex h-60 gap-2 overflow-hidden rounded md:h-80 lg:h-[420px]"
    >
      <div className="relative w-full overflow-hidden md:w-3/5 ">
        <Image
          className="cursor-pointer object-cover"
          src={Images[0].src}
          alt="Image 1"
          fill
          sizes="(min-width: 320px) 320w, (max-width: 640px) 640w, (min-width: 641px) 768w, (max-width: 1023px) 1024w, (min-width: 1024px) 1280w"
          onClick={
            Images.length > 5
              ? () => {
                  setIsopen(true);
                  setCurrentImage(0);
                }
              : undefined
          }
        />
      </div>
      <div className="hidden flex-1 grid-cols-1 items-center gap-2 shadow md:grid">
        {Images.slice(1, 3).map(image => (
          <div
            className="relative col-span-1 size-full overflow-hidden "
            key={image.alt}
          >
            <Image
              className="cursor-pointer object-cover"
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 320px) 320w, (max-width: 640px) 640w, (min-width: 641px) 768w, (max-width: 1023px) 1024w, (min-width: 1024px) 1280w"
              onClick={
                Images.length > 5
                  ? () => {
                      setIsopen(true);
                      setCurrentImage(Images.indexOf(image));
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
            PropertyName="Property Name"
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
