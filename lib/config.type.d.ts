interface ServerConfig {
  port: number,
  ip_addr: string,
  running?: boolean,
  static_dirs: string[],
  index_extnames: string[],
  base_dir: string,
}
