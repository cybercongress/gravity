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
  contentApp,
  text,
  contentStyle,
  containerTitleStyle,
  titleStyle,
}) => {
  const item = (
    <Pane key={hash} onClick={onClick} className={styles.containerSearchItem}>
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
            {rank && <Rank marginTop="2px" rank={rank} grade={grade} />}
            {(text || hash) && (
              <Text
                color="#000"
                // width="100%"
                textOverflow="ellipsis"
                overflow="hidden"
                paddingX={10}
                // lineHeight={1}
                size={500}
                {...titleStyle}
              >
                {text || hash}
              </Text>
            )}
          </Pane>
          <Status status={status} />
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
