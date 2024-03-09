interface InformationProps {
  features: any;
  description: any;
}

const Information: React.FC<InformationProps> = ({ features, description }) => {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-lg font-medium 2xl:text-xl">Project Description</h3>
      <div className="max-h-full text-justify text-sm">
        <span dangerouslySetInnerHTML={{ __html: description }} />
        <div className="mt-5 flex flex-col gap-1">
          <h3 className="text-lg font-medium 2xl:text-xl">
            Features & Finishes
          </h3>
          <span dangerouslySetInnerHTML={{ __html: features }} />
        </div>
      </div>
    </div>
  );
};

export default Information;
