declare module 'express-session' {
    interface SessionData {
        username: string;
        // 他のセッション変数の型をここに追加
    }
}