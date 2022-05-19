import { atom } from "recoil";

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "/",
});

export const isClickedNumState = atom({
  key: "isClickedNumState",
  default: 0,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});
