import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { useState } from 'react'
import { useForm } from "./hooks/useForm";
import { GET } from "./helpers/constants";



export async function middleware(request: NextRequest) {
  console.log(request)
  // if 
  // const [isAuth, setIsAuth] = useState(false)
  // try {
  //   const apiResponse = await useForm({
  //     values: null,
  //     url: "/user/login",
  //     httpMethod: GET,
  //   });
  //   console.log(apiResponse)
  // } catch (error) {
  //   console.error(`Failed to reset your password: ${error}`);
  //   throw new Error(`Failed to reset your password: ${error}`);
  // }
  console.log('lplplplplpplplpllplplplplplp')
  return NextResponse.redirect(new URL('/auth/login', request.url))

}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/'],
}