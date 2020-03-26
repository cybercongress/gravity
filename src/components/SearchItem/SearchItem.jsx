import * as React from "react";
import { Pane, Pill, Text, Spinner, Tooltip } from "evergreen-ui";
import styles from "./SearchItem.less";
import Rank from "./components/rank";
import Status from "./components/status";
// import cx from 'classnames';

export const SearchItem = ({
  status,
  rank,
  grade,
  onClick,
  children,
  hash,
  text,
  contentApp
}) => {
  const item = (
    <Pane key={hash} onClick={onClick} className={styles.containerSearchItem}>
      <Pane display="flex" width="100%" flex={1} flexDirection="column">
        <Pane display="flex" width="100%" alignItems="center">
          {rank && <Rank rank={rank} grade={grade} />}
          <Text
            color="#000"
            width="100%"
            textOverflow="ellipsis"
            paddingX={10}
            overflow="hidden"
            size={500}
          >
            {text || hash}
          </Text>
          <Status status={status} />
        </Pane>
        {contentApp && (
          <div style={{ marginTop: "10px", paddingLeft: "10px" }}>
            {contentApp}
          </div>
        )}
        {status === "downloaded" && (
          <Text flex={1} color="#000" size={400}>
            {children}
          </Text>
        )}
      </Pane>
    </Pane>
  );

  return (
    <span>
      {status !== "sparkApp" ? (
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
