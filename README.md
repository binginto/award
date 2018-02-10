# award

## 抽奖网页

![主截图](
http://otfpsk942.bkt.clouddn.com/award_main.png "主页面")

![左侧截图](
http://otfpsk942.bkt.clouddn.com/award_left.png "左侧页面")


## 配置修改
### 抽奖名单数据数据
抽奖名单数据为json文件，存放在/award/src/data/work.json。要替换名单内容可修改json文件。

### 名单格式规范
{
 "workers": [
{"id":"021000273","name":"石头人"},
{"id":"100307755","name":"大时代"},
{"id":"111210835","name":"hehe"},
{"id":"110810392","name":"jj"}
]
}


### 奖项设置
 如网页左侧所示，网页分为4个部分。预设现金抽奖，预设物品抽奖，额外突发的补充抽奖，中单名单保存，清除。
 其中预设现金抽奖，预设物品抽奖为可改动。
 改动文件位于/award/src/js/config.js
 
### 奖项格式规范

 var dataArr = [{
	name:"cash_1",
	award:"特等奖",
	describe: '(RMB1000元)',
	num:'(1人)',
	startNum:1,
	type:'cash'
}];

奖项拥有name,award,describe,num,startNum,type这几个属性。


## 放置部署
  该项目为简单的前端项目，无后台。但由于涉及读取json文件数据，所以需要放置在服务器下，可放置在常见的wamp 或tomcat服务器环境下运行。以wamp为例，项目代码放置在wamp根目录中，打开http://localhost/award/src/home.html#/  即可。thanks.

  
  
 
