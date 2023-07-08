import { SimpleGrid } from "@chakra-ui/react";
import useInView from "../../Anim/useInView";
import StatBox from "../Statbox";

const stats = [
  {
    statistic_number: "200+",
    statistic_subject: "Participants",
  },
  {
    statistic_number: "5+",
    statistic_subject: "Sponsors",
  },
  {
    statistic_number: "10+",
    statistic_subject: "Events",
  },
  {
    statistic_number: "200000+",
    statistic_subject: "Prize Pool",
  },
];

const StatGroup = () => {
  const [containerRef, vis] = useInView({ threshold: 0.75 });

  return (
    <SimpleGrid
      ref={containerRef}
      columns={["1", "2", "3", "4", "4"]}
      spacing="24px"
      spacingY="4rem"
      //   height={['280px', '280px', '280px', '300px', '310px', '350px']}
      //   width={['100%', '240px', '280px', '300px', '310px', '350px']}
      //   p={"2rem"}
      //   paddingBottom="0%"
    >
      {stats.map((stat) => (
        <StatBox
          key={stat.statistic_subject}
          numtext={stat.statistic_number}
          subtext={stat.statistic_subject}
          visible={vis}
        />
      ))}
    </SimpleGrid>
  );
};

export default StatGroup;
