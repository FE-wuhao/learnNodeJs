session和jwt(json web token):

* session和cookie是绑定使用的，cookie是浏览器的默认行为，每次进行访问服务器的时候都会自动带上cookie，但cookie里面只存储简单信息，如用户id，真正的信息都存在服务端的session表中，通过用户id来映射session的表单项，进而获取到用户信息明细
* jwt则是在用户进行登录的时候服务端生成一个token字符串，返回给客户端，客户端存储起来，然后每次客户端访问服务端的时候，服务端对token进行解密，校验通过以后再响应接口结果
* 区别：
  * session将信息存在服务端，而jwt将信息存在客户端
  * session由于内存隔离的原因，多个线程内存存放的东西是无法互相访问的，所以依赖第三方缓存服务(redis)来做缓存，随着访问量的增大，redis缓存的东西的增多，会带来很大的服务费用的支出；而token由于是存储在客户端的，服务端每次解析客户端传入的token来进行鉴权，无需占用服务端的内存，且无多线程的限制。
  * session可以快速封禁用户（从session表中移除用户的信息项即可），但jwet做不到（token存在客户端，服务端无法手动去删除客户机浏览器上的内容）

