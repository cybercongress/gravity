import * as React from "react";
import { Pane, Pill, Text, Spinner, Tooltip } from "evergreen-ui";
import styles from "./SearchItem.less";
import Rank from "./components/rank";
import Status from "./components/status";
// import cx from 'classnames';

const gradeColorRank = (grade) => {
  let classColor = "rankValDefault";

  switch (grade) {
    case 1:
      classColor = "rankVal1";
      break;
    case 2:
      classColor = "rankVal2";
      break;
    case 3:
      classColor = "rankVal3";
      break;
    case 4:
      classColor = "rankVal4";
      break;
    case 5:
      classColor = "rankVal5";
      break;
    case 6:
      classColor = "rankVal6";
      break;
    case 7:
      classColor = "rankVal7";
      break;
    default:
      classColor = "rankValDefault";
      break;
  }

  return classColor;
};

export const SearchItem = ({
  status,
  rank,
  grade,
  onClick,
  children,
  hash,
  contentApp,
  text,
  contentStyle,
  containerTitleStyle,
  titleStyle,
  size,
}) => {
  let colorRank = "rankValDefault";

  if (grade && grade.value) {
    colorRank = gradeColorRank(grade.value);
  }

  const item = (
    <Pane
      key={hash}
      onClick={onClick}
      className={`${styles.containerSearchItem} ${colorRank}`}
      // style="--radius: var(--rad-50);"
    >
      <Pane display="flex" width="100%" flex={1} flexDirection="column">
        <Pane
          display="flex"
          width="100%"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Pane
            display="flex"
            justifyContent="flex-start"
            alignItems="flex-start"
            flex={1}
            textOverflow="ellipsis"
            overflow="hidden"
            {...containerTitleStyle}
          >
            {/* {rank && (
              <Rank marginTop="2px" hash={hash} rank={rank} grade={grade} />
            )} */}
            {text && (
              <Text
                color="#fff"
                // width="100%"
                textOverflow="ellipsis"
                overflow="hidden"
                paddingX={10}
                // lineHeight={1}
                className={styles.textSearchItem}
                size={500}
                {...titleStyle}
              >
                {text}
              </Text>
            )}
          </Pane>
          {status !== "downloaded" && <Status status={status} size={size} />}
        </Pane>
        {contentApp && (
          <div style={{ marginTop: "10px", paddingLeft: "10px" }}>
            {contentApp}
          </div>
        )}
        <Pane overflowY="auto" {...contentStyle}>
          {children}
        </Pane>
      </Pane>
    </Pane>
  );

  return item;
};
