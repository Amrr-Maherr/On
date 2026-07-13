import { memo } from "react";

type TickerProps = {
  messages: string[];
};

const Ticker = memo(function Ticker({ messages }: TickerProps) {
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
