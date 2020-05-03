import axios from 'axios'

export default function ajax(url = '', params = {}, type = 'GET') {
  return new Promise((resolve,reject)=>{
    const obj = {
      method:type,
      url,
      //withCredentials: true//我想要跨域带上cookies
    };
    switch (obj.method.toUpperCase()) {
        //GET 与 DELETE请求发送数据为 params
        //其他请求(post,put)请求时发送数据用data
      case 'GET':
      case 'DELETE':
        obj.params = params
        break;
      default:
        obj.data = params
    }
    axios(obj)
        .then(response=>{
          resolve(response.data)
        })
        .catch(err=>{
          // console.error(">>>",err);
          reject(err)
        })
  })
}

/**
  使用:
  import ajax from './ajax'

  // 1. 定义基础路径
  const BASE_URL = '/local_api'; 
  // 2. POST
  export const pwdLogin = (name, pwd, captcha)=> ajax(BASE_URL + '/api/login_pwd', {name, pwd, captcha}, 'POST');
  // 3. GET
  export const getPhoneCode = (phone) => ajax(BASE_URL + '/api/send_code', {phone});
*/
