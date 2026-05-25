import { useState } from "react";
import { useAllProducts } from "@/features/products/hooks/useGetAllProducts";
import type { Product } from "@/features/products/types";

export function useSearchDropdown() {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const { data, isLoading } = useAllProducts();

  const allProducts = data?.data ?? [];

  const handleInputChange = (value: string) => {
    setQuery(value);
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
  };

  const clearSearch = () => {
    setQuery("");
    setFilteredProducts([]);
    setShowDropdown(false);
  };

  return {
    query,
    setQuery,
    showDropdown,
    setShowDropdown,
    filteredProducts,
    isLoading,
    handleInputChange,
    clearSearch,
  };
}
