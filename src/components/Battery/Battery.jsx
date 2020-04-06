import * as React from "react";
import { Pane, Text, Link, Tooltip } from "evergreen-ui";
import styles from "./Battery.less";
// import cx from 'classnames';

export const Battery = ({
  children,
  fontSize,
  bwPercent,
  bwRemained,
  bwMaxValue,
  linkPrice,
  contentTooltip,
  styleText,
  colorText,
  ...props
}) => (
  <Tooltip appearance="card" content={contentTooltip}>
    <Pane
      height={25}
      width="100%"
      className={
        bwPercent <= 25
          ? styles.skillBarHoverRed
          : bwPercent < 50
          ? styles.skillBarHoverOrange
          : bwPercent < 76
          ? styles.skillBarHoverYellow
          : styles.skillBarHoverGreen
      }
      backgroundColor="#fff"
      borderRadius={4}
      position="relative"
      transition="1s"
      {...props}
    >
      <Pane
        height="100%"
        borderRadius="inherit"
        style={{ transition: "width .2s ease-in" }}
        width={`${bwPercent}%`}
        backgroundColor={
          bwPercent <= 25
            ? "#d32f2f"
            : bwPercent < 50
            ? "#f57c00"
            : bwPercent < 76
            ? "#fbc02d"
            : "#4caf50"
        }
      >
        <Pane
          display="flex"
          alignItems="center"
          width="100%"
          height="100%"
          position="absolute"
          paddingX={20}
          justifyContent={bwPercent < 26 ? "flex-end" : "flex-start"}
        >
          <Text
            style={styleText}
            fontSize={fontSize || 18}
            fontWeight="bold"
            color={bwPercent < 26 ? "#d32f2f" : colorText || "#ffffff"}
          >
            {`${bwPercent} %`}
          </Text>
        </Pane>
      </Pane>
      {children}
    </Pane>
  </Tooltip>
);
