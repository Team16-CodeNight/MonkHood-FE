import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Features from "./Features";
import { useUserAuth } from "../../contexts/UserAuthContextProvider";
import FAQ from "./FAQ";

const navigation = [
  { name: "Features", src: "features" },
  { name: "Steps", src: "steps" },
  { name: "FAQs", src: "faqs" },
];

const HomeLayout = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const closeDialog = () => {
    setOpen(false);
  };

  const { user, googleSignIn, userData, logOut } = useUserAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
      localStorage.removeItem("user-token");
      toast.success("Logged Out Successfully");
      navigate("/");
      //window.location.reload();
    } catch (error) {
      console.log("error", error);
      // navigate("/error");
    }
  };

  const [loadingForSignUp, setLoadingForSignUp] = useState(false);
  const [loadingForSignIn, setLoadingForSignIn] = useState(false);

  const handleGoogleSignInForSignUp = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      setLoadingForSignUp(true);
      // navigate to home page
      setTimeout(() => {
        setLoadingForSignUp(false);
        // console.log("user is:");
        // console.log(user);
        //window.location.reload();
        navigate("/user/tasks");
        toast.success("Logged In Successfully");
        closeDialog();
      }, 1000);
    } catch (errorForSignUp) {
      /**
       * if user closed the google signIn pop
       * then do nothing otherwise navigate to
       * errorForSignUp page
       */
      if (
        errorForSignUp.message === "Firebase: Error (auth/popup-closed-by-user)." ||
        errorForSignUp.message === "Firebase: Error (auth/cancelled-popup-request)."
      ) {
      } else {
        if (errorForSignUp !== null) alert(errorForSignUp.message);
        // else {
        // console.log("error", error);
        // navigate("/error/Something Went Wrong ⚠️");
        // }
      }
    }
  };

  // const handleGoogleSignIn = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await googleSignIn();
  //     setLoadingForSignIn(true);
  //     // navigate to home page

  //     setLoadingForSignIn(false);
  //     //window.location.reload();
  //     navigate("/");
  //     closeDialog();
  //   } catch (errorForSignIn) {
  //     /**
  //      * if user closed the google signIn pop
  //      * then do nothing otherwise navigate to
  //      * errorForSignIn page
  //      */
  //     if (
  //       errorForSignIn.message ===
  //         "Firebase: Error (auth/popup-closed-by-user)." ||
  //       errorForSignIn.message ===
  //         "Firebase: Error (auth/cancelled-popup-request)."
  //     ) {
  //     } else {
  //       if (errorForSignIn !== null) alert(errorForSignIn.message);
  //       else navigate("/errorForSignIn");
  //     }
  //   }
  // };

  return (
    <>
      <div className="relative bg-gray-50 overflow-hidden">
        <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
          <div className="relative h-full max-w-7xl mx-auto">
            <svg
              className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={784} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
            <svg
              className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={784} fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
            </svg>
          </div>
        </div>
        <div className="relative pt-6 pb-16 sm:pb-24">
          <Popover>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
                <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <Link to="/">
                      <span className="sr-only">Monkhood</span>
                      <img className="h-8 w-auto sm:h-10" src="monkhood-logo.png" alt="Icon" />
                    </Link>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:space-x-10">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => {
                        const element = document.getElementById(item.src);
                        if (element) {
                          // 👇 Will scroll smoothly to the top of the next section
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
                <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                  <span className="inline-flex rounded-md shadow">
                    {user === null ? (
                      <button
                        onClick={handleGoogleSignInForSignUp}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-black-800 bg-white hover:bg-gray-50 font-bold"
                      >
                        SignUp / SignIn
                      </button>
                    ) : (
                      <Link
                        to="/user/tasks"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-black-800 bg-white hover:bg-gray-50 font-bold"
                      >
                        Dashboard
                      </Link>
                    )}
                  </span>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel focus className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <Link to="/">
                      <img src="monkhood-logo.png" alt="img" />
                      <title>MonkHood</title>
                    </Link>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.src}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  {user === null ? (
                    <button
                      onClick={handleGoogleSignInForSignUp}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
                    >
                      SignUp / SignIn
                    </button>
                  ) : (
                    <button
                      onClick={handleLogOut}
                      className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  )}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
            <div className="text-center">
              <p className="text-4xl tracking-tight font-bold sm:text-4xl md:text-5xl">
                <span className="block x1:outline text-red-800 mb-5">MonkHood</span>
                <span className="block text-black-1000 x2:inline">
                  {" "}
                  Your Professional <span className="text-yellow-600">Zen</span> Lifestyle Planner{" "}
                </span>
              </p>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-1000 sm:text-lg md:mt-5 md:text-0xl md:max-w-2xl text-gray-400">
                Efficiently balance your work and personal life by helping you complete your tasks on time, even with a busy schedule.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  {user === null ? (
                    <button
                      onClick={handleGoogleSignInForSignUp}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-orange-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get Started
                    </button>
                  ) : (
                    <Link
                      to="/user/tasks"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-orange-700 md:py-4 md:text-lg md:px-10"
                    >
                      Go to Dashboard
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Features id="features" />
      <FAQ id="faqs" />
      <footer className="bg-gray-800" aria-labelledby="footer-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-6 lg:px-8">
          <div className="mt-8 border-t border-white-700 pt-8 md:flex md:items-center md:justify-between">
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">&copy; 2020 MonkHood, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomeLayout;
