interface BlockHeader2Props {
  label?: string;
  heading: React.ReactNode;
  dashColor?: string;
  labelColor?: string;
  headingColor?: string;
  headingWeight?: string;
  headingSize?: string;
  descriptionText?: string;
  descriptionText2?: string;
  descriptionSize?: string;
  maxWidthSection?: string;
  maxWidthHeading?: string;
  maxWidthDescription?: string;
}

const BlockHeader2 = ({
  label,
  heading,
  descriptionText,
  descriptionText2,
  dashColor = "bg-white",
  labelColor = "text-white",
  headingColor = "text-default",
  headingWeight = "font-semibold",
  headingSize = "text-3xl sm:text-5xl",
  descriptionSize = "text-sm sm:text-base",
  maxWidthSection = "max-w-screen-xl",
  maxWidthHeading = "max-w-screen-sm",
  maxWidthDescription = "max-w-screen-sm",
}: BlockHeader2Props) => {
  return (
    <div className={`flex flex-col justify-start items-start gap-1 ${maxWidthSection}`}>
      <div className="flex items-center gap-2">
        {label && <div className={`min-w-6 ${dashColor} min-h-[1px] max-h-[1px]`} />}
        <span className={`text-xs uppercase font-medium select-none ${labelColor}`}>{label}</span>
      </div>

      <h2 className={`${headingSize} ${headingWeight} leading-tight ${maxWidthHeading} ${headingColor}`}>
        {heading}
      </h2>

      {descriptionText && (
        <p className={`w-full ${maxWidthDescription} text-default ${descriptionSize} font-normal pt-4`}>
          {descriptionText}
        </p>
      )}
      {descriptionText2 && (
        <p className={`w-full ${maxWidthDescription} text-default ${descriptionSize} font-normal pt-4`}>
          {descriptionText2}
        </p>
      )}
    </div>
  );
};

export default BlockHeader2;
