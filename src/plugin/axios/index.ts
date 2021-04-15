/**
 * @author  sparkHou
 * @date 2021-04-16 00:07
 * @Description:
 */
//import Vue from 'vue';
import getUrl from './url';
import instance from './instance';
import {AxiosRequest, CustomResponse} from './interface';

class Abstract {
  // 外部传入的baseUrl
  protected baseURL: string = process.env.VUE_APP_BaseURL || '';
  // 自定义header头
  protected headers: object = {
    ContentType: 'application/json;charset=UTF-8'
  }

  private apiAxios({
                     baseURL = this.baseURL,
                     headers = this.headers,
                     method = 'GET',
                     url,
                     data,
                     params,
                     responseType
                   }: AxiosRequest): Promise<CustomResponse> {

    // url解析
    const _url = (url as string).split('.');
    url = getUrl(_url[0], _url[1]).url;
    method = getUrl(_url[0], _url[1]).method;
    //post方法把params赋给data
    if (method === 'POST') {
      data = JSON.parse(JSON.stringify(params))
      params = null
    }
    return new Promise((resolve, reject) => {
      instance({
        baseURL,
        headers,
        method,
        url,
        params,
        data,
        responseType
      }).then((res) => {
        // 200:服务端业务处理正常结束
        if (res.status === 200) {
          if (res.data.success) {
            resolve({status: true, message: 'success', data: res.data?.data, origin: res.data});
          } else {
            // TODO Vue.prototype.$message({type: 'error', message: res.data?.errorMessage || (url + '请求失败')});
            resolve({
              status: false,
              message: res.data?.errorMessage || (url + '请求失败'),
              data: res.data?.data,
              origin: res.data
            });
          }
        } else {
          resolve({status: false, message: res.data?.errorMessage || (url + '请求失败'), data: null});
        }
      }).catch((err) => {
        const message = err?.data?.errorMessage || err?.message || (url + '请求失败');
        // TODO Vue.prototype.$message({type: 'error', message});
        // eslint-disable-next-line
        reject({status: false, message, data: null});
      });
    });
  }

  /**
   *
   * @param url
   * @param params
   */
  protected req({baseURL, headers, url, params, responseType}: AxiosRequest) {
    return this.apiAxios({baseURL, headers, url, params, responseType});
  }

  // /**
  //  * GET类型的网络请求
  //  */
  // protected getReq({baseURL, headers, url, data, params, responseType}: AxiosRequest) {
  //   return this.apiAxios({baseURL, headers, method: 'GET', url, data, params, responseType});
  // }
  //
  // /**
  //  * POST类型的网络请求
  //  */
  // protected postReq({baseURL, headers, url, data, params, responseType}: AxiosRequest) {
  //   return this.apiAxios({baseURL, headers, method: 'POST', url, data, params, responseType});
  // }
  //
  // /**
  //  * PUT类型的网络请求
  //  */
  // protected putReq({baseURL, headers, url, data, params, responseType}: AxiosRequest) {
  //   return this.apiAxios({baseURL, headers, method: 'PUT', url, data, params, responseType});
  // }
  //
  // /**
  //  * DELETE类型的网络请求
  //  */
  // protected deleteReq({baseURL, headers, url, data, params, responseType}: AxiosRequest) {
  //   return this.apiAxios({baseURL, headers, method: 'DELETE', url, data, params, responseType});
  // }
}

export default Abstract;
