import { memo } from "react";
import { useTranslation } from "react-i18next";

const Ticker = memo(function Ticker() {
  const { t } = useTranslation();
  const messages = [
    t("nav.ticker.freeShipping"),
    t("nav.ticker.newArrivals"),
    t("nav.ticker.sale"),
  ];
  const repeated = [...messages, ...messages, ...messages];

  return (
    <div className="overflow-hidden bg-neutral-950 py-2">
      <div className="ticker-track flex w-max gap-12 whitespace-nowrap">
        {repeated.map((msg, i) => (
          <span
            key={i}
            className="text-xs font-bold uppercase tracking-[0.2em] text-white/70"
          >
            {msg}
          </span>
        ))}
      </div>
    </div>
  );
});

export default Ticker;
