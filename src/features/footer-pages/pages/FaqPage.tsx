import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { getLangFromPath, buildLocalizedPath } from "@/lib/localized-path";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import PageHelmet from "@/shared/components/PageHelmet";
import PageLayout from "@/features/footer-pages/components/PageLayout";
import PageHero from "@/features/footer-pages/components/PageHero";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: t("footerPages.faq.q1.question"),
      answer: t("footerPages.faq.q1.answer"),
    },
    {
      question: t("footerPages.faq.q2.question"),
      answer: t("footerPages.faq.q2.answer"),
    },
    {
      question: t("footerPages.faq.q3.question"),
      answer: t("footerPages.faq.q3.answer"),
    },
    {
      question: t("footerPages.faq.q4.question"),
      answer: t("footerPages.faq.q4.answer"),
    },
    {
      question: t("footerPages.faq.q5.question"),
      answer: t("footerPages.faq.q5.answer"),
    },
    {
      question: t("footerPages.faq.q6.question"),
      answer: t("footerPages.faq.q6.answer"),
    },
    {
      question: t("footerPages.faq.q7.question"),
      answer: t("footerPages.faq.q7.answer"),
    },
    {
      question: t("footerPages.faq.q8.question"),
      answer: t("footerPages.faq.q8.answer"),
    },
    {
      question: t("footerPages.faq.q9.question"),
      answer: t("footerPages.faq.q9.answer"),
    },
    {
      question: t("footerPages.faq.q10.question"),
      answer: t("footerPages.faq.q10.answer"),
    },
  ];

  const categories = [
    { label: t("footerPages.faq.categories.orders"), href: buildLocalizedPath("/faq", lang) },
    { label: t("footerPages.faq.categories.shipping"), href: buildLocalizedPath("/shipping", lang) },
    { label: t("footerPages.faq.categories.returns"), href: buildLocalizedPath("/returns", lang) },
    { label: t("footerPages.faq.categories.contactUs"), href: buildLocalizedPath("/contact", lang) },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <PageLayout>
      <PageHelmet title={t("footerPages.faq.page.title")} description={t("footerPages.faq.page.description")} />
      <Breadcrumb className="mb-6" items={[
        { label: t("footerPages.faq.breadcrumb.home"), href: buildLocalizedPath("/", lang) },
        { label: t("footerPages.faq.breadcrumb.faq") },
      ]} />
      <PageHero
        title={t("footerPages.faq.hero.title")}
        description={t("footerPages.faq.hero.description")}
      />

      <div className="mb-12 flex flex-wrap gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.label}
            to={cat.href}
            className="border-2 border-foreground/10 bg-card px-6 py-3 text-[10px] font-black uppercase tracking-widest text-muted-foreground transition-all hover:border-foreground hover:text-foreground"
          >
            {cat.label}
          </Link>
        ))}
      </div>

      <div className="border border-border/60 bg-card p-8 md:p-10">
        <dl className="divide-y divide-border/40">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6 first:pt-0 last:pb-0">
              <dt>
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-6 text-left text-lg font-black uppercase tracking-tight transition-colors hover:text-foreground/70"
                >
                  <span>{faq.question}</span>
                  <motion.svg
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="square"
                    strokeLinejoin="inherit"
                    className="h-5 w-5 shrink-0 text-foreground/40"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </motion.svg>
                </button>
              </dt>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.dd
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-2 pt-6 text-base font-medium leading-relaxed text-muted-foreground/70 md:text-lg">
                      {faq.answer}
                    </p>
                  </motion.dd>
                )}
              </AnimatePresence>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-12 border border-border/60 bg-muted/50 p-10 text-center md:p-16">
        <h2 className="text-3xl font-black uppercase tracking-tighter">{t("footerPages.faq.cta.title")}</h2>
        <p className="mt-4 text-sm font-bold uppercase tracking-widest text-muted-foreground/60">
          {t("footerPages.faq.cta.description")}
        </p>
        <Link
          to={buildLocalizedPath("/contact", lang)}
          className="mt-10 inline-flex h-16 items-center justify-center bg-foreground px-12 text-[10px] font-black uppercase tracking-[0.3em] text-background transition-all duration-300 hover:bg-foreground/90 active:scale-[0.98]"
        >
          {t("footerPages.faq.cta.button")}
        </Link>
      </div>
    </PageLayout>
  );
}
