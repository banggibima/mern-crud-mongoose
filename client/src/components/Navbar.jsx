import { NavLink } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const navigations = [
    { id: 1, name: "Beranda", to: "/" },
    { id: 2, name: "Dasbor", to: "/dashboard" },
    { id: 3, name: "Tentang", to: "/about" },
  ];

  return (
    <>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="hidden md:block">
                    <div className="flex items-baseline space-x-2">
                      {navigations.map((navigation) => (
                        <NavLink
                          key={navigation.id}
                          to={navigation.to}
                          className={({ isActive }) =>
                            isActive
                              ? "px-3 py-2 rounded-lg text-xs font-semibold border text-sky-600 bg-sky-50 border-sky-600"
                              : "px-3 py-2 rounded-lg text-xs font-semibold border hover:text-sky-600 hover:bg-sky-50 hover:border-sky-600"
                          }
                        >
                          {navigation.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-lg border focus:outline-none focus:ring-transparent">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars4Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="md:hidden">
              <div className="px-4 pt-2 pb-3 sm:px-3">
                <div className="space-y-2">
                  {navigations.map((navigation) => (
                    <NavLink
                      key={navigation.name}
                      to={navigation.to}
                      className={({ isActive }) =>
                        isActive
                          ? "block px-3 py-2 rounded-lg text-xs font-semibold border text-sky-600 bg-sky-50 border-sky-600"
                          : "block px-3 py-2 rounded-lg text-xs font-semibold border hover:text-sky-600 hover:bg-sky-50 hover:border-sky-600"
                      }
                    >
                      {navigation.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Navbar;
