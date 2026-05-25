import { useState, useCallback } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNavbar } from "../hooks/useNavbar";

export function NavbarSearch() {
  const { t, handleSearch } = useNavbar();
  const [query, setQuery] = useState("");

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleSearch(query);
        setQuery("");
      }
    },
    [handleSearch, query],
  );

  return (
    <div className="hidden flex-1 items-center justify-end px-8 md:flex">
      <div className="relative w-full max-w-xs" data-tour="search-input">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/40" />
        <Input
          placeholder={t("nav.searchPlaceholder")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
          className="h-10 w-full rounded-none border-2 border-border/40 bg-muted/20 pl-11 text-sm font-bold placeholder:text-muted-foreground/30 focus-visible:border-foreground"
        />
      </div>
    </div>
  );
}
