import clsx from "@/lib/clsx";

/**
 * @typedef {{
 * cols: string,
 * colsSm: string,
 * colsMd: string,
 * colsLg: string,
 * colsXl: string
 * rows: string,
 * rowsSm: string,
 * rowsMd: string,
 * rowsLg: string,
 * rowsXl: string
 * }} Custom
 *
 * @param {Custom} props
 */

const Cell = ({
  className = "relative",

  cols = "auto_full",
  colsSm,
  colsMd,
  colsLg,
  colsXl,

  rows = "auto_auto",
  rowsSm,
  rowsMd,
  rowsLg,
  rowsXl,

  ...rest
}) => {
  const cn = [];
  if (cols) cn.push(`_cols-${cols}`);
  if (colsSm) cn.push(`sm:_cols-${colsSm}`);
  if (colsMd) cn.push(`md:_cols-${colsMd}`);
  if (colsLg) cn.push(`lg:_cols-${colsLg}`);
  if (colsXl) cn.push(`xl:_cols-${colsXl}`);

  if (rows) cn.push(`_rows-${rows}`);
  if (rowsSm) cn.push(`sm:_rows-${rowsSm}`);
  if (rowsMd) cn.push(`md:_rows-${rowsMd}`);
  if (rowsLg) cn.push(`lg:_rows-${rowsLg}`);
  if (rowsXl) cn.push(`xl:_rows-${rowsXl}`);

  return <div className={clsx(cn, className)} {...rest} />;
};

export default Cell;
