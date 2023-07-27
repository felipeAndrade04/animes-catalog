import { ConfigProvider } from 'antd';
import theme from '@app/theme';

import '@app/styles/antd.less';
import '@app/styles/global.less';

function MyApp({ Component, pageProps }) {
  return (
    <ConfigProvider theme={theme}>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}

export default MyApp;
