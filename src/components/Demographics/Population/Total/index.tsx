function TotalPopulation() {
  return (
    <div className="flex justify-around py-4">
      <h4 className="px-4 py-2 text-lg text-black">Total Population</h4>
      <p className="flex">
        <span className="self-end text-xs font-medium">NBH</span>
        <span className="text-2xl font-medium">11,559</span>
      </p>
      <p className="flex">
        <span className="self-end text-xs font-medium">COM</span>
        <span className="text-2xl font-medium">70,699</span>
      </p>
      <p className="flex">
        <span className="self-end text-xs font-medium">CITY</span>
        <span className="text-2xl font-medium">216,076</span>
      </p>
    </div>
  );
}

export default TotalPopulation;
