'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/Button';

interface CategoryFilterProps {
  categories: any;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories }) => {
  const router = useRouter();

  const handleLinClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    category: string
  ) => {
    e.preventDefault();
    e.stopPropagation();

    router.push(`/category/${category.toLowerCase().replaceAll(' ', '-')}`);
  };

  return (
    <div className="absolute left-2 top-2 flex flex-wrap gap-2">
      {categories.map((category: any) => (
        <Button
          onClick={e => {
            handleLinClick(e, category.category);
          }}
          variant="default"
          title={category.category}
          key={category.id}
          className="h-auto border !px-2 !py-1 text-sm text-white "
        >
          {category.category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
