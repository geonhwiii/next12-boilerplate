import NextFont from '@next/font/local';

export const localFont = NextFont({
  src: [
    {path: '../../assets/fonts/PretendardStd-Bold.woff2', weight: 'bold'},
    {path: '../../assets/fonts/PretendardStd-Regular.woff2', weight: 'normal'},
  ],
  preload: true,
});
