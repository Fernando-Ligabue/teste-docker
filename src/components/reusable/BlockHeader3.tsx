interface BlockHeader2Props {
  label: string;
  heading: React.ReactNode;
  dashColor?: string;
  labelColor?: string;
  headingColor?: string;
  headingWeight?:string;
  headingSize?: string;
}

const BlockHeader3 = ({
  label,
  heading,
  dashColor= "bg-white",
  labelColor = "text-white",
  headingColor = "text-default",
  headingWeight = "font-semibold",
  headingSize = "text-2xl sm:text-4xl"
}: BlockHeader2Props) => {
  return (
    <div className="flex flex-col justify-start items-start gap-2.5 max-w-screen-xl p-4">
      <div className="flex items-center gap-2">
        <div className={`min-w-6 ${dashColor} min-h-[1px] max-h-[1px]`} />
        <span className={`text-xs uppercase font-medium select-none ${labelColor}`}>{label}</span>
      </div>

      <h2 className={`${headingSize} ${headingWeight} leading-tight max-w-screen-md ${headingColor}`}>
        {heading}
      </h2>
    </div>
  );
};

export default BlockHeader3;
