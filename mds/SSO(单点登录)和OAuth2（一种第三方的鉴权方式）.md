SSO(单点登录)和OAuth2（一种第三方的鉴权方式）:

* SSO是OAuth2的一个实现案例
* SSO通过一个统一的鉴权机构来对不同于名下的应用进行授权token解析，解析通过了就成功授权，与此同时各个域名也可以签发自己的校验证书，以便下次登录系统直接登录，无需走SSO

