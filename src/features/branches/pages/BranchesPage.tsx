import { useState, useCallback, useMemo, useRef } from "react"
import { useTranslation } from "react-i18next"
import PageHelmet from "@/shared/components/PageHelmet"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import ScrollReveal from "@/components/shared/ScrollReveal"
import { branches as branchData } from "@/features/branches/data/branches"
import BranchMap from "@/features/branches/components/BranchMap"
import BranchCard from "@/features/branches/components/BranchCard"
import BranchEmpty from "@/features/branches/components/BranchEmpty"
import CampaignHeader from "@/components/shared/components/CampaignHeader"
import heroVideo from "@/assets/adidas_-_you_got_this (1080p).mp4"

export default function BranchesPage() {
  const { t } = useTranslation()
  const [activeBranchId, setActiveBranchId] = useState<string | null>(
    () => (branchData.length > 0 ? branchData[0].id : null),
  )
  const branchListRef = useRef<HTMLDivElement>(null)

  const branches = useMemo(() => branchData, [])

  const handleBranchSelect = useCallback(
    (branchId: string) => {
      setActiveBranchId(branchId)
      const card = document.getElementById(`branch-card-${branchId}`)
      if (card && branchListRef.current) {
        card.scrollIntoView({ behavior: "smooth", block: "nearest" })
      }
    },
    [],
  )

  const activeBranch = useMemo(
    () => branches.find((b) => b.id === activeBranchId),
    [branches, activeBranchId],
  )

  if (branches.length === 0) {
    return (
      <>
        <CampaignHeader
          title={t("branches.page.hero.title")}
          subtitle={t("branches.page.hero.subtitle")}
          description={t("branches.page.hero.description")}
          videoUrl={heroVideo}
        />
        <BranchEmpty />
      </>
    )
  }

  return (
    <>
      <PageHelmet
        title={t("branches.page.title")}
        description={t("branches.page.description")}
      />

      <CampaignHeader
        title={t("branches.page.hero.title")}
        subtitle={t("branches.page.hero.subtitle")}
        description={t("branches.page.hero.description")}
        videoUrl={heroVideo}
      />

      <div className="container-layout section-py pt-8">
        <Breadcrumb
          items={[
            { label: t("branches.page.breadcrumb.home"), href: "/" },
            { label: t("branches.page.breadcrumb.branches") },
          ]}
          className="mb-6"
        />

        <ScrollReveal>
          <div className="mb-12 border-l-4 border-foreground pl-6">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground/40">
              {t("branches.page.catalog.label")}
            </span>
            <h1 className="mt-3 text-5xl font-black uppercase tracking-tighter text-foreground md:text-7xl">
              {t("branches.page.catalog.title")}
            </h1>
            <p className="mt-2 text-sm font-bold text-muted-foreground/60 uppercase tracking-widest">
              {t("branches.page.catalog.count", { count: branches.length })}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
          <div className="h-[400px] md:h-[500px] lg:h-[600px] lg:sticky lg:top-24">
            <BranchMap
              branches={branches}
              activeBranchId={activeBranchId}
              onBranchSelect={handleBranchSelect}
            />
          </div>

          <div
            ref={branchListRef}
            className="flex flex-col gap-4 md:max-h-[600px] md:overflow-y-auto md:pr-2 [scrollbar-width:thin] [scrollbar-color:oklch(0.55_0.01_85_/_0.15)_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-foreground/10 [&::-webkit-scrollbar-thumb]:hover:bg-foreground/25"
          >
            {branches.map((branch, index) => (
              <ScrollReveal
                key={branch.id}
                delay={index * 0.05}
                direction="right"
                distance={16}
              >
                <div id={`branch-card-${branch.id}`}>
                  <BranchCard
                    branch={branch}
                    isActive={activeBranchId === branch.id}
                    onSelect={handleBranchSelect}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {activeBranch && (
          <div className="mt-12 border-t-2 border-border/40 pt-8">
            <div className="border-l-4 border-foreground pl-6">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/40">
                {t("branches.page.selected.label")}
              </span>
              <h2 className="mt-2 text-3xl font-black uppercase tracking-tighter text-foreground">
                {activeBranch.name}
              </h2>
              <p className="mt-1 text-sm font-medium text-muted-foreground/60">
                {activeBranch.address}, {activeBranch.city}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
