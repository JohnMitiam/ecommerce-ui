import { Cart } from "../HeroIcons";

export const CartButton = () => {
  const badgeNumber = 5;

  return (
    <>
      <button className="text-white font-bold">
        <Cart height="25" width="25" />
        {badgeNumber > 0 && (
          <span className="bg-red-500 rounded-full w-4 h-4 text-white text-xs text-center absolute top-5 right-10 transform translate-x-2 -translate-y-2">
            {badgeNumber}
          </span>
        )}
      </button>
    </>
  );
};
