

##  一、规范目的

- 为提高团队协作效率

- 便于开发人员添加功能及前端后期优化维护

- 输出高质量的文档

## 二、开发工具规范

- webstorm
- vscode
- 微信开发者工具



## 三、技术栈规范

|      应用平台      | 框架 |    语言    | css扩展 |     ui库     | 包管理 |     构建     |                           基础模板                           |
| :----------------: | :--: | :--------: | :-----: | :----------: | :----: | :----------: | :----------------------------------------------------------: |
| pc web（已有项目） | vue2 | javascript |  sass   |  element-ui  |  npm   |   webpack    | [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin) |
|  pc web（新项目）  | vue3 | typescript |  sass   | element-plus |  pnpm  | vite/webpack | [vue3-element-admin](https://github.com/youlaitech/vue3-element-admin) |
|     微信小程序     |  /   |     /      |    /    |  Vant Weapp  |  npm   |      /       |                                                              |
|     跨端小程序     |  /   |     /      |    /    |      /       |   /    |      /       |                                                              |
|        app         |  /   |     /      |    /    |      /       |   /    |      /       |                                                              |



## 四、命名规范

为了让大家书写可维护的代码，而不是一次性的代码

让团队其他人看你的代码能一目了然

甚至一段时间时候后你再看你某个时候写的代码也能看

### 4.1 两种常用的命名法

- Pascal Case 大驼峰命名法
  - 首字母大写
  - eg: StudentInfo、UserInfo

- Case 小驼峰命名法
  - 首字母小写
  - eg: studentInfo、userInfo

### 4.2 文件夹/文件命名

注意：vue单文件组件（SFC）命名参考[vue风格指南](https://v2.cn.vuejs.org/v2/style-guide/#%E7%BB%84%E4%BB%B6%E6%96%87%E4%BB%B6%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90)

- 不得含有空格
- 建议使用小写字母，不使用大写字母
- 名称由多个单词组成，采用半角连接符(-)分隔

### 4.3 普通变量命名

- 命名方法 ：小驼峰命名法

- 命名规范 ：
  
  1. 命名必须是跟需求的内容相关的词，比如说我想申明一个变量，用来表示我的学校，那么我们可以这样定义`const mySchool = "我的学校"`;
  
  2. 命名是复数的时候需要加***s***或**list** ，比如说我想申明一个数组，表示很多人的名字，那么我们可以这样定义`const names = []`或`const nameList = []`;

### 4.4 常量命名

- 命名方法 : 全部大写
- 命名规范 : 使用大写字母和下划线来组合命名，下划线用以分割单词。

```ini
eg：
const MAX_COUNT = 10
const URL = 'https://www.baidu.com/'
```

### 4.5 method 方法命名

- 驼峰式命名，统一使用动词或者动词+名词形式

```arduino
//bad
go、nextPage、show、open、login

// good
jumpPage、openCarInfoDialog
```

- 请求数据方法，以 data 结尾

```arduino
//bad
takeData、confirmData、getList、postForm

// good
getListData、postFormData
```

- init、refresh 单词除外

- 尽量使用常用单词开头（set、get、go、can、has、is）

**附：** 函数方法常用的动词:

```bash
get 获取/set 设置,
add 增加/emove 删除
create 创建/destory 移除
start 启动/stop 停止
open 打开/close 关闭,
read 读取/write 写入
load 载入/save 保存,
create 创建/destroy 销毁
begin 开始/end 结束,
backup 备份/restore 恢复
import 导入/export 导出,
split 分割/merge 合并
inject 注入/extract 提取,
attach 附着/detach 脱离
bind 绑定/separate 分离,
view 查看/browse 浏览
edit 编辑/modify 修改,
select 选取/mark 标记
copy 复制/paste 粘贴,
undo 撤销/redo 重做
insert 插入/delete 移除,
add 加入/append 添加
clean 清理/clear 清除,
index 索引/sort 排序
find 查找/search 搜索,
increase 增加/decrease 减少
play 播放/pause 暂停,
launch 启动/run 运行
compile 编译/execute 执行,
debug 调试/trace 跟踪
observe 观察/listen 监听,
build 构建/publish 发布
input 输入/output 输出,
encode 编码/decode 解码
encrypt 加密/decrypt 解密,
compress 压缩/decompress 解压缩
pack 打包/unpack 解包,
parse 解析/emit 生成
connect 连接/disconnect 断开,
send 发送/receive 接收
download 下载/upload 上传,
refresh 刷新/synchronize 同步
update 更新/revert 复原,
lock 锁定/unlock 解锁
check out 签出/check in 签入,
submit 提交/commit 交付
push 推/pull 拉,
expand 展开/collapse 折叠
begin 起始/end 结束,
start 开始/finish 完成
enter 进入/exit 退出,
abort 放弃/quit 离开
obsolete 废弃/depreciate 废旧,
collect 收集/aggregate 聚集
```

### 4.6 Vue组件命名

**官方文档推荐及使用遵循规则：**

PascalCase (大驼峰)是最通用的**声明**约定

kebab-case (短横线分隔命名) 是最通用的**使用**约定

- 组件名应该始终是多个单词的，根组件 App 除外

- 有意义的名词、简短、具有可读性

- 命名遵循 大驼峰 约定

  - 单个项目公用组件以 项目名简称(tsrp：胸外科全量数据采集平台) 开头，如（`TsrpDatePicker, TsrpTable`）
  - 多个项目公用组件以 公司名简称(uvi：联合视觉) 开头，如（`UviDatePicker, UviTable`）
  - 页面内部组件以组件模块名简写为开头，Item 为结尾，如（`StaffBenchToChargeItem，StaffBenchAppNotArrItem`）

- 使用遵循 kebab-case (短横线分隔命名) 约定

  - 在页面中使用组件需要前后闭合，并以短线分隔，如（`<abcd-date-picker></abcd-date-picker>，<abcd-table></abcd-table>`）

- 导入及注册组件时，遵循 PascalCase 约定

- 同时还需要注意：必须符合自定义元素规范：切勿使用保留字。



## 五、目录结构规范

### 5.1 vue2

#### 5.1.1 目录文件夹及子文件规范

```lua
src                               源码目录
|-- data                            模拟数据，临时存放
|-- mock                             模拟接口，临时存放
|-- api                              接口，统一管理
|-- assets                           静态资源，统一管理
|-- components                       公用组件，全局文件
|-- directive                        全局指令
|-- filters                          全局过滤器
|-- icons                            图标
|-- layout                           全局layout
|-- styles                           全局样式
|-- router                           路由，统一管理
|-- store                            状态, 统一管理
|-- utils                            公用方法
|-- constants                        常量、类型定义等
|-- views                            视图目录
|   |-- staff-workbench                 视图模块名
|   |-- |-- index.vue                      模块入口页面
|   |-- |-- components                     模块通用组件文件夹
|-- App.vue                          入口页面
|-- main.js                          入口文件 加载组件 初始化等
```

#### 5.1.2 .vue文件基本结构

```xml
<template>
  <div>
     <!--必须在div中编写页面-->
  </div>
</template>

<script>
export default {
  name: '',
  components : {},
  props: {},
  data() {        
     return {}
  },
  computed: {},
  watch: {},
  // 生命周期钩子
  mounted() {}，
  ...
  destroyed() {},
  // 生命周期钩子
  methods: {}
}
</script>

<!--声明语言，并且添加scoped-->
<style lang="scss" scoped>
</style>
```

### 5.2 微信小程序

#### 5.2.1 目录文件夹及子文件规范

```lua
project-name                      项目目录
|-- config                           配置文件
|-- api                              接口，统一管理
|-- assets                           静态资源，统一管理
|-- components                       公用组件，全局文件
|-- utils                            公用方法
|-- pages                            页面目录
|   |-- staff-workbench                 页面模块名
|   |-- |-- index.json                     页面配置
|   |-- |-- index.wxml                     页面html
|   |-- |-- index.wxss                     页面css
|   |-- |-- index.js                       页面js
|-- app.js                           入口文件
|-- app.json                         全局配置文件
|-- app.wxss                         全局样式

```



## 六、注释规范

代码注释在一个项目的后期维护中显的尤为重要，所以我们要为公共组件、公共函数编写使用说明。

### 6.1 添加注释的范围要求

A: 必要的  B: 强烈推荐  C: 推荐

1. 【A】公共组件
2. 【A】公共函数、公共类
3. 【A】复杂的业务逻辑处理说明
4. 【B】特殊情况的代码处理说明，对于代码中特殊用途的变量、存在临界值、使用了某种算法或思路等需要进行注释描述
5. 【B】多重 if 判断语句

### 6.2 注释要求

1. 注释块必须以 `/**（至少两个星号）开头**/`

2. 单行注释使用 //

### 6.3 单行注释

注释单独一行，不要在代码后的同一行内加注释。例如：

```ini
bad
var name =”abc”; // 姓名    

good
// 姓名
var name = “abc”;         
```

### 6.4 多行注释

```ruby
公用组件使用说明、调用说明
/**
* 组件名称
* @desc 组件描述
* @author 组件作者
* @param {Object} [title]    - 参数说明
* @param {String} [columns]  - 参数说明
* @eg 调用示例
* <hbTable :title="title" :columns="columns" :tableData="tableData"></hbTable>
**/

公用函数说明
/**
* @desc 函数描述
* @param {string} [type]    - 参数说明
* @param {Date} [dateTime]  - 参数说明
* @returns {string}         - 返回值描述
* @eg:
*
*
**/
```



## 七、编程规范

优秀的项目源码，即使是多人开发，看代码也如出一人之手。

统一的编码规范，可使代码更易于阅读，易于理解，易于维护。

尽量通过工具自动化要求代码编写格式。

### 7.1 自动化工具

| 第三方工具 |   配置文件   |   忽略文件配置   |
| :--------: | :----------: | :--------------: |
|   ESLint   |  .eslintrc   |  .eslintignore   |
|  Prettier  | .prettierrc  | .prettierignore  |
| Stylelint  | .stylelintrc | .stylelintignore |

### 7.2 HTML

**1.缩进**

缩进使用 2 个空格（一个 tab）

嵌套的节点应该缩进

**2.语义化标签**

HTML5 中新增很多语义化标签，所以优先使用语义化标签，避免一个页面都是 div 或者 p 标 签。

**3.元素多个属性**

元素有多个特性应该分多行撰写，每个特性一行。(增强更易读)

```html
<!-- bad -->
<img src="https://vuejs.org/images/logo.png" alt="Vue Logo">
<my-component foo="a" bar="b" baz="c"></my-component>

<!-- good -->
<img
  src="https://vuejs.org/images/logo.png"
  alt="Vue Logo"
>
<my-component
  foo="a"
  bar="b"
  baz="c"
></my-component>
```

### 7.3 CSS

#### 7.3.1 通用规范

1. 统一使用"-"连字符

2. 省略值为 0 时的单位

```scss
// bad
padding-bottom: 0px;
margin: 0em;

// good
padding-bottom: 0;
margin: 0;
```

3. 如果 CSS 可以做到，就不要使用 JS

4. 建议并适当缩写值，提高可读性，特殊情况除外
   
   “建议并适当”是因为缩写总是会包含一系列的值，而有时候我们并不希望设置某一值，反而造成了麻烦，那么这时候你可以不缩写，而是分开写。
   
   当然，在一切可以缩写的情况下，请务必缩写，它最大的好处就是节省了字节，便于维护，并使阅读更加一目了然。

```scss
  // bad
  .box{
    border-top-style: none;
    font-family: palatino, georgia, serif;
    font-size: 100%;
    line-height: 1.6;
    padding-bottom: 2em;
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 0;
  }

  // good
  .box{
    border-top: 0;
    font: 100%/1.6 palatino, georgia, serif;
    padding: 0 1em 2em;
  }
 
```

5. 声明应该按照下表的顺序

左到右，从上到下

| 显示属性       | 自身属性      | 文本属性和其他修饰       |
| ---------- | --------- | --------------- |
| display    | width     | font            |
| visibility | height    | text-align      |
| position   | margin    | text-decoration |
| float      | padding   | vertical-align  |
| clear      | border    | white-space     |
| list-style | overflow  | color           |
| top        | min-width | background      |

```scss
  // bad
  .box {
    font-family: 'Arial', sans-serif;
    border: 3px solid #ddd;
    left: 30%;
    position: absolute;
    text-transform: uppercase;
    background-color: #eee;
    right: 30%;
    isplay: block;
    font-size: 1.5rem;
    overflow: hidden;
    padding: 1em;
    margin: 1em;
  }

  // good
  .box {
    display: block;
    position: absolute;
    left: 30%;
    right: 30%;
    overflow: hidden;
    margin: 1em;
    padding: 1em;
    background-color: #eee;
    border: 3px solid #ddd;
    font-family: 'Arial', sans-serif;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
 
```

6. 元素选择器应该避免在 scoped 中出现
   
   [官方文档说明](https://link.juejin.cn?target=https%3A%2F%2Fcn.vuejs.org%2Fv2%2Fstyle-guide%2F%23scoped-%25E4%25B8%25AD%25E7%259A%2584%25E5%2585%2583%25E7%25B4%25A0%25E9%2580%2589%25E6%258B%25A9%25E5%2599%25A8-%25E8%25B0%25A8%25E6%2585%258E%25E4%25BD%25BF%25E7%2594%25A8 "https://cn.vuejs.org/v2/style-guide/#scoped-%E4%B8%AD%E7%9A%84%E5%85%83%E7%B4%A0%E9%80%89%E6%8B%A9%E5%99%A8-%E8%B0%A8%E6%85%8E%E4%BD%BF%E7%94%A8")：在 scoped 样式中，类选择器比元素选择器更好，因为大量使用元素选择器是很慢的。

7. 分类的命名方法
   
   使用单个字母加上"-"为前缀
   
   布局（grid）（.g-）；
   
   模块（module）（.m-）；
   
   元件（unit）（.u-）；
   
   功能（function）（.f-）；
   
   皮肤（skin）（.s-）；
   
   状态（.z-）。

8. 统一语义理解和命名

布局（.g-）

| 语义    | 命名       | 简写       |
| ----- | -------- | -------- |
| 文档    | doc      | doc      |
| 头部    | head     | hd       |
| 主体    | body     | bd       |
| 尾部    | foot     | ft       |
| 主栏    | main     | mn       |
| 主栏子容器 | mainc    | mnc      |
| 侧栏    | side     | sd       |
| 侧栏子容器 | sidec    | sdc      |
| 盒容器   | wrap/box | wrap/box |

模块（.m-）、元件（.u-）

| 语义  | 命名           | 简写    |
| --- | ------------ | ----- |
| 导航  | nav          | nav   |
| 子导航 | subnav       | snav  |
| 面包屑 | crumb        | crm   |
| 菜单  | menu         | menu  |
| 选项卡 | tab          | tab   |
| 标题区 | head/title   | hd/tt |
| 内容区 | body/content | bd/ct |
| 列表  | list         | lst   |
| 表格  | table        | tb    |
| 表单  | form         | fm    |
| 热点  | hot          | hot   |
| 排行  | top          | top   |
| 登录  | login        | log   |
| 标志  | logo         | logo  |
| 广告  | advertise    | ad    |
| 搜索  | search       | sch   |
| 幻灯  | slide        | sld   |
| 提示  | tips         | tips  |
| 帮助  | help         | help  |
| 新闻  | news         | news  |
| 下载  | download     | dld   |
| 注册  | regist       | reg   |
| 投票  | vote         | vote  |
| 版权  | copyright    | cprt  |
| 结果  | result       | rst   |
| 标题  | title        | tt    |
| 按钮  | button       | btn   |
| 输入  | input        | ipt   |

功能（.f-）

| 语义   | 命名                  | 简写  |
| ---- | ------------------- | --- |
| 浮动清除 | clearboth           | cb  |
| 向左浮动 | floatleft           | fl  |
| 向右浮动 | floatright          | fr  |
| 内联块级 | inlineblock         | ib  |
| 文本居中 | textaligncenter     | tac |
| 文本居右 | textalignright      | tar |
| 文本居左 | textalignleft       | tal |
| 垂直居中 | verticalalignmiddle | vam |
| 溢出隐藏 | overflowhidden      | oh  |
| 完全消失 | displaynone         | dn  |
| 字体大小 | fontsize            | fs  |
| 字体粗细 | fontweight          | fw  |

皮肤（.s-）

| 语义   | 命名                 | 简写  |
| ---- | ------------------ | --- |
| 字体颜色 | fontcolor          | fc  |
| 背景   | background         | bg  |
| 背景颜色 | backgroundcolor    | bgc |
| 背景图片 | backgroundimage    | bgi |
| 背景定位 | backgroundposition | bgp |
| 边框颜色 | bordercolor        | bdc |

状态（.z-）

| 语义  | 命名       | 简写    |
| --- | -------- | ----- |
| 选中  | selected | sel   |
| 当前  | current  | crt   |
| 显示  | show     | show  |
| 隐藏  | hide     | hide  |
| 打开  | open     | open  |
| 关闭  | close    | close |
| 出错  | error    | err   |
| 不可用 | disabled | dis   |

#### 7.3.2 sass 规范

当使用 Sass 的嵌套功能的时候，重要的是有一个明确的嵌套顺序，以下内容是一个 SCSS 块应具有的顺序。

1. 当前选择器的样式属性
2. 父级选择器的伪类选择器 (:first-letter, :hover, :active etc)
3. 伪类元素 (:before and :after)
4. 父级选择器的声明样式 (.selected, .active, .enlarged etc.)
5. 用 Sass 的上下文媒体查询
6. 子选择器作为最后的部分

```scss
  .product-teaser {
    // 1. Style attributes
    display: inline-block;
    padding: 1rem;
    background-color: whitesmoke;
    color: grey;

    // 2. Pseudo selectors with parent selector
    &:hover {
      color: black;
    }

    // 3. Pseudo elements with parent selector
    &:before {
      content: "";
      display: block;
      border-top: 1px solid grey;
    }

    &:after {
      content: "";
      display: block;
      border-top: 1px solid grey;
    }

    // 4. State classes with parent selector
    &.active {
      background-color: pink;
      color: red;

      // 4.2. Pseuso selector in state class selector
      &:hover {
        color: darkred;
      }
    }

    // 5. Contextual media queries
    @media screen and (max-width: 640px) {
      display: block;
      font-size: 2em;
    }

    // 6. Sub selectors
    > .content > .title {
      font-size: 1.2em;

      // 6.5. Contextual media queries in sub selector
      @media screen and (max-width: 640px) {
        letter-spacing: 0.2em;
        text-transform: uppercase;
      }
    }
  }
 
```

#### 7.3.3 特殊规范

- 对用页面级组件样式，应该是有作用域的
- 对于公用组件或者全局组件库，我们应该更倾向于选用基于 class 的 [BEM](https://juejin.cn/post/6844903672162304013)(块block、元素element、修饰符modifier) 命名

```xml
<style lang='scss'></style> // bad

<!-- 使用 scoped 作用域 -->
<style lang='scss' scoped></style> // good

<!-- 使用 BEM 约定 -->
<style>
  // good
 .c-Button {
    border: none;
    border-radius: 2px;
  }
 .c-Button--close {
    background-color: red;
  }
</style>
```

### 7.4 JavaScript

参照Airbnb JavaScript[风格指南](https://github.com/lin-123/javascript#airbnb-javascript-%E9%A3%8E%E6%A0%BC%E6%8C%87%E5%8D%97-)

### 7.5 Vue

参照Vue官方文档[风格指南](https://v2.cn.vuejs.org/v2/style-guide/)篇章



## 八、Git规范

- 方便跟踪工程历史
- 方便快速回溯代码
- 方便 Code Review
- 方便生成 CHANGELOG
- 提高项目的整体质量，提高个人工程素质

### 8.1 git commit规范

**实践：结合git hooks规范提交信息**

```
<type>(<scope>): <subject>
// 注意冒号 : 后有空格
// eg: feat(user): 增加用户中心的 xx 功能
```

- `scope` 表示 commit 的作用范围，如用户中心、购物车中心，也可以是目录名称，一般可以限定几种；
- `subject` 用于对 commit 进行简短的描述；
- `type` 必填，表示提交类型，值一般有以下几种：

```lua
wip：      功能开发中
feat：     新功能 feature
types：    类型定义文件修改
bug：      测试反馈 bug 列表中的 bug 号
fix：      修复 bug
ui：       更新ui
docs：     文档注释变更
style：    代码格式(不影响代码运行的变动)
refactor： 重构、优化(既不增加新功能，也不是修复bug)
merge：    合并分支
perf：     性能优化
test：     增加测试
chore：    依赖更新/项目配置修改等
revert：   回退（撤销修改）
workflow： 工作流改进
build：    打包
deploy：   部署
release：  发布
ci：       持续集成
```

