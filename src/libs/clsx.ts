import _clsx from "clsx";

const clsx = (...args : string[]) =>
  _clsx(...args)
    .replace(/^\n/, "")
    .replace(/\n/g, " ")
    .replace(/\s+/g, " ");

export default clsx;
