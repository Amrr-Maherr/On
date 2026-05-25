import { useState, useCallback } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNavbar } from "../hooks/useNavbar";
import { useAllProducts } from "@/features/products/hooks/useGetAllProducts";
import { Link } from "react-router-dom";
import { useCurrentLang, buildLocalizedPath } from "@/lib/localized-path";
export function NavbarSearch() {
  const { t, handleSearch } = useNavbar();
  const [query, setQuery] = useState("");
  const [ShowDropDown, setShowDropDown] = useState(false);
  const lang = useCurrentLang();
  const { data, isLoading } = useAllProducts();

  const allProducts = data?.data || [];

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleSearch(query);
        setQuery("");
      }
    },
    [handleSearch, query],
  );
  function ProductsSearch(e) {
    setQuery(e.target.value);
    if (query === " ") {
      setShowDropDown(false);
      console.log(ShowDropDown);
    } else {
      setShowDropDown(true);
      console.log(ShowDropDown);
    }
  }
  return (
    <div className="relative hidden flex-1 items-center justify-end px-8 md:flex">
      <div className="relative w-full max-w-xs" data-tour="search-input">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/40" />

        <Input
          placeholder={t("nav.searchPlaceholder")}
          value={query}
          onChange={(e) => ProductsSearch(e)}
          onKeyDown={onKeyDown}
          className="h-10 w-full rounded-none border-2 border-border/40 bg-muted/20 pl-11 text-sm font-bold placeholder:text-muted-foreground/30 focus-visible:border-foreground"
        />

        <div
          className={`${ShowDropDown ? "absolute" : "hidden"} top-full z-50 mt-2 max-h-[420px] w-full overflow-y-auto border border-border bg-white shadow-2xl`}
        >
          {isLoading ? (
            <div className="p-4 text-center text-sm text-muted-foreground">
              Loading...
            </div>
          ) : (
            allProducts.map((product) => (
              <Link
                to={buildLocalizedPath(
                  `/products/${product.slug}/${product.id}`,
                  lang,
                )}
                key={product.id}
                type="button"
                className="flex w-full items-center gap-3 border-b border-border/40 p-3 text-left transition-colors hover:bg-muted/30"
              >
                <img
                  src={product.imageCover}
                  alt={product.title}
                  className="h-14 w-14 shrink-0 object-cover"
                />

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-foreground">
                    {product.title}
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    {product.price} EGP
                  </p>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
