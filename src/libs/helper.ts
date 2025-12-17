export const readableDate = (
  date: Date,
  options?: Intl.DateTimeFormatOptions,
) => {
  const opt: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    ...options,
  };
  return date.toLocaleDateString("us-US", opt);
};

export const monthYearDateFormat = (
  date: Date,
  options?: Intl.DateTimeFormatOptions,
) => {
  const opt: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    ...options,
  };
  return date.toLocaleDateString("en-US", opt);
};

export const getDomainFromUrl = (url: string): string => {
  try {
    // Remove protocol (http://, https://)
    let domain = url.replace(/^https?:\/\//, "");
    
    // Remove www.
    domain = domain.replace(/^www\./, "");
    
    // Extract domain/subdomain (everything up to the first /)
    domain = domain.split("/")[0];
    
    return domain;
  } catch {
    return url;
  }
};
