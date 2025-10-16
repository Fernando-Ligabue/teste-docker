interface BlockHeader1Props {
    label: string | "";
    heading: React.ReactNode | "";
    complementText?: string | "";
    highlightText?: React.ReactNode | "";
    headingWeight?:string;
    headingSize?: string;  
  }
  
  const BlockHeader1 = ({ 
    label, 
    heading, 
    highlightText, 
    complementText, 
    headingWeight = "font-bold",
    headingSize = "text-3xl sm:text-6xl max-w-lg"
  }: BlockHeader1Props) => {
    return (
      <div className="flex flex-col justify-start items-start gap-2.5 max-w-screen-xl mx-auto p-4">
        <div className="flex items-center gap-2">
          <div className="min-w-6 bg-white min-h-[1px] max-h-[1px]" />
          <span className="text-white text-xs uppercase font-medium select-none">{label}</span>
        </div>
  
        <h1 className={`${headingSize} ${headingWeight} font-bold text-white leading-tight`}>
          {heading} <span className="text-white font-normal">{complementText}</span>
        </h1>
  
        {highlightText && (
          <div className="bg-primary p-4 mt-4 max-w-md">
            <p className="text-white text-sm sm:text-base font-semibold">
              {highlightText}
            </p>
          </div>
        )}
      </div>
    );
  };
  
  export default BlockHeader1;
  