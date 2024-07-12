"use client";

import CountUp from "react-countup";

const mockSstats = [
  {
    num: 2,
    text: "Years of Experience",
  },
  {
    num: 12,
    text: "Projects Completed",
  },
  {
    num: 8,
    text: "Technologies mastered",
  },
  {
    num: 200,
    text: "Code commits",
  },
];
const Stats = ({ stats }) => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {(stats || mockSstats).map((item, i) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={i}
              >
                <CountUp
                  end={item.number}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.name.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
