/// <reference path="./config.type.d.ts" />

module.exports = /**@type {ServerConfig}*/({
  ip_addr: '0.0.0.0',
  port: 80,
  running: false,
  static_dirs: ['public','upload','asserts','static','images','js','css','fonts'],
  base_dir: process.cwd(),
  index_extnames: ['index.page.js','index.html','index.htm'],
})