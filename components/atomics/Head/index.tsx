import NextHead from 'next/head';

export type HeadProps = {
  readonly title?: string;
  readonly description?: string;
  readonly keywords?: string;
  readonly imgsrc?: string;
};

const Head = ({title}: HeadProps) => {
  return (
    <NextHead>
      <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no' />
      <meta data-hid='og:type' name='og:type' property='og:type' content='website' />
      <meta data-hid='og:title' name='og:title' property='og:title' content='마이 굿즈: My Goods' />
      <meta data-hid='og:description' name='og:description' property='og:description' content='굿즈를 가장 쉽고 편하게 거래하는 곳' />
      <title>{title}</title>
      <script type='application/ld+json'>{'next_script'}</script>
    </NextHead>
  );
};

export default Head;
