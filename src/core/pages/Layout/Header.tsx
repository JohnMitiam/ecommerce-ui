import { useState } from "react";
import { routes } from "src/config/routes";
// import { CartButton } from "src/core/component/buttons";
import { NavigationLink } from "src/core/component/NavigationLink";

export const Header = () => {
  const [activeNavigationLink, setActiveNavigationLink] = useState(
    localStorage.getItem("activeNavigationLink") || "home"
  );

  const handleActiveNavigationLink = (menu: any) => {
    setActiveNavigationLink(menu);
    localStorage.setItem("activeNavigationLink", menu);
  };

  const activeNavigationLinkClass = (menu: any) =>
    activeNavigationLink === menu
      ? "font-normal text-white text-[16px] font-medium"
      : "font-normal text-white text-[16px] hover:text-gray-600 font-medium";

  const handleActive = (menu: any) => {
    setActiveNavigationLink(menu);
    localStorage.setItem("activeNavigationLink", menu);
  };

  const activeNavigationClass = (menu: any) =>
    activeNavigationLink === menu
      ? "font-normal text-white text-2xl font-semibold"
      : "font-normal text-white text-2xl font-semibold";

  return (
    <>
      <div className="flex justify-between fixed z-50 w-full px-12 bg-[#db2a2a] py-4 shadow-md">
        <div>
          <NavigationLink
            classNames={`${activeNavigationClass("home")}`}
            onClick={() => handleActive("home")}
            to={`${routes.HOME}`}
          >
            The Kozuki Vault
          </NavigationLink>
        </div>
        <nav className="space-x-3 flex items-center">
          <NavigationLink
            classNames={`${activeNavigationLinkClass("home")}`}
            onClick={() => handleActiveNavigationLink("home")}
            to={`${routes.HOME}`}
          >
            Home
          </NavigationLink>
        </nav>
        {/* <CartButton /> */}
      </div>
    </>
  );
};
