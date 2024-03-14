interface InformationProps {
  features: any;
  description: any;
}

const Information: React.FC<InformationProps> = ({ features, description }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-medium 2xl:text-xl">Project Description</h3>
        <div
          className="element max-h-full text-justify text-sm"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <div>
        <h3 className="text-lg font-medium 2xl:text-xl">Features & Finishes</h3>
        <div
          className="element max-h-full text-justify text-sm"
          dangerouslySetInnerHTML={{ __html: features }}
        />
      </div>
    </div>
  );
};

export default Information;
