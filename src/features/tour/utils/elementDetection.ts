export function waitForElement(
  selector: string,
  timeout = 6000,
): Promise<Element | null> {
  if (typeof window === "undefined") return Promise.resolve(null);

  const element = document.querySelector(selector);
  if (element) return Promise.resolve(element);

  return new Promise((resolve) => {
    let elapsed = 0;
    const interval = 200;

    const timer = setInterval(() => {
      elapsed += interval;
      const el = document.querySelector(selector);
      if (el) {
        clearInterval(timer);
        resolve(el);
        return;
      }
      if (elapsed >= timeout) {
        clearInterval(timer);
        resolve(null);
      }
    }, interval);
  });
}
