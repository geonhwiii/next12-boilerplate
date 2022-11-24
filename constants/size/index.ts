export const pixelize = <S extends number>(size: S) => `${size}px` as const;

export const MOBILE = 500;
export const TABLET = 768;
export const DESKTOP = 1024;
export const WIDE = 1200;
export const X_WIDE = 1440;

const HEADER_HEIGHT = 64;
const HEADER_HEIGHT_PX = pixelize(HEADER_HEIGHT);

export const size = {HEADER_HEIGHT_PX};
