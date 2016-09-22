Tree-shaking: rollup vs webpack
===============================

This repository contains two examples of _rollup_ and _webpack_.

Both examples creates a bundle of the contents of `source/`
and performs minimization and tree-shaking of the resulting code.

| Tool     | minimized | gzipped   |
| -------- | --------: | --------: |
| RollupJS | 108 bytes |  94 bytes |
| Webpack  | 793 bytes | 393 bytes |
| Webpack (without loader) | 325 bytes | 177 bytes |

> Note: the webpack without loader version is modified manually 
> to remove the loader code which has the same length 
> regardless the length of the bundle.

How to build
------------

```bash
$ ./build.sh
```


Learn more
----------

- http://david-rodenas.com/#!/posts/rollup-vs-webpack-and-tree-shaking