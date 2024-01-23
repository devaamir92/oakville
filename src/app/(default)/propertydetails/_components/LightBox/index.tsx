'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import Viewer from './viewer';

const Images = [
  {
    src: '/jpg/listing/1.jpg',
    alt: 'Image 1',
  },
  {
    src: '/jpg/listing/2.jpg',
    alt: 'Image 2',
  },
  {
    src: '/jpg/listing/3.jpg',
    alt: 'Image 3',
  },
  {
    src: '/jpg/listing/4.jpg',
    alt: 'Image 4',
  },
  {
    src: '/jpg/listing/5.jpg',
    alt: 'Image 5',
  },
  {
    src: '/jpg/listing/6.jpg',
    alt: 'Image 6',
  },
  {
    src: '/jpg/listing/7.jpg',
    alt: 'Image 7',
  },
  {
    src: '/jpg/listing/8.jpg',
    alt: 'Image 8',
  },
];

function LightBox() {
  const [isopen, setIsopen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="relative flex h-[450px] gap-4 overflow-hidden rounded">
      <div className="relative flex-1 shadow">
        <Image
          className="cursor-pointer"
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
      <div className="grid flex-1 grid-cols-2 items-center gap-4 shadow">
        {Images.slice(1, 5).map(image => (
          <div className="relative col-span-1 h-full w-full" key={image.alt}>
            <Image
              className="cursor-pointer"
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
