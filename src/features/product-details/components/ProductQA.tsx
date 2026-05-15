import { memo } from "react";
import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductQA = memo(function ProductQA() {
  return (
    <section className="mt-16">
      <h2 className="mb-6 text-xl font-bold">Questions & Answers</h2>
      <div className="space-y-4">
        <div className="rounded-xl bg-card p-5 ring-1 ring-foreground/10">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <MessageCircle className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium">Q: Is this product true to size?</p>
              <p className="mt-1 text-sm text-muted-foreground">
                A: Yes, it runs true to size. I recommend ordering your usual size.
              </p>
              <span className="mt-2 block text-xs text-muted-foreground">Answered by Store Team</span>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-card p-5 ring-1 ring-foreground/10">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <MessageCircle className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium">Q: What material is this made from?</p>
              <p className="mt-1 text-sm text-muted-foreground">
                A: It is made from a high-quality cotton blend for durability and comfort.
              </p>
              <span className="mt-2 block text-xs text-muted-foreground">Answered by Store Team</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex gap-3">
        <input
          type="text"
          placeholder="Ask a question..."
          className="flex-1 rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-foreground/10 transition-all focus:ring-2"
        />
        <Button size="lg" className="gap-2 rounded-xl px-6">
          <Send className="h-4 w-4" />
          Ask
        </Button>
      </div>
    </section>
  );
});

export default ProductQA;
