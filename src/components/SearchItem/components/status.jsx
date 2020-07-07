import React from "react";
import { Pane, Text, Tooltip, Pill, Link } from "evergreen-ui";
import styles from "../SearchItem.less";

const typeStatus = (type, size = 0) => {
  let status = {
    color: "#546e7a",
    text: "IPFS",
  };

  switch (type) {
    case "understandingState":
      status = {
        color: "#00b0ff",
        text: "cyb: I am getting content meta information",
      };
      break;
    case "impossibleLoad":
      status = {
        color: "#ff3d00",
        text: "cyb: I was unable to find traces of this in dht :-(",
      };
      break;
    case "availableDownload":
      status = {
        color: "#ffd600",
        text: `cyb: ${size} answer is available for download`,
      };
      break;
    case "downloaded":
      status = {
        color: "#00e676",
        text: `cyb: ${size} answer is loaded`,
      };
      break;
    case "sparkApp":
      status = {
        color: "#d500f9",
        text: "cyb: Answer is loaded instantly through spark app",
      };
      break;
    case "legacy":
      status = {
        color: "#ff9100",
        text:
          "cyb: I can not load content from legacy web. You have to go and do it yourself. But I would recommend to ~transform it",
      };
      break;
    default:
      status = {
        color: "#546e7a",
        text: "IPFS",
      };
      break;
  }
  return status;
};

const Status = ({ status, size }) => {
  const { color, text } = typeStatus(status, size);

  return (
    <Tooltip
      appearance="card"
      content={
        <Pane paddingX={18} paddingY={18}>
          <Pane display="flex" alignItems="center" marginBottom={10}>
            <Text>{text}</Text>
          </Pane>
        </Pane>
      }
    >
      <Pane
        className={`${styles.customPill} ${
          status === "understandingState" ? "glow" : ""
        }`}
        style={{ color: "#fff", backgroundColor: color }}
      />
    </Tooltip>
  );
};

export default Status;
