import React from "react";
import { Pane, Text, Tooltip, Pill, Link } from "evergreen-ui";
import styles from "../SearchItem.less";

const trimString = (address, firstArg, secondArg) => {
  const first = firstArg || 3;
  const second = secondArg || 8;

  if (address && address.length > 11) {
    return `${address.substring(0, first)}...${address.substring(
      address.length - second
    )}`;
  }
  if (address && address.length < 11) {
    return address;
  }
  return "";
};

export const Copy = ({ text, ...props }) => {
  return (
    <button
      className="copy-address"
      type="button"
      aria-label="Save"
      {...props}
      onClick={() => {
        navigator.clipboard.writeText(text);
      }}
    />
  );
};

const GradeTooltipContent = ({ grade, hash, color, rank }) => (
  <Pane paddingX={15} paddingY={15}>
    <Pane marginBottom={12}>
      <Text>
        Answer rank for{" "}
        {hash && (
          <Pane display="inline-flex" alignItems="center">
            {trimString(hash, 5, 5)} <Copy text={hash} />
          </Pane>
        )}{" "}
        is {rank}
      </Text>
    </Pane>
    <Pane display="flex" marginBottom={12}>
      <Text>
        Answers between &nbsp;
        {grade.from}
        &nbsp; and &nbsp;
        {grade.to}
        &nbsp; recieve grade
        <Pane
          className={styles.rank}
          style={{display: 'inline-flex'}}
          marginLeft="5px"
          backgroundColor={color}
        >
          {grade.value}
        </Pane>
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

const gradeColorRank = (rank) => {
  let rankGradeColor = "#546e7a";

  switch (rank) {
    case 1:
      rankGradeColor = "#ff3d00";
      break;
    case 2:
      rankGradeColor = "#ff9100";
      break;
    case 3:
      rankGradeColor = "#ffea00";
      break;
    case 4:
      rankGradeColor = "#64dd17";
      break;
    case 5:
      rankGradeColor = "#00b0ff";
      break;
    case 6:
      rankGradeColor = "#304ffe";
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

const Rank = ({ rank, grade, hash, tooltip, ...props }) => {
  const color = gradeColorRank(grade.value);
  return (
    <Tooltip
      appearance="card"
      content={
        tooltip || (
          <GradeTooltipContent
            grade={grade}
            hash={hash}
            color={color}
            rank={rank}
          />
        )
      }
      position="bottom"
    >
      <Pane className={styles.rank} backgroundColor={color} {...props}>
        {grade.value}
      </Pane>
    </Tooltip>
  );
};

export default Rank;
