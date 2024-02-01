'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import Viewer from './viewer';

const Images = [
  {
    src: '/images/webp/listing/5.webp',
    alt: 'Image 1',
  },
  {
    src: '/images/webp/ad7d6_2.webp',
    alt: 'Image 2',
  },
  {
    src: '/images/webp/ad7d6_3.webp',
    alt: 'Image 3',
  },
  {
    src: '/images/webp/ad7d6_4.webp',
    alt: 'Image 4',
  },
  {
    src: '/images/webp/ad7d6_5.webp',
    alt: 'Image 5',
  },
  {
    src: '/images/webp/ad7d6_6.webp',
    alt: 'Image 6',
  },
  {
    src: '/images/webp/listing/7.webp',
    alt: 'Image 7',
  },
  {
    src: '/images/webp/listing/8.webp',
    alt: 'Image 8',
  },
];

function LightBox() {
  const [isopen, setIsopen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div
      id="description"
      className="relative flex h-[420px] gap-2 overflow-hidden rounded"
    >
      <div className="relative w-3/5 overflow-hidden ">
        <Image
          className="cursor-pointer object-cover"
          src={Images[0].src}
          alt="Image 1"
          fill
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
      <div className="grid flex-1 grid-cols-1 items-center gap-2 shadow">
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
}

export default LightBox;
