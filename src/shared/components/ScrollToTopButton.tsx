import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useLenis } from "lenis/react";

const SCROLL_THRESHOLD = 300;

const ScrollToTopButton = memo(function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const lenis = useLenis();

  useLenis(
    useCallback(
      (l) => {
        setVisible(l.scroll > SCROLL_THRESHOLD);
      },
      [],
    ),
  );

  const scrollToTop = useCallback(() => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [lenis]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-none border-2 border-border/40 bg-background text-foreground shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background active:scale-90"
        >
          <ChevronUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
});

export default ScrollToTopButton;
