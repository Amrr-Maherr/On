import { useCallback, useEffect, useRef, useMemo } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useCurrentLang, buildLocalizedPath } from "@/lib/localized-path";
import { useNavbar } from "../hooks/useNavbar";
import { useSearchDropdown } from "../hooks/useSearchDropdown";
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
  CommandLoading,
} from "@/components/ui/command";

export function NavbarSearch() {
  const { t, handleSearch } = useNavbar();
  const lang = useCurrentLang();
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    query,
    showDropdown,
    filteredProducts,
    isLoading,
    highlightedIndex,
    inputRef,
    listRef,
    handleInputChange,
    clearSearch,
    handleKeyDown,
    closeDropdown,
  } = useSearchDropdown();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [closeDropdown]);

  useEffect(() => {
    if (highlightedIndex < 0 || !listRef.current) return;
    const items =
      listRef.current.querySelectorAll<HTMLElement>("[data-selected]");
    const target = items[highlightedIndex];
    if (target) {
      target.scrollIntoView({ block: "nearest" });
    }
  }, [highlightedIndex]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      handleKeyDown(e);

      if (e.key === "Enter") {
        if (
          highlightedIndex >= 0 &&
          highlightedIndex < filteredProducts.length
        ) {
          const product = filteredProducts[highlightedIndex];
          clearSearch();
          window.location.href = buildLocalizedPath(
            `/products/${product.slug}/${product.id}`,
            lang,
          );
        } else {
          handleSearch(query);
          clearSearch();
        }
      }
    },
    [
      handleKeyDown,
      highlightedIndex,
      filteredProducts,
      clearSearch,
      handleSearch,
      query,
      lang,
    ],
  );

  const dropdownContent = useMemo(() => {
    if (!showDropdown) return null;

    if (isLoading) {
      return (
        <Command>
          <CommandLoading />
        </Command>
      );
    }

    if (filteredProducts.length === 0) {
      return (
        <Command>
          <CommandEmpty>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted/50">
              <Search className="h-5 w-5 text-muted-foreground/50" />
            </div>
            <p className="text-sm font-semibold text-muted-foreground">
              {t("nav.search.noResults")}
            </p>
            <p className="text-xs text-muted-foreground/40">
              {t("nav.search.tryAnother")}
            </p>
          </CommandEmpty>
        </Command>
      );
    }

    return (
      <Command>
        <CommandList ref={listRef}>
          {filteredProducts.map((product, index) => (
            <Link
              to={buildLocalizedPath(
                `/products/${product.slug}/${product.id}`,
                lang,
              )}
              key={product.id}
              onClick={clearSearch}
            >
              <CommandItem selected={index === highlightedIndex}>
                <img
                  src={product.imageCover}
                  alt={product.title}
                  loading="lazy"
                  className="h-12 w-12 shrink-0 border border-border/20 object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-foreground">
                    {product.title}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground/70">
                    {product.price.toLocaleString()} EGP
                  </p>
                </div>
              </CommandItem>
            </Link>
          ))}
        </CommandList>
      </Command>
    );
  }, [
    showDropdown,
    isLoading,
    filteredProducts,
    highlightedIndex,
    lang,
    clearSearch,
    listRef,
    t,
  ]);

  return (
    <div
      ref={containerRef}
      className="relative hidden flex-1 items-center justify-end px-8 md:flex"
    >
      <div className="relative w-full max-w-xs" data-tour="search-input">
        <CommandInput
          ref={inputRef}
          placeholder={t("nav.searchPlaceholder")}
          value={query}
          showClear
          onClear={clearSearch}
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyDown={onKeyDown}
          onFocus={() => {
            if (query.trim()) {
              handleInputChange(query);
            }
          }}
          className="h-10 border-2 border-border/40 bg-muted/20 pl-11 text-sm font-bold placeholder:text-muted-foreground/30 focus-visible:border-foreground"
        />
        {dropdownContent}
      </div>
    </div>
  );
}
