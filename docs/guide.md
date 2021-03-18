
# VuePress+github.io搭建个人博客

### 步骤一：

```sh
git clone https://github.com/Ellsom1945/Ellsom1945.github.io.git
```



### 步骤二：下载Node.js <https://nodejs.org/en/>

### 步骤三：

```shell
npm install -g vuepress
```



### 步骤四：创建一个名为username.git.io的repository

### 步骤五：修改本地克隆项目中的deploy中push地址为步骤四地址

###  步骤六：

```shell
npm run deploy
```

# tips：

* 在clone和push时，会遇到网速过慢的问题，这里建议采用修改git配置文件的方法，使用

  ```shell
  git config --global http.https://github.com.proxy http://127.0.0.1:xxxx
  ```

* **其中xxxx指的是你代理服务器的端口号**

 