import React from "react";
import { Pane, Text, Tooltip, Pill, Link } from "evergreen-ui";
import styles from "../SearchItem.less";

const GradeTooltipContent = ({ grade, color, rank }) => (
  <Pane paddingX={15} paddingY={15}>
    <Pane marginBottom={12}>
      <Text>Answer rank is {rank}</Text>
    </Pane>
    <Pane display="flex" marginBottom={12}>
      <Text>
        Answers between &nbsp;
        {grade.from}
        &nbsp; and &nbsp;
        {grade.to}
        &nbsp; recieve grade
        <Pill
          paddingX={8}
          paddingY={5}
          width={25}
          height={16}
          display="inline-flex"
          marginLeft={5}
          alignItems="center"
          style={{ color: "#fff", backgroundColor: color }}
          isSolid
        >
          {grade.value}
        </Pill>
      </Text>
    </Pane>
    <Pane>
      <Text>
        More about{" "}
        <Link
          textDecoration="none"
          href="https://ipfs.io/ipfs/QmceNpj6HfS81PcCaQXrFMQf7LR5FTLkdG9sbSRNy3UXoZ"
          color="green"
          cursor="pointer"
          target="_blank"
        >
          cyber~Rank
        </Link>
      </Text>
    </Pane>
  </Pane>
);

const gradeColorRank = rank => {
  let rankGradeColor = "#546e7a";

  switch (rank) {
    case 1:
      rankGradeColor = "#ff3d00";
      break;
    case 2:
      rankGradeColor = "#ff9100";
      break;
    case 3:
      rankGradeColor = "#ffd600";
      break;
    case 4:
      rankGradeColor = "#00e676";
      break;
    case 5:
      rankGradeColor = "#00bfa5";
      break;
    case 6:
      rankGradeColor = "#00b0ff";
      break;
    case 7:
      rankGradeColor = "#d500f9";
      break;
    default:
      rankGradeColor = "#546e7a";
      break;
  }

  return rankGradeColor;
};

const Rank = ({ rank, grade }) => {
  const color = gradeColorRank(grade.value);
  return (
    <Tooltip
      appearance="card"
      content={<GradeTooltipContent grade={grade} color={color} rank={rank} />}
      position="bottom"
    >
      <Pane className={styles.rank} style={{ backgroundColor: color }}>
        {grade.value}
      </Pane>
    </Tooltip>
  );
};

export default Rank;
