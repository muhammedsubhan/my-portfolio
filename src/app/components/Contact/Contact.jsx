"use client";
import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = () => setIsLoading(true);

  const stopLoading = () => setIsLoading(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleOnSubmit = (e) => {
    openModal();
    e.preventDefault();
    console.log("hello");
  };
  return (
    <>
      <section
        id="contact"
        className="bg-[url('/images/contactus-background.svg')] bg-cover px-20 py-20 mt-20 md:px-2 "
      >
        <main className="bg-white container rounded">
          <div className="flex items-center justify-between px-16 lg:flex-col sm:px-3">
            <div className="lg:flex lg:items-center lg:justify-center lg:text-center lg:py-2">
              <h1 className=" font-semibold text-pw-blue text-4xl  mb-2  lg:text-3xl md:text-2xl">
                Drop me a message,
                <br />I would love to hear from you!
              </h1>
            </div>
            <form
              method="post"
              onSubmit={handleOnSubmit}
              className="space-y-6  w-[500px] flex flex-col py-6 lg:py-3 lg:w-full"
            >
              <h2 className=" font-bold text-pw-orange text-3xl mb-4 lg:text-center lg:text-2xl md:text-xl">
                Get in touch
              </h2>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="block px-2.5 py-2.5 w-full text-base lg:text-xl text-pw-blue bg-transparent rounded border border-pw-blue appearance-none focus:outline-none focus:ring-0 focus:border-pw-orange peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute  text-base lg:text-xl text-pw-grey font-spartanRegular duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-pw-orange peer-focus:dark:text-pw-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block px-2.5 py-2.5 w-full text-base lg:text-xl text-pw-blue bg-transparent rounded border border-pw-blue appearance-none focus:outline-none focus:ring-0 focus:border-pw-orange peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute  text-base lg:text-xl text-pw-grey font-spartanRegular duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-pw-orange peer-focus:dark:text-pw-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Email
                </label>
              </div>
              <div className="relative">
                <textarea
                  className="block px-2.5 py-2.5 w-full text-base lg:text-xl text-pw-blue bg-transparent rounded border border-pw-blue appearance-none focus:outline-none focus:ring-0 focus:border-pw-orange peer"
                  placeholder=" "
                  id="message"
                  name="message"
                  required
                />
                <label
                  htmlFor="message"
                  className="absolute  text-base lg:text-xl text-pw-grey font-spartanRegular duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-pw-orange peer-focus:dark:text-pw-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Message
                </label>
              </div>
              <div className="flex lg:items-center lg:justify-center">
                <button
                  type="submit"
                  className={` ${
                    isLoading === true
                      ? "bg-white text-pw-blue border border-pw-blue ring-pw-orange ring-offset-pw-blue "
                      : "bg-pw-blue text-white hover:bg-pw-orange ring-pw-orange ring-offset-pw-blue "
                  } py-4 px-6  font-spartanMedium text-sm lg:text-base rounded  transition delay-150 duration-300 ease-in-out ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2`}
                  disabled={isLoading}
                >
                  {isLoading === true ? (
                    <div className="flex items-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-pw-blue to-pw-orange-500 animate-spin">
                        <div className="h-4 w-4 rounded-full bg-white"></div>
                      </div>
                      <span className="ml-3">Processing...</span>
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </div>
        </main>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-pw-orange font-spartanBold"
                    >
                      Message Sent Successfully!
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-pw-blue font-spartanMedium">
                        Thank you for getting in touch. I will get back to you
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center font-spartanMedium rounded border border-transparent bg-pw-orange-100 px-4 py-2 text-sm font-medium text-pw-orange hover:bg-pw-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pw-orange-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Got it, thanks!
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </section>
    </>
  );
};

export default Contact;
