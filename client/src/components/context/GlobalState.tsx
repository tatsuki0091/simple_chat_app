"use client"
import React, { createContext, useReducer, useContext, ReactNode } from 'react';

// ステートの型
interface Session {
    _id: string;
    username: string;
    created: Date | null
}

// アクションの型
type Action =
    // | { type: 'INCREMENT' }
    | { type: 'SET' }
    | { type: 'DELETE'; payload: { username: string } };

// 初期ステート
const initialState: Session = {
    _id: '',
    username: '',
    created: null,
};

// リデューサー関数
const reducer = (state: Session, action: Action): Session => {
    switch (action.type) {
        case 'SET':
            return state;
        // case 'DECREMENT':
        //     return { ...state, count: state.count - 1 };
        case 'DELETE':
            const session = initialState
            return session;
        default:
            return state;
    }
};

// コンテキストオブジェクトを作成
const GlobalStateContext = createContext<{
    state: Session;
    dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

// カスタムフックを作成してコンテキストを使用
export function useGlobalState() {
    const context = useContext(GlobalStateContext);
    if (!context) {
        throw new Error('useGlobalState must be used within a GlobalStateProvider');
    }
    return context;
}

// コンテキストプロバイダーを作成
interface GlobalStateProviderProps {
    children: ReactNode;
}

export function GlobalStateProvider({ children }: GlobalStateProviderProps) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <GlobalStateContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalStateContext.Provider>
    );
}