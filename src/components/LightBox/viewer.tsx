import React from 'react';
import Image from 'next/image';

import {
  Close,
  Content,
  Dialog,
  Overlay,
  Portal,
  Root,
  Trigger,
} from '@radix-ui/react-dialog';
import { BsImages } from 'react-icons/bs';

import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

import { Button } from '@components/ui/Button';

interface Props {
  PropertyName?: string;
  open?: boolean;
  currentImage: number;
  setCurrentImage: React.Dispatch<React.SetStateAction<number>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  Images: Array<{
    src: string;
    alt: string;
  }>;
}

const Viewer: React.FC<Props> = ({
  PropertyName,
  Images,
  open,
  setOpen,
  currentImage,
  setCurrentImage,
}) => {
  const handleNext = () => {
    setCurrentImage(prev => (prev + 1) % Images.length);
  };

  const handlePrev = () => {
    setCurrentImage(prev => (prev - 1 + Images.length) % Images.length);
  };

  return (
    <Dialog>
      <Root open={open} onOpenChange={setOpen}>
        <Trigger asChild>
          <Button
            type="button"
            aria-label="close"
            className="bg-black/60 text-base font-normal text-white hover:bg-black/80 md:text-lg"
            onClick={
              Images.length > 5
                ? () => {
                    setOpen(true);
                    setCurrentImage(0);
                  }
                : undefined
            }
          >
            <BsImages />
            <span className="px-1">+ {Images.length}</span>
          </Button>
        </Trigger>
        <Portal>
          <Overlay className="fixed inset-0 z-30 bg-black" />
          <Content className="fixed left-1/2 top-1/2 z-50 size-full -translate-x-1/2 -translate-y-1/2  focus:outline-none">
            <div className="relative size-full ">
              <p className="absolute left-5 top-5 text-2xl font-semibold text-white">
                {PropertyName}
              </p>
              <Close
                className="absolute right-5 top-5"
                aria-label="Close"
                onClick={() => setOpen(false)}
              >
                <div className="flex size-6 items-center justify-center rounded-full bg-gray-200 text-black">
                  <FaTimes size={12} />
                </div>
              </Close>
              <div className="relative top-1/2 mx-auto size-full max-h-[80vh] max-w-7xl -translate-y-1/2">
                <Image
                  src={Images[currentImage].src}
                  alt={Images[0].alt}
                  fill
                  sizes="(min-width: 320px) 320w, (max-width: 640px) 640w, (min-width: 641px) 768w, (max-width: 1023px) 1024w, (min-width: 1024px) 1280w"
                  className="object-contain"
                />
              </div>
              <Button
                type="button"
                title="previous"
                aria-label="next"
                className="absolute left-5 top-1/2 size-8 -translate-y-1/2 rounded-full bg-gray-200 p-0 text-black hover:text-white"
                onClick={handlePrev}
              >
                <FaChevronLeft />
              </Button>
              <Button
                type="button"
                title="next"
                aria-label="next"
                className="absolute right-5 top-1/2 size-8 -translate-y-1/2 rounded-full bg-gray-200 p-0 text-black hover:text-white"
                onClick={handleNext}
              >
                <FaChevronRight />
              </Button>
            </div>
          </Content>
        </Portal>
      </Root>
    </Dialog>
  );
};

export default Viewer;
