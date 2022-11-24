import {DESKTOP, MOBILE, pixelize, TABLET, WIDE, X_WIDE} from '@/constants/size';

const breakpoints = {
  mobile: MOBILE,
  tablet: TABLET,
  desktop: DESKTOP,
  wide: WIDE,
  xwide: X_WIDE,
} as const;

type BreakpointName = keyof typeof breakpoints;
type Media = Record<BreakpointName, string>;

export const mediaQuery = (width: number) => `@media (min-width: ${pixelize(width)})`;

export const media = Object.entries(breakpoints).reduce((acc, [name, width]) => {
  acc[name as BreakpointName] = mediaQuery(width);
  return acc;
}, {} as Media);
