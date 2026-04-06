//importação de tipos diretamente do express
import type { Request, Response, NextFunction } from "express";



//recebe a funcao por parametro(nn importa se é async ou nn) e garante que seja tratada como promise
export const asyncHandler = (fn: (req:Request, res:Response, next:NextFunction) => Promise<any>)=>{

    //retorna para um middleware de erros que executa a funcao, o objetivo diminuir o uso de try/catch repetitivo
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};