import { useCallback } from "react";
import { Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useCurrentLang, buildLocalizedPath } from "@/lib/localized-path";
import { useNavbar } from "../hooks/useNavbar";
import { useSearchDropdown } from "../hooks/useSearchDropdown";

export function NavbarSearch() {
  const { t, handleSearch } = useNavbar();
  const lang = useCurrentLang();
  const {
    query,
    showDropdown,
    filteredProducts,
    isLoading,
    handleInputChange,
    clearSearch,
  } = useSearchDropdown();

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleSearch(query);
        clearSearch();
      }
    },
    [handleSearch, query, clearSearch],
  );

  const onProductClick = useCallback(() => {
    clearSearch();
  }, [clearSearch]);

  return (
    <div className="relative hidden flex-1 items-center justify-end px-8 md:flex">
      <div className="relative w-full max-w-xs" data-tour="search-input">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/40" />

        <Input
          placeholder={t("nav.searchPlaceholder")}
          value={query}
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyDown={onKeyDown}
          className="h-10 w-full rounded-none border-2 border-border/40 bg-muted/20 pl-11 text-sm font-bold placeholder:text-muted-foreground/30 focus-visible:border-foreground"
        />

        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/50 transition-colors hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}

        {showDropdown && (
          <div className="absolute top-full z-50 mt-2 max-h-[420px] w-full overflow-y-auto border border-border bg-background shadow-2xl">
            {isLoading ? (
              <div className="flex items-center justify-center py-6">
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-foreground border-t-transparent" />
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center gap-2 py-6 text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                  <Search className="h-4 w-4 text-muted-foreground" />
                </div>

                <p className="text-sm font-semibold text-muted-foreground">
                  No products found
                </p>

                <span className="text-xs text-muted-foreground/60">
                  Try another search
                </span>
              </div>
            ) : (
              filteredProducts.map((product) => (
                <Link
                  to={buildLocalizedPath(
                    `/products/${product.slug}/${product.id}`,
                    lang,
                  )}
                  key={product.id}
                  onClick={onProductClick}
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
        )}
      </div>
    </div>
  );
}
