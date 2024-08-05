import _clsx from "clsx";

const clsx = (...args) =>
  _clsx(...args)
    .replace(/^\n/, "")
    .replace(/\n/g, " ")
    .replace(/\s+/g, " ");

export default clsx;
