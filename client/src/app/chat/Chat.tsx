"use client";
import { useEffect, useState } from 'react'
import { useForm } from "../../hooks/useForm";
import Cookies from 'js-cookie';
const Chat = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const apiResponse = await useForm({
  //       values: {

  //       },
  //       url: "/session",
  //       httpMethod: 'get',
  //     });
  //     console.log(apiResponse)
  //   }
  //   console.log(fetchData())


  // }, [])
  return (
    <>
      <div className="h-screen overflow-hidden bg-white p-4">
        <div className="flex">
          <div className="basis-2/6 border-r border-slate-100 bg-white pt-3">
            <div className="">
              <div className="search-box h-10 text-slate-300">
                <div className="flex justify-between border-b border-slate-100 px-5 pb-4">
                  <form className="flex items-center justify-center">
                    <i className="fa fa-search pr-2"></i>
                    <input
                      type="text"
                      name="search"
                      id="search"
                      placeholder="Search"
                      className="font-light focus:outline-none"
                    />
                  </form>
                  <div>
                    <button className="relative">
                      <i className="fa fa-message"></i>
                      <i className="fa fa-plus absolute -top-2 text-sm"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="user-list h-screen overflow-y-auto bg-white">
                <div className="flex px-5 py-3 transition hover:cursor-pointer hover:bg-slate-100">
                  <div className="pr-4">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/194/194938.png"
                      width="50"
                    />
                  </div>
                  <div>
                    <h3 className="tex-md text-violet-500">Lupe Fiasco</h3>
                    <p className="h-5 overflow-hidden text-sm font-light text-gray-400">
                      I got two ticket to go see the awesome
                    </p>
                  </div>
                </div>

                <div className="flex px-5 py-3 transition hover:cursor-pointer hover:bg-slate-100">
                  <div className="pr-4">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/194/194938.png"
                      width="50"
                    />
                  </div>
                  <div>
                    <h3 className="tex-md text-violet-500">Lupe Fiasco</h3>
                    <p className="h-5 overflow-hidden text-sm font-light text-gray-400">
                      I got two ticket to go see the awesome
                    </p>
                  </div>
                </div>

                <div className="flex px-5 py-3 transition hover:cursor-pointer hover:bg-slate-100">
                  <div className="pr-4">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/194/194938.png"
                      width="50"
                    />
                  </div>
                  <div>
                    <h3 className="tex-md text-violet-500">Lupe Fiasco</h3>
                    <p className="h-5 overflow-hidden text-sm font-light text-gray-400">
                      I got two ticket to go see the awesome
                    </p>
                  </div>
                </div>
                <div className="flex px-5 py-3 transition hover:cursor-pointer hover:bg-slate-100">
                  <div className="pr-4">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/194/194938.png"
                      width="50"
                    />
                  </div>
                  <div>
                    <h3 className="tex-md text-violet-500">Lupe Fiasco</h3>
                    <p className="h-5 overflow-hidden text-sm font-light text-gray-400">
                      I got two ticket to go see the awesome
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="basis-4/6">
            <div className="">
              <div className="user-info-header bg-white px-5 py-3">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/194/194938.png"
                      width="40"
                    />
                    <h3 className="tex-md pl-4 text-gray-400">Lupe Fiasco</h3>
                  </div>
                  <div>
                    <i className="fa fa-message text-violet-300"></i>

                    <i className="fa fa-video ml-3 text-gray-200"></i>

                    <i className="fa fa-phone ml-3 text-gray-200"></i>
                  </div>
                </div>
              </div>

              <div className="message-area mt-4 px-4">
                <div className="receive-chat relative flex justify-start">
                  <div className="mb-2 max-w-[80%] rounded bg-violet-400 px-5 py-2 text-sm font-light text-white">
                    <i className="fa fa-caret-up absolute -top-2 text-violet-400"></i>
                    <p>
                      I got two tickets to go to see this awesome band called,
                      Lorem ipsum dollar !! Do you want to come ?
                    </p>
                  </div>
                </div>
                <div className="receive-chat flex justify-start">
                  <div className="mb-2 max-w-[80%] rounded bg-violet-400 px-5 py-2 text-sm font-light text-white">
                    <p>
                      I got two tickets to go to see this awesome band called,
                      Lorem ipsum dollar !! Do you want to come ?
                    </p>
                  </div>
                </div>
                <div className="send-chat flex justify-end">
                  <div className="mb-2 max-w-[80%] rounded bg-violet-200 px-5 py-2 text-sm font-light text-slate-500">
                    <p>
                      I got two tickets to go to see this awesome band called,
                      Lorem ipsum dollar !! Do you want to come ?
                    </p>
                  </div>
                </div>
                <div className="receive-chat flex justify-start">
                  <div className="mb-2 max-w-[80%] rounded bg-violet-400 px-5 py-2 text-sm font-light text-white">
                    <p>
                      I got two tickets to go to see this awesome band called,
                      Lorem ipsum dollar !! Do you want to come ?
                    </p>
                  </div>
                </div>
                <div className="send-chat relative flex justify-end">
                  <div className="mb-2 max-w-[80%] rounded bg-violet-200 px-5 py-2 text-sm font-light text-slate-500">
                    <i className="fa fa-caret-down absolute bottom-0 right-4 text-violet-200"></i>
                    <p>
                      I got two tickets to go to see this awesome band called,
                      Lorem ipsum dollar !! Do you want to come ?
                    </p>
                  </div>
                </div>
              </div>

              <div className="fixed bottom-0 w-full bg-gray-100 pl-4">
                <textarea
                  className="h-12 w-full bg-gray-100 pt-3 font-light focus:outline-none"
                  placeholder="Write a message"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
