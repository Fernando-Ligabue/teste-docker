interface TitleCenterProps {
    label?: string;
    heading: React.ReactNode;
    dashColor?: string;
    labelColor?: string;
    headingColor?: string;
    headingWeight?: string;
    headingSize?: string;
    descriptionText?: string;
  }
  
  const TitleCenter = ({
    label,
    heading,
    descriptionText,
    dashColor = "bg-white",
    labelColor = "text-white",
    headingColor = "text-default",
    headingWeight = "font-semibold",
    headingSize = "text-3xl sm:text-5xl"
  }: TitleCenterProps) => {
    return (
      <div className="flex flex-col justify-center items-center gap-2.5 w-full p-4">
        <div className="flex items-center gap-2">
          {label && <div className={`min-w-6 ${dashColor} min-h-[1px] max-h-[1px]`} />}
          <span className={`text-xs uppercase font-medium select-none ${labelColor}`}>{label}</span>
        </div>
  
        <h2 className={`${headingSize} ${headingWeight} leading-tight max-w-screen-sm text-center ${headingColor}`}>
          {heading}
        </h2>
  
        {descriptionText && (
          <p className="w-full  max-w-screen-sm text-default text-xl sm:text-2xl text-center font-medium pt-8">
            {descriptionText}
          </p>
        )}
      </div>
    );
  };
  
  export default TitleCenter;
  