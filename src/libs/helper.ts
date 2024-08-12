export const readableDate = (
  date: Date,
  options?: Intl.DateTimeFormatOptions,
) => {
  const opt: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  };
  return date.toLocaleDateString('us-US', opt);
};
