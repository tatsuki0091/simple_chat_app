import session from "express-session";

// セッションチェックミドルウェアの定義
import { Request, Response, NextFunction } from "express";

// const sessionCheckMiddleware = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   if (req.session && req.session.user) {
//     // セッションにユーザーが存在する場合
//     next(); // 次のミドルウェアやルートハンドラに処理を渡す
//   } else {
//     // セッションにユーザーが存在しない場合
//     res.status(401).send("Unauthorized"); // 401 Unauthorizedエラーを返す
//   }
// };
