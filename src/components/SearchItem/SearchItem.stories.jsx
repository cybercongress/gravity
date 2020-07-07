import React from "react";
import { storiesOf } from "@storybook/react";
import { Pane } from "evergreen-ui";

import { SearchItem } from "./SearchItem";

const imgTest = require("../../img/robohash.jpg");

const text1 = `
Hey!

I have no idea what this means. But I guess you can know for sure. Cyberlink it.

What is cyberlink?

You have probably used links which look like this: https://google.com. Eventually the request to this link resolves to a particular machine which will show your old god. You cant know for sure what you get. Cyberlinks are different. Cyberlink is a link between two pieces of content there each content is addressed by its hash. Changing the way we link things we make the Great Web closer
I have no idea what this means. But I guess you can know for sure. Cyberlink it.

What is cyberlink?

You have probably used links which look like this: https://google.com. Eventually the request to this link resolves to a particular machine which will show your old god. You cant know for sure what you get. Cyberlinks are different. Cyberlink is a link between two pieces of content there each content is addressed by its hash. Changing the way we link things we make the Great Web closer
I have no idea what this means. But I guess you can know for sure. Cyberlink it.

What is cyberlink?

You have probably used links which look like this: https://google.com. Eventually the request to this link resolves to a particular machine which will show your old god. You cant know for sure what you get. Cyberlinks are different. Cyberlink is a link between two pieces of content there each content is addressed by its hash. Changing the way we link things we make the Great Web closer

`;

const text2 = `What is cyberlink?`;

const links = {
  QmeaYGKqdJHCstEPsS4iepvT5y6JZyuAKu87kFwz1yQEyx: {
    rank: "0.000576",
    grade: { from: 0.000001, to: 0.001, value: 1 },
    status: "understandingState",
    content: "data:,QmeaYGKqdJHCstEPsS4iepvT5y6JZyuAKu87kFwz1yQEyx"
  },
  QmeaYGKqdJHCstEPsS4iepvT5y6JZyuAKu87kFwz1yQE2x: {
    rank: "0.000576",
    grade: { from: 0.000001, to: 0.001, value: 2 },
    status: "impossibleLoad",
    type: "text",
    content: text2
  },
  QmeaYGKqdJHCstEPsS4iepvT5y6JZyuAKu87kFwz1yQE3x: {
    rank: "0.000576",
    grade: { from: 0.000001, to: 0.001, value: 3 },
    status: "availableDownload",
    size: "100 mb"
  },
  QmeaYGKqdJHCstEPsS4iepvT5y6JZyuAKu87kFwz1yQE4x: {
    rank: "0.000576",
    grade: { from: 0.000001, to: 0.001, value: 4 },
    status: "downloaded",
    type: "link",
    size: "100 kb",
    content:
      "https://ipfs.io/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco/wiki/Kirill.html"
  },
  QmeaYGKqdJHCstEPsS4iepvT5y6JZyuAKu87kFwz1yQE5x: {
    rank: "0.000576",
    grade: { from: 0.000001, to: 0.001, value: 5 },
    status: "downloaded",
    type: "text",
    content: text1,
    size: "100 kb"
  },
  QmeaYGKqdJHCstEPsS4iepvT5y6JZyuAKu87kFwz1yQE6x: {
    rank: "0.000576",
    grade: { from: 0.000001, to: 0.001, value: 6 },
    status: "downloaded",
    type: "image",
    content: imgTest,
    size: "100 kb"
  },
  QmeaYGKqdJHCstEPsS4iepvT5y6JZyuAKu87kFwz1yQE7x: {
    rank: "0.000576",
    grade: { from: 0.000001, to: 0.001, value: 7 },
    status: "legacy"
  },
  QmeaYGKqdJHCstEPsS4iepvT5y6JZyuAKu87kFwz1yQE8x: {
    rank: "0.000576",
    grade: { from: 0.000001, to: 0.001, value: 'n/a' },
    status: "legacy"
  }
};

const Application = props => {
  const { openMenu, toggleMenu, newApp } = props;

  return (
    <Pane
      height="100vh"
      width="100vw"
      backgroundColor="#000"
      display="flex"
      alignItems="center"
    >
      <Pane padding="2em" width="100%">
        {Object.keys(links).map(key => {
          let text;
          if (
            links[key].type === "text" ||
            (links[key].type === "link" && links[key].status === "downloaded")
          ) {
            if (links[key].content.length > 300) {
              text = `${links[key].content.slice(0, 300)}...`;
            } else {
              text = links[key].content;
            }
          } else if (links[key].type === "image") {
            text = false;
          } else {
            text = key;
          }
          return (
            <SearchItem
              key={key}
              hash={key}
              text={text}
              rank={links[key].rank}
              grade={links[key].grade}
              status={links[key].status}
              size={links[key].size}
            >
              {links[key].type === "image" && (
                <img alt="img" src={links[key].content} />
              )}
              {/* {links[key].content} */}
            </SearchItem>
          );
        })}
        <a
          style={{
            textDecoration: "none",
            color: "#000"
          }}
          href={`https://ipfs.io/ipfs/`}
        >
          <SearchItem
            hash="1"
            text="Explore details of contrac"
            contentApp={<div>cybe...fhky</div>}
            status="sparkApp"
          />
        </a>
      </Pane>
    </Pane>
  );
};

storiesOf("Molecules|searchSnippet", module).add("searchSnippet", () => (
  <Application />
));
