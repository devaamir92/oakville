import Image from 'next/image';
import React from 'react';

const Images = [
  {
    src: 'https://images.pexels.com/photos/5441742/pexels-photo-5441742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },

  {
    src: 'https://images.pexels.com/photos/903516/pexels-photo-903516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },
  {
    src: 'https://images.pexels.com/photos/139759/pexels-photo-139759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },

  {
    src: 'https://images.pexels.com/photos/5533841/pexels-photo-5533841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },

  {
    src: 'https://images.pexels.com/photos/4344711/pexels-photo-4344711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },

  {
    src: 'https://images.pexels.com/photos/1586144/pexels-photo-1586144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },
  {
    src: 'https://images.pexels.com/photos/1687148/pexels-photo-1687148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },

  {
    src: 'https://images.pexels.com/photos/5953318/pexels-photo-5953318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },

  {
    src: 'https://images.pexels.com/photos/34435/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },

  {
    src: 'https://images.pexels.com/photos/4400641/pexels-photo-4400641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },

  {
    src: 'https://images.pexels.com/photos/598966/pexels-photo-598966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },

  {
    src: 'https://images.pexels.com/photos/3534160/pexels-photo-3534160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },

  {
    src: 'https://images.pexels.com/photos/5641978/pexels-photo-5641978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },

  {
    src: 'https://images.pexels.com/photos/674804/pexels-photo-674804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },
  {
    src: 'https://images.pexels.com/photos/3458700/pexels-photo-3458700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },

  {
    src: 'https://images.pexels.com/photos/2076189/pexels-photo-2076189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },

  {
    src: 'https://images.pexels.com/photos/5441748/pexels-photo-5441748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },

  {
    src: 'https://images.pexels.com/photos/3880594/pexels-photo-3880594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },

  {
    src: 'https://images.pexels.com/photos/1161768/pexels-photo-1161768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },

  {
    src: 'https://images.pexels.com/photos/494015/pexels-photo-494015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },

  {
    src: 'https://images.pexels.com/photos/2907879/pexels-photo-2907879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },

  {
    src: 'https://images.pexels.com/photos/2203132/pexels-photo-2203132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },

  {
    src: 'https://images.pexels.com/photos/3599174/pexels-photo-3599174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },

  {
    src: 'https://images.pexels.com/photos/3995673/pexels-photo-3995673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },

  {
    src: 'https://images.pexels.com/photos/773202/pexels-photo-773202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },

  {
    src: 'https://images.pexels.com/photos/3444919/pexels-photo-3444919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },

  {
    src: 'https://images.pexels.com/photos/2923594/pexels-photo-2923594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },

  {
    src: 'https://images.pexels.com/photos/5319953/pexels-photo-5319953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },

  {
    src: 'https://images.pexels.com/photos/3593865/pexels-photo-3593865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },

  {
    src: 'https://images.pexels.com/photos/763096/pexels-photo-763096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },

  {
    src: 'https://images.pexels.com/photos/3735356/pexels-photo-3735356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },

  {
    src: 'https://images.pexels.com/photos/1637423/pexels-photo-1637423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },

  {
    src: 'https://images.pexels.com/photos/4399984/pexels-photo-4399984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },

  {
    src: 'https://images.pexels.com/photos/5486620/pexels-photo-5486620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },

  {
    src: 'https://images.pexels.com/photos/2968961/pexels-photo-2968961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },

  {
    src: 'https://images.pexels.com/photos/4394232/pexels-photo-4394232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },

  {
    src: 'https://images.pexels.com/photos/383610/pexels-photo-383610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },

  {
    src: 'https://images.pexels.com/photos/2180820/pexels-photo-2180820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },

  {
    src: 'https://images.pexels.com/photos/4100767/pexels-photo-4100767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '',
  },
];

function Slider() {
  return (
    <section className="h-96">
      <div className="flex h-full gap-4 rounded-lg">
        <div className="relative flex-1 overflow-hidden rounded-lg">
          <Image
            src={Images[0].src}
            alt={Images[0].alt}
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="grid flex-1 grid-cols-2 gap-4 rounded-lg">
          {Images.slice(1, 5).map(img => (
            <div key={img.alt} className="relative overflow-hidden rounded-lg">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Slider;
