import { Request, Response } from "express";

type ctx = { req:Request, res:Response }

/**设置页面数据 */
export let data = (f:<T=any>(ctx:ctx)=>T)=>f

/**渲染页面数据 */
export let render = (f:<T=any>(ctx:ctx,data?:T)=>string|Promise<string>)=>f
