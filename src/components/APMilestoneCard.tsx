import clsx from "clsx";

interface APMilestoneCardProps {
  distance: string;
  pbTime: string;
  pbDate: string;
  goalTime: string;
  goalDate: string;
  headingColor: string;
}

export default function APMilestoneCard({ distance, pbTime, pbDate, goalTime, goalDate,headingColor }: APMilestoneCardProps) {
  const headingClassName = clsx(
    "text-6xl md:text-8xl font-display", headingColor
  )
  return (
    <div className="flex flex-col justify-center gap-6 items-center brutal w-[330px] h-[330px] md:w-[430px] md:h-[430px] rounded-md border-2 border-black">
      <h3 className={headingClassName}>{distance}</h3>

      <div className="flex flex-row gap-8 justify-between">
        <div className="flex flex-col gap-4 items-center">
          <p className="text-lg md:text-xl text-grayText font-normal">Personal Best</p>
          <p className="text-3xl md:text-4xl font-bold">{pbTime}</p>
          <p className="text-lg md:text-xl text-grayText font-normal">{pbDate}</p>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <p className="text-lg md:text-xl text-grayText font-normal">Goal</p>
          <p className="text-3xl md:text-4xl font-bold">{goalTime}</p>
          <p className="text-lg md:text-xl text-grayText font-normal">{goalDate}</p>
        </div>
      </div>
    </div>
  );
}
