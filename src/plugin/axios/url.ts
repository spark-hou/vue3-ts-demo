/**
 * @author  sparkHou
 * @date 2021-04-16 00:23
 * @Description:
 */
import {Method} from './interface'

interface UrlDict {
  [key: string]: {
    [key: string]: {
      url: string,
      method: Method
    };
  };
}

const urlDict: UrlDict = {
  Basic: {
    GetDemo: {
      url: 'admin/get',
      method: 'GET'
    },
    PostDemo: {
      url: 'admin/post',
      method: 'POST'
    },
  }
};

const getUrl = (biz: string, UrlName: string): any => {
  try {
    const bizKeys = Object.keys(urlDict);
    if (bizKeys.indexOf(biz) < 0) {
      throw new Error('biz not in Dict');
    }
    const hostname = urlDict[biz][UrlName];
    if (!hostname) {
      throw new Error('url not in Dict');
    }
    if (hostname.url.substr(0, 1) === '/') {
      hostname.url = hostname.url.substr(1);
    }
    return hostname;
  } catch (err) {
    console.error(err);
    return {
      url: '',
      method: 'GET'
    };
  }
};

export default getUrl;
