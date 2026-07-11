import { memo } from "react";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const { t } = useTranslation();
  if (totalPages <= 1) return null;

  const pages: (number | "...")[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "...") {
      pages.push("...");
    }
  }

  return (
    <nav
      className="mt-12 flex items-center justify-center gap-1.5"
      aria-label={t("pagination.label")}
    >
      <Button
        variant="outline"
        size="icon"
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
        aria-label={t("pagination.previous")}
        className="rounded-none border-2"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {pages.map((page, i) =>
        page === "..." ? (
          <span
            key={`ellipsis-${i}`}
            className="flex h-10 w-10 items-center justify-center text-sm font-bold text-muted-foreground"
          >
            ...
          </span>
        ) : (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            size="icon"
            onClick={() => onPageChange(page as number)}
            className={cn(
              "h-10 w-10 rounded-none border-2",
              currentPage === page && "cursor-default border-foreground",
            )}
            aria-current={currentPage === page ? "page" : undefined}
          >
            {page}
          </Button>
        ),
      )}

      <Button
        variant="outline"
        size="icon"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        aria-label={t("pagination.next")}
        className="rounded-none border-2"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </nav>
  );
}

export default memo(Pagination);
