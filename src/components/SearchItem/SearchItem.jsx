import * as React from "react";
import { Pane, Pill, Text, Spinner, Tooltip, Link } from "evergreen-ui";
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
  contentIpfs
}) => {
  let contentItem = false;

  if (status === "downloaded") {
    if (contentIpfs !== undefined) {
      if (contentIpfs.indexOf(hash) === -1) {
        contentItem = true;
      }
    }
  }

  const item = (
    <Pane key={hash} onClick={onClick} className={styles.containerSearchItem}>
      <Pane display="flex" width="100%" flex={1} flexDirection="column">
        <Pane display="flex" width="100%" alignItems="center">
          <Status status={status} />
          <Text
            color="#000"
            width="100%"
            textOverflow="ellipsis"
            paddingX={10}
            overflow="hidden"
            size={500}
          >
            {hash}
          </Text>
          <Rank rank={rank} grade={grade} />
        </Pane>
        {contentItem && (
          <Text flex={1} color="#000" size={400}>
            {children}
          </Text>
        )}
      </Pane>
    </Pane>
  );

  return (
    <span>
      <a
        style={{
          textDecoration: "none"
        }}
        href={`https://ipfs.io/ipfs/${hash}`}
        target="_blank"
      >
        {item}
      </a>
    </span>
  );
};
