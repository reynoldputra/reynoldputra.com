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

export const yearsOfExperience = (now: Date = new Date()): number => {
  const start = new Date(2022, 8, 1);
  let years = now.getFullYear() - start.getFullYear();
  if (now < new Date(now.getFullYear(), 8, 1)) years -= 1;
  return Math.max(0, years);
};
