import React from "react";
import { storiesOf } from "@storybook/react";
import { Pane } from "evergreen-ui";

import { SearchItem } from "./SearchItem";

const links = {
  QmeaYGKqdJHCstEPsS4iepvT5y6JZyuAKu87kFwz1yQEyx: {
    rank: "0.000576",
    grade: { from: 0.000001, to: 0.001, value: 3 },
    status: "success",
    content: "data:text/plain;base64,SGV5IQoKSSBoYXZlIG5vIGlkZWEgd2hhdCB0aGlzIG1lYW5zLiBCdXQgSSBndWVzcyB5b3UgY2FuIGtub3cgZm9yIHN1cmUuIEN5YmVybGluayBpdC4KCldoYXQgaXMgY3liZXJsaW5rPwoKWW91IGhhdmUgcHJvYmFibHkgdXNlZCBsaW5rcyB3aGljaCBsb29rIGxpa2UgdGhpczogaHR0cHM6Ly9nb29nbGUuY29tLiBFdmVudHVhbGx5IHRoZSByZXF1ZXN0IHRvIHRoaXMgbGluayByZXNvbHZlcyB0byBhIHBhcnRpY3VsYXIgbWFjaGluZSB3aGljaCB3aWxsIHNob3cgeW91ciBvbGQgZ29kLiBZb3UgY2FudCBrbm93IGZvciBzdXJlIHdoYXQgeW91IGdldC4gQ3liZXJsaW5rcyBhcmUgZGlmZmVyZW50LiBDeWJlcmxpbmsgaXMgYSBsaW5rIGJldHdlZW4gdHdvIHBpZWNlcyBvZiBjb250ZW50IHRoZXJlIGVhY2ggY29udGVudCBpcyBhZGRyZXNzZWQgYnkgaXRzIGhhc2guIENoYW5naW5nIHRoZSB3YXkgd2UgbGluayB0aGluZ3Mgd2UgbWFrZSB0aGUgR3JlYXQgV2ViIGNsb3Nlcgo="
  },
  QmeaYGKqdJHCstEPsS4iepvT5y6JZyuAKu87kFwz1yQE2x: {
    rank: "0.000576",
    grade: { from: 0.000001, to: 0.001, value: 4 },
    status: "loading",
    content: "dfcvgbggbg2"
  },
  QmeaYGKqdJHCstEPsS4iepvT5y6JZyuAKu87kFwz1yQE3x: {
    rank: "0.000576",
    grade: { from: 0.000001, to: 0.001, value: 5 },
    status: "failed",
    content: "QmeaYGKqdJHCstEPsS4iepvT5y6JZyuAKu87kFwz1yQE3x"
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
        {Object.keys(links).map(key => (
          <SearchItem
            key={key}
            hash={key}
            rank={links[key].rank}
            grade={links[key].grade}
            status={links[key].status}
          >
            {links[key].status !== "success" ? (
              key
            ) : (
              <iframe style={{ width: '100%', border: 'none' }} src={links[key].content} />
            )}
          </SearchItem>
        ))}
      </Pane>
    </Pane>
  );
};

storiesOf("Molecules|searchSnippet", module).add("searchSnippet", () => (
  <Application />
));
