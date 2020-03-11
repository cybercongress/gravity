import * as React from "react";
import { Pane, Pill, Text, Spinner, Tooltip, Link } from "evergreen-ui";
import styles from "./SearchItem.less";
// import cx from 'classnames';

const LinkWithTooltip = ({ status, hash, content, contentIpfs }) => {
  let colorPill = "neutral";

  switch (status) {
    case "failed":
      colorPill = "red";
      break;
    case "loading":
      colorPill = "yellow";
      break;
    case "success":
      colorPill = "green";
      break;
    default:
      colorPill = "neutral";
      break;
  }

  let contentItem = false;

  if (status === "success") {
    if (contentIpfs !== undefined) {
      if (contentIpfs.indexOf(hash) === -1) {
        contentItem = true;
      }
    }
  }

  return (
    <Pane display="flex" flex={1} alignItems="center">
      <Pane display="flex" flex={1} flexDirection="column">
        <Pane display="flex" alignItems="center">
          <Tooltip
            appearance="card"
            content={
              <Pane paddingX={18} paddingY={18}>
                <Pane display="flex" alignItems="center" marginBottom={10}>
                  <Text>
                    {status === "loading" && "Receiving answer from IPFS"}
                    {status === "failed" && "Can’t receive answer from IPFS"}
                    {status === "success" && "Answer received from IPFS"}
                  </Text>
                </Pane>
              </Pane>
            }
          >
            <Pill
              paddingX={4}
              paddingY={4}
              width={4}
              height={4}
              display="flex"
              alignItems="center"
              style={{ color: "#fff" }}
              color={colorPill}
              isSolid
              marginRight={8}
            />
          </Tooltip>

          <Text color="#000" width="fit-content" size={500}>
            {hash}
          </Text>
        </Pane>
        {contentItem && (
          <Text flex={1} color="#000" size={400}>
            {content}
          </Text>
        )}
      </Pane>
    </Pane>
  );
};

export const SearchItem = ({
  status,
  rank,
  grade,
  onClick,
  children,
  hash,
  contentIpfs
}) => {
  let rankGradeColor = "neutral";

  switch (grade.value) {
    case 1:
      rankGradeColor = "red";
      break;
    case 2:
      rankGradeColor = "orange";
      break;
    case 3:
      rankGradeColor = "yellow";
      break;
    case 4:
      rankGradeColor = "green";
      break;
    case 5:
      rankGradeColor = "teal";
      break;
    case 6:
      rankGradeColor = "blue";
      break;
    case 7:
      rankGradeColor = "purple";
      break;
    default:
      rankGradeColor = "neutral";
      break;
  }

  const gradeTooltipContent = (
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
            width={23}
            marginLeft={5}
            display="inline-flex"
            alignItems="center"
            style={{ color: "#fff" }}
            color={rankGradeColor}
            isSolid
          >
            {grade.value}
          </Pill>
        </Text>
      </Pane>
    </Pane>
  );

  const rankGradeWithTooltip = (
    <Tooltip appearance="card" content={gradeTooltipContent}>
      <Pill
        paddingX={8}
        paddingY={5}
        display="flex"
        alignItems="center"
        style={{ color: "#fff" }}
        color={rankGradeColor}
        isSolid
      >
        {grade.value}
      </Pill>
    </Tooltip>
  );

  const item = (
    <Pane
      boxShadow="0px 0px 0.4px 0px #dedede"
      paddingLeft={20}
      paddingRight={10}
      paddingY={12}
      display="flex"
      justifyContent="space-between"
      key={hash}
      backgroundColor="#fff"
      borderRadius={5}
      marginBottom={10}
      onClick={onClick}
      className={styles.containerSearchItem}
      maxHeight="250px"
    >
      <LinkWithTooltip
        status={status}
        contentIpfs={contentIpfs}
        hash={hash}
        content={children}
      />
      {status === "loading" && <Spinner marginX={10} size={16} />}
      {rankGradeWithTooltip}
    </Pane>
  );

  return (
    <span>
      {status === "success" ? (
        <a
          style={{
            textDecoration: "none"
          }}
          href={`https://ipfs.io/ipfs/${hash}`}
          target="_blank"
        >
          {item}
        </a>
      ) : (
        item
      )}
    </span>
  );
};
