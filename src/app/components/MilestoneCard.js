import clsx from "clsx";

export default function MilestoneCard({
  distance,
  pbTime,
  pbDate,
  goalTime,
  goalDate,
  headingColor
}) {
  const headingClassName = clsx(
    "text-8xl", "font-display", headingColor
  )
  return (
    <div className="flex flex-col justify-center gap-6 items-center brutal w-[430px] h-[430px] rounded-md border-2 border-black">
      <h3 className={headingClassName}>{distance}</h3>

      <div className="flex flex-row gap-8 justify-between">
        <div className="flex flex-col gap-4 items-center">
          <p className="text-xl text-grayText font-normal">Personal Best</p>
          <p className="text-4xl font-bold">{pbTime}</p>
          <p className="text-xl text-grayText font-normal">{pbDate}</p>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <p className="text-xl text-grayText font-normal">Goal</p>
          <p className="text-4xl font-bold">{goalTime}</p>
          <p className="text-xl text-grayText font-normal">{goalDate}</p>
        </div>
      </div>
    </div>
  );
}
