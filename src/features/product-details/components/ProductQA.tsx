import { memo } from "react";
import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductQA = memo(function ProductQA() {
  return (
    <section>
      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
          Support
        </span>
        <h2 className="mt-2 text-2xl font-black tracking-tight">Questions & Answers.</h2>
      </div>
      <div className="grid gap-4">
        <div className="rounded-2xl bg-card p-6 ring-1 ring-foreground/5">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-400/10">
              <MessageCircle className="h-4 w-4 text-amber-400" />
            </div>
            <div>
              <p className="text-sm font-medium">Q: Is this product true to size?</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground/80">
                A: Yes, it runs true to size. I recommend ordering your usual size.
              </p>
              <span className="mt-2 block text-xs text-muted-foreground/50">Answered by Store Team</span>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-card p-6 ring-1 ring-foreground/5">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-400/10">
              <MessageCircle className="h-4 w-4 text-amber-400" />
            </div>
            <div>
              <p className="text-sm font-medium">Q: What material is this made from?</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground/80">
                A: It is made from a high-quality cotton blend for durability and comfort.
              </p>
              <span className="mt-2 block text-xs text-muted-foreground/50">Answered by Store Team</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          placeholder="Ask a question..."
          className="flex-1 rounded-xl border border-border/40 bg-transparent px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground/40 transition-all focus:ring-1 focus:ring-foreground/20"
        />
        <Button className="h-11 w-full cursor-pointer gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-all duration-300 hover:opacity-90 active:scale-[0.97] sm:h-11 sm:w-auto">
          <Send className="h-4 w-4" strokeWidth={1.5} />
          Ask
        </Button>
      </div>
    </section>
  );
});

export default ProductQA;
