// import { useState } from "react";
// import { routes } from "src/config/routes";
// import { CartButton } from "src/core/component/buttons";
// import { NavigationLink } from "src/core/component/NavigationLink";

export const Header = () => {
  return (
    <>
      <div className="bg-blue-500 w-full flex justify-center text-black font-bold">
        This is the Header
      </div>
    </>
  );
  // const [activeNavigationLink, setActiveNavigationLink] = useState(
  //   localStorage.getItem("activeNavigationLink") || "home"
  // );

  // const handleActiveNavigationLink = (menu: any) => {
  //   setActiveNavigationLink(menu);
  //   localStorage.setItem("activeNavigationLink", menu);
  // };

  // const activeNavigationLinkClass = (menu: any) =>
  //   activeNavigationLink === menu
  //     ? "font-normal text-black text-2xl"
  //     : "font-normal text-white text-2xl hover:text-gray-600";

  // const handleActive = (menu: any) => {
  //   setActiveNavigationLink(menu);
  //   localStorage.setItem("activeNavigationLink", menu);
  // };

  // const activeNavigationClass = (menu: any) =>
  //   activeNavigationLink === menu
  //     ? "font-normal text-white text-2xl font-semibold"
  //     : "font-normal text-white text-2xl font-semibold";

  // return (
  //   <>
  //     <div className="flex justify-between fixed z-50 w-full px-12 bg-blue-500 py-4 shadow-md">
  //       <div>
  //         <h1 className="font-semibold text-black text-3xl">
  //           <NavigationLink
  //             classNames={`${activeNavigationClass("home")}`}
  //             onClick={() => handleActive("home")}
  //             to="/"
  //           >
  //             Over The Shop
  //           </NavigationLink>
  //         </h1>
  //       </div>
  //       <nav className="space-x-3">
  //         <NavigationLink
  //           classNames={`${activeNavigationLinkClass("home")}`}
  //           onClick={() => handleActiveNavigationLink("home")}
  //           to={`${routes.HOME}`}
  //         >
  //           Home
  //         </NavigationLink>
  //       </nav>
  //       <CartButton />
  //     </div>
  //   </>
  // );
};
