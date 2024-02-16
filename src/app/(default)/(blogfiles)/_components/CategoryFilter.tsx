'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/Button';

interface CategoryFilterProps {
  categories: string[];
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories }) => {
  const router = useRouter();

  const handleLinClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    category: string
  ) => {
    e.preventDefault();
    router.push(`/blog/category/${category.toLowerCase().replace(' ', '-')}`);
  };

  return (
    <div className="absolute left-2 top-2 flex flex-wrap gap-2">
      {categories.map(category => (
        <Button
          onClick={e => {
            handleLinClick(e, category);
          }}
          variant="default"
          key={category}
          className="h-auto !px-2 !py-1 text-xs text-white hover:underline"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
