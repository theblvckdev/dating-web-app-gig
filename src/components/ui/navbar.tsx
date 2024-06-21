import { useEffect, useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
// import LogoImage from "../../assets/svg/r4m.svg";

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

interface NavbarDataTypes {
  path: string;
  text: string;
  isActive: boolean;
}

const navbarData: NavbarDataTypes[] = [
  {
    path: "/",
    text: "Home",
    isActive: false,
  },
  {
    path: "/app",
    text: "App",
    isActive: false,
  },
  {
    path: "/about",
    text: "About",
    isActive: false,
  },
  {
    path: "/events",
    text: "Events",
    isActive: false,
  },
  {
    path: "/leader-board",
    text: "Leader board",
    isActive: false,
  },
  {
    path: "/community-guide-lines",
    text: "Community guide lines",
    isActive: false,
  },
  {
    path: "/contacts",
    text: "Contacts",
    isActive: false,
  },
];

export default function Navbar({ bgVariant }: { bgVariant: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [showNavbar, setShowNavbar] = useState<boolean>(true);

  const changeNavbarState: () => void = () => {
    if (window.scrollY <= window.innerHeight) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  useEffect(() => {
    changeNavbarState();
    window.addEventListener("scroll", changeNavbarState);
  }, []);

  // const [isHomepage, setIsHomepage] = useState<boolean>(false);

  // const location = useLocation();

  // useEffect(() => {
  //   const checkIsHomepage = () => {
  //     if (location.pathname === "/") {
  //       setIsHomepage(true);
  //     } else {
  //       setIsHomepage(false);
  //     }
  //   };

  //   checkIsHomepage();
  // }, [location]);

  return (
    <header
      className={`${bgVariant} fixed top-0 duration-300 ease-in-out z-50 ${
        showNavbar ? "top-0" : "-top-[30%]"
      } left-0 w-screen z-50`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between py-4 lg:px-8 md:px-5 px-3"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">R4M</span>
            {/* <img className="h-14 w-auto" src={LogoImage} alt="R4M logo" /> */}
            <h1 className="text-secondary-0 text-4xl font-bold tracking-[-0.4rem] font-poppins">
              R4M
            </h1>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <IoMenuOutline className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-5">
          {/* <Link
            to="/"
            className={`text-sm font-poppins hover:underline leading-6 text-gray-900 ${
              isHomepage && "underline"
            }`}
          >
            Home
          </Link>
          <Popover className="relative">
            <PopoverButton className="flex items-center hover:underline outline-none font-poppins gap-x-1 text-sm leading-6 text-gray-900">
              The App
              <GoTriangleDown
                className="h-5 w-5 flex-none text-gray-900"
                aria-hidden="true"
              />
            </PopoverButton>

            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel className="absolute -left-8 top-full z-10  w-[150px] max-w-md overflow-hidden mt-3 bg-white shadow-lg ring-1 ring-gray-900/5 rounded-md">
                <div className="p-2">
                  <div className="group relative flex items-center gap-x-6 rounded-lg py-1 px-2 text-sm leading-6 min-w-2xl w-full">
                    <div className="flex-auto">
                      <a
                        href="/"
                        className="block text-gray-900 font-poppins hover:underline"
                      >
                        R4M Dating
                        <span className="absolute inset-0" />
                      </a>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </Transition>
          </Popover> */}

          {navbarData.map((data, index) => {
            const { text, path } = data;

            location.pathname === path
              ? (data.isActive = true)
              : (data.isActive = false);

            return (
              <Link
                to={path}
                key={index}
                className={`text-sm hover:underline font-poppins leading-6 ${
                  data.isActive && "underline"
                }`}
              >
                {text}
              </Link>
            );
          })}
        </PopoverGroup>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <IoCloseOutline className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/* <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full outline-none items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 font-poppins">
                        Product
                        <GoTriangleDown
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        <DisclosureButton
                          as="a"
                          href="/"
                          className="block rounded-lg py-2 pl-6 outline-none pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          Testing
                        </DisclosureButton>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure> */}

                {navbarData.map((data, index) => {
                  const { text, path } = data;

                  location.pathname === path
                    ? (data.isActive = true)
                    : (data.isActive = false);

                  return (
                    <Link
                      key={index}
                      to={path}
                      className={`-mx-3 block outline-none rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hove:underline ${
                        data.isActive && "underline"
                      }`}
                    >
                      {text}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
