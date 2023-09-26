import { NextRequest, NextResponse } from 'next/server'
import { NextApiRequest, NextApiResponse } from 'next';
import { useGlobalState } from './components/context/GlobalState';
import { useSession, signIn, signOut } from 'next-auth/react'
import { axiosMethods } from "./helpers/axios/axiosMap";
import Cookies from 'js-cookie';
import { useForm } from "./hooks/useForm";
import { GET } from "./helpers/constants";
import axios from 'axios'

export async function middleware(request: NextRequest, context: NextApiResponse) {


  // Since Axios cannot be used in middleware, the fetch method is used here.
  // const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/session`)
  //   .then((response) => {
  //     // レスポンスをJSON形式に変換
  //     return response.json();
  //   })
  //   .then((data) => {
  //     // データを処理
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     // エラーハンドリング
  //     console.error('Fetchエラー:', error);
  //   });
  // console.log(request.headers.get('cookie'))

  const trimCookie = request.headers.get('cookie')?.split(';')
  // const [name, value] = cookie.trim().split('=');
  // const decodedValue = decodeURIComponent(request.headers.get('cookie'));
  let jsonValue = null
  if (trimCookie !== undefined) {
    for (const cookie of trimCookie) {
      const [name, value] = cookie.trim().split('=');
      if (name === 'session') {
        // JSON形式のCookieをデコードしてJSONオブジェクトに変換
        try {
          const decodedValue = decodeURIComponent(value);
          jsonValue = JSON.parse(decodedValue);
        } catch (error) {
          console.error("Cookieの解析エラー:", error);
          return null;
        }
      }
    }

  }

  if (jsonValue === null) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  } else {

    return
  }


}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/'],
}