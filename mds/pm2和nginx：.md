pm2和nginx：

* pm2:
  * 特点：
    * 进程守护-稳定
    * 多进程（一般一核一进程）-高效
    * 日志记录-问题可追溯
  * 基本使用：
    * 详见官网api
  * pm2日志拆分
    * 目的：防止大量日志存放在一个文件里，信息的辨识度降低
    * 工具库：pm2-logrotate
    * pm2-logrotate具体配置：见官网
    * 其中拆分时间定时规则：pm2-logrotate:rotateInterval * * * * * *      6个*号遵循crontab定时规则

* nginx
  * 功能
    * ⭐️静态服务：html、css、js、图片的获取
    * ⭐️反向代理：外界访问服务->nginx->服务器
    * 负载均衡
    * access log（访问日志）
  * 基本使用：见官网
  * 日志拆分：
    * 工具库：logrotate（推荐）/crontab





