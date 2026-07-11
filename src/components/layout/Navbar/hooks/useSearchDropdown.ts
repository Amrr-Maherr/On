import { useState, useCallback, useRef } from "react";
import { useAllProducts } from "@/features/products/hooks/useGetAllProducts";
import type { Product } from "@/features/products/types";

export function useSearchDropdown() {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const { data, isLoading } = useAllProducts();
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const allProducts = data?.data ?? [];

  const handleInputChange = useCallback((value: string) => {
    setQuery(value);
    setHighlightedIndex(-1);
    if (value.trim() !== "") {
      setShowDropdown(true);
      const filtered = allProducts.filter((product) =>
        product?.title?.toLowerCase().includes(value.toLowerCase()),
      );
      setFilteredProducts(filtered);
    } else {
      setShowDropdown(false);
      setFilteredProducts([]);
    }
  }, [allProducts]);

  const clearSearch = useCallback(() => {
    setQuery("");
    setFilteredProducts([]);
    setShowDropdown(false);
    setHighlightedIndex(-1);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!showDropdown) return;

      switch (e.key) {
        case "ArrowDown": {
          e.preventDefault();
          setHighlightedIndex((prev) =>
            prev < filteredProducts.length - 1 ? prev + 1 : 0,
          );
          break;
        }
        case "ArrowUp": {
          e.preventDefault();
          setHighlightedIndex((prev) =>
            prev > 0 ? prev - 1 : filteredProducts.length - 1,
          );
          break;
        }
        case "Enter": {
          if (highlightedIndex >= 0 && highlightedIndex < filteredProducts.length) {
            return;
          }
          break;
        }
        case "Escape": {
          clearSearch();
          inputRef.current?.blur();
          break;
        }
      }
    },
    [showDropdown, filteredProducts.length, highlightedIndex, clearSearch],
  );

  const closeDropdown = useCallback(() => {
    setShowDropdown(false);
    setHighlightedIndex(-1);
  }, []);

  return {
    query,
    setQuery,
    showDropdown,
    setShowDropdown,
    filteredProducts,
    isLoading,
    highlightedIndex,
    inputRef,
    listRef,
    handleInputChange,
    clearSearch,
    handleKeyDown,
    closeDropdown,
  };
}
