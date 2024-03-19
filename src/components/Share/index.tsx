'use client';

import {
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TwitterShareButton,
} from 'react-share';

import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaXTwitter,
} from 'react-icons/fa6';

import { usePathname } from 'next/navigation';

const commonStyles = {
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '28px',
  height: '28px',
  color: '#fff',
};

interface ShareProps {
  image: string;
  title: string;
}

export function Share({ image, title }: ShareProps) {
  const pathname = usePathname();

  const url = `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`;

  return (
    <div className="flex items-center gap-1.5">
      <FacebookShareButton
        url={url}
        title={title}
        style={{
          ...commonStyles,
          backgroundColor: '#1877F2',
        }}
      >
        <FaFacebookF size={18} />
      </FacebookShareButton>
      <LinkedinShareButton
        url={url}
        title={title}
        style={{
          ...commonStyles,
          backgroundColor: '#0077B5',
        }}
      >
        <FaLinkedinIn size={18} />
      </LinkedinShareButton>
      <PinterestShareButton
        style={{
          ...commonStyles,
          backgroundColor: '#BD081C',
        }}
        media={image}
        url={url}
        title={title}
      >
        <FaPinterest size={18} className="text-white" />
      </PinterestShareButton>
      <TwitterShareButton
        url={url}
        title={title}
        style={{
          ...commonStyles,
          backgroundColor: '#000',
        }}
      >
        <FaXTwitter size={18} />
      </TwitterShareButton>
    </div>
  );
}
