# 在Node.js中引入模块

Node中有两个核心模块来对模块依赖进行管理:

1. require模块。
2. module模块。

```js
const config = require('/path/to/file')
```

Node调用require()函数，Node会经过如下步骤：

1. Resolving: 找到文件的绝对路径。
2. Loading: 判断文件内容类型。
3. Wrapping: 打包，给这个文件赋予一个私有作用范围。这是使require和module模块在本地引用的一种方法。
4. Evaluating: VM对加载的代码进行处理的地方。
5. Caching: 当再次需要用这个文件的时候，不需要重复一遍上面步骤。

## 1. Resolving - 解析本地路径

在控制台中查看module对象。

```sh
~/xxx $ node
> module
```

```sh
> module.paths
[ '/xxx/xxx/xxx/node_modules',
  '/xxx/xxx/node_modules',
  '/xxx/node_modules',
  '/node_modules',
  '/xxx/.node_modules',
  '/xxx/.node_libraries',
  '/xxx/lib/node' ]
```

这个路径列表基本上包含了从当前目录到根目录的所有路径中的 node_modules 目录。其中还包含了一些不建议使用的遗留目录。如果 Node 在上面所有的目录中都没有找到 find-me.js，会抛出一个“cannot find module error.”错误。

```sh
~/learn-node $ node
    > require('find-me')
    Error: Cannot find module 'find-me'
```
