---
title: Cookie和Session
date: 2021-03-25
categories:
- tech 
tags:
- javaweb
- cookie
- session
---

## Cooike

### 1、含义：

​		服务器颁发给客户的识别码（通行证），用来获取/确认用户的身份信息，一般由浏览器保存在本地（以键值对的形式<String,String>）

### 2、使用：

​		首先可以利用Java的Cookie类自定义Cookie，服务器通过request.getCookie()获取一个Cookie数组，通过response.addCookie()向客户端发送cookie，至于如何发送和接收，就交给Servlet了，Servlet就单独写吧

### 3、API：

- setMaxAge(int ttl):表示cookie本地保存时间，如果设置为-1表示，页面关闭后就被删除，为0表示删除（只能通过这种方式删除），默认为-1

- SetPath(String url):设置cookie有效路径，如果为“/”那么作用域为本域名下的contextpath

- setDomain(String pattern):设置能访问cookie的有效域名，必须以“.”开头

### Tips：

- 要修改Cookie的话得先get再重新set然后将Cookie加到响应头，删除同理，要把Cookie先get到手再setMaxAge(0)
- domain表示的是cookie所在的域，默认为请求的地址，如网址为www.study.com/study，那么domain默认为www.study.com,要想实现跨域访问（比如单点登录），一般采用将作用域设置为父级域

## Session

### 1、含义：

​		服务器用来记录客户的注册表，用来保存长期有效的信息（也是以键值对的形式，但是可以保存非String类型value<String,Object>）

### 2、使用：

​		由于Session是当用户访问服务器时服务器自己创建的，所以只能通过request.getSession()来获取，至于为什么要从request获取：在tomcat中，HTTPProcessor负责解析用户请求，会对HTTP请求头部分析，如果发现存在jsessionid这样的cookie，就把cookie值set到HttpSevletRequest对象中，所以如果存在SessionID，getSession的时候就直接通过id找到session并返回，如果没有id就会创建一个session并在response的的SetHeader方法中，检查Request中Session对象是否存在，如果存在，则把SessionId写在Set－Cookie首部

### 3、API：

- isNew():是否是一个新创建的session

- set/getAttribute(String name):绑定/获取对象

- invalidate():指示该 session 会话无效，并解除绑定到它上面的任何对象

### TIPS:

- 关于session失效时间，tomcat里面在web.xml中直接配置即可,单位：分钟

  ```xml
    <session-config>
      <session-timeout>15</session-timeout>
    </session-config>
  ```



