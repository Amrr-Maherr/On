import { useMemo, useState } from "react";

export function useLocalSearch<T extends { title: string; description?: string }>(
  items: T[],
) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return items;
    const lower = query.toLowerCase();
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(lower) ||
        (item.description && item.description.toLowerCase().includes(lower)),
    );
  }, [items, query]);

  return { query, setQuery, filtered };
}
