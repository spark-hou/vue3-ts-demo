/**
 * @author  sparkHou
 * @date 2021-04-16 01:00
 * @Description:
 */
import Abstract from '@/plugin/axios';
import {GetDemo, PostDemo} from '@/plugin/axios/interface';

class Basic extends Abstract {

  /**
   * get示例
   */
  getDemo(params: GetDemo) {
    return this.req({url: 'Basic.GetDemo', params});
  }

  /**
   * post示例
   */
  postDemo(params: PostDemo) {
    return this.req({url: 'Basic.PostDemo', params});
  }

}

// 单列模式返回对象
let instance;
export default (() => {
  if (instance) return instance;
  instance = new Basic();
  return instance;
})();
