import { useTranslation } from "react-i18next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import PageHelmet from "@/shared/components/PageHelmet";
import PageLayout from "@/features/footer-pages/components/PageLayout";
import PageHero from "@/features/footer-pages/components/PageHero";
import ContentSection from "@/features/footer-pages/components/ContentSection";

export default function SizeGuidePage() {
  const { t } = useTranslation();

  const sizeTables = [
    {
      label: t("footerPages.sizeGuide.tables.womensTops.label"),
      unit: t("footerPages.sizeGuide.tables.womensTops.unit"),
      headers: [
        t("footerPages.sizeGuide.headers.size"),
        t("footerPages.sizeGuide.headers.chest"),
        t("footerPages.sizeGuide.headers.waist"),
        t("footerPages.sizeGuide.headers.hip"),
      ],
      rows: [
        { size: "XS", values: ["31–32", "24–25", "34–35"] },
        { size: "S", values: ["33–34", "26–27", "36–37"] },
        { size: "M", values: ["35–36", "28–29", "38–39"] },
        { size: "L", values: ["37–38", "30–31", "40–41"] },
        { size: "XL", values: ["39–40", "32–33", "42–43"] },
      ],
    },
    {
      label: t("footerPages.sizeGuide.tables.mensTops.label"),
      unit: t("footerPages.sizeGuide.tables.mensTops.unit"),
      headers: [
        t("footerPages.sizeGuide.headers.size"),
        t("footerPages.sizeGuide.headers.chest"),
        t("footerPages.sizeGuide.headers.waist"),
        t("footerPages.sizeGuide.headers.hip"),
      ],
      rows: [
        { size: "S", values: ["34–36", "28–30", "35–37"] },
        { size: "M", values: ["38–40", "32–34", "38–40"] },
        { size: "L", values: ["42–44", "36–38", "41–43"] },
        { size: "XL", values: ["46–48", "40–42", "44–46"] },
        { size: "XXL", values: ["50–52", "44–46", "47–49"] },
      ],
    },
    {
      label: t("footerPages.sizeGuide.tables.bottoms.label"),
      unit: t("footerPages.sizeGuide.tables.bottoms.unit"),
      headers: [
        t("footerPages.sizeGuide.headers.size"),
        t("footerPages.sizeGuide.headers.waist"),
        t("footerPages.sizeGuide.headers.hip"),
        t("footerPages.sizeGuide.headers.inseam"),
      ],
      rows: [
        { size: "XS", values: ["26–27", "34–35", "30"] },
        { size: "S", values: ["28–29", "36–37", "30"] },
        { size: "M", values: ["30–31", "38–39", "31"] },
        { size: "L", values: ["32–34", "40–42", "31"] },
        { size: "XL", values: ["36–38", "44–46", "32"] },
      ],
    },
  ];

  const measuringTips = [
    { label: t("footerPages.sizeGuide.tips.chest.label"), description: t("footerPages.sizeGuide.tips.chest.description") },
    { label: t("footerPages.sizeGuide.tips.waist.label"), description: t("footerPages.sizeGuide.tips.waist.description") },
    { label: t("footerPages.sizeGuide.tips.hip.label"), description: t("footerPages.sizeGuide.tips.hip.description") },
    { label: t("footerPages.sizeGuide.tips.inseam.label"), description: t("footerPages.sizeGuide.tips.inseam.description") },
  ];

  return (
    <PageLayout>
      <PageHelmet title={t("footerPages.sizeGuide.page.title")} description={t("footerPages.sizeGuide.page.description")} />
      <Breadcrumb className="mb-6" items={[
        { label: t("footerPages.sizeGuide.breadcrumb.home"), href: "/" },
        { label: t("footerPages.sizeGuide.breadcrumb.sizeGuide") },
      ]} />
      <PageHero
        title={t("footerPages.sizeGuide.hero.title")}
        description={t("footerPages.sizeGuide.hero.description")}
      />

      <div className="mb-8">
        <ContentSection title={t("footerPages.sizeGuide.sections.howToMeasure.title")} variant="card">
          <p>For the most accurate fit, use a soft measuring tape and follow these guidelines:</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {measuringTips.map((tip) => (
              <div key={tip.label} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  {tip.label.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">{tip.label}</p>
                  <p className="text-xs text-muted-foreground">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ContentSection>
      </div>

      <div className="space-y-8">
        {sizeTables.map((table) => (
          <div key={table.label} className="rounded-xl border bg-card p-6 md:p-8">
            <h2 className="mb-1 text-lg font-semibold">{table.label}</h2>
            <p className="mb-4 text-xs text-muted-foreground">{t("footerPages.sizeGuide.measurementsPrefix")} {table.unit}</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    {table.headers.map((header) => (
                      <th key={header} className="py-2.5 pr-4 text-left font-semibold">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {table.rows.map((row) => (
                    <tr key={row.size}>
                      <td className="py-2.5 pr-4 font-medium">{row.size}</td>
                      {row.values.map((val, i) => (
                        <td key={i} className="py-2.5 pr-4 text-muted-foreground">{val}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <ContentSection title={t("footerPages.sizeGuide.sections.fitNotes.title")} variant="card">
          <p>
            Our sizing runs true to standard US sizing. If you are between sizes, we recommend sizing up for a
            more relaxed fit or sizing down for a closer fit. Still unsure? Contact our support team with your
            measurements and we will help you choose the right size.
          </p>
        </ContentSection>
      </div>
    </PageLayout>
  );
}
