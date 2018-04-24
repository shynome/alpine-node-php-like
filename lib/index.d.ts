import { Request, Response } from "express";

type ctx = { req:Request, res:Response }

/**设置页面数据 */
export let data = <T>(f:(ctx:ctx)=>T)=>f

/**渲染页面数据 */
export let render = (f:(ctx:ctx)=>string|Promise<string>)=>f
