import { memo, useCallback } from "react"
import { useTranslation } from "react-i18next"
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps"
import { motion } from "framer-motion"
import { useTheme } from "@/shared/providers/theme-provider"
import type { Branch } from "@/features/branches/types"

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

type BranchMapProps = {
  branches: Branch[]
  activeBranchId: string | null
  onBranchSelect: (branchId: string) => void
};

const BranchMap = memo(function BranchMap({
  branches,
  activeBranchId,
  onBranchSelect,
}: BranchMapProps) {
  const { t } = useTranslation()
  const { theme } = useTheme()

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)

  const mapColors = {
    fill: isDark ? "oklch(0.2 0.004 85)" : "oklch(0.955 0.004 85)",
    stroke: isDark ? "oklch(1 0 0 / 8%)" : "oklch(0.92 0.004 85)",
    hover: isDark ? "oklch(0.25 0.004 85)" : "oklch(0.94 0.005 85)",
    water: isDark ? "oklch(0.15 0.004 85)" : "oklch(0.97 0.002 85)",
  }

  const handleClick = useCallback(
    (branchId: string) => {
      onBranchSelect(branchId)
    },
    [onBranchSelect],
  )

  return (
    <div className="h-full w-full overflow-hidden border-2 border-border/40 bg-card">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 140,
        }}
        className="h-full w-full"
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={mapColors.fill}
                stroke={mapColors.stroke}
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { fill: mapColors.hover, outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {branches.map((branch) => {
          const isActive = activeBranchId === branch.id

          return (
            <Marker
              key={branch.id}
              coordinates={[branch.coordinates.lng, branch.coordinates.lat]}
            >
              <motion.g
                initial={false}
                animate={isActive ? { scale: 1.2 } : { scale: 1 }}
                transition={{
                  duration: 0.3,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                style={{ cursor: "pointer" }}
                onClick={() => handleClick(branch.id)}
                role="button"
                aria-label={t("branches.map.markerAria", { name: branch.name, city: branch.city })}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    handleClick(branch.id)
                  }
                }}
              >
                <circle
                  r={isActive ? 10 : 7}
                  fill={
                    isActive
                      ? "oklch(0.12 0.008 85)"
                      : "oklch(0.55 0.01 85)"
                  }
                  stroke={
                    isActive
                      ? "oklch(1 0 0)"
                      : "oklch(1 0 0 / 60%)"
                  }
                  strokeWidth={isActive ? 3 : 2}
                  className="transition-all duration-300"
                />
                {isActive && (
                  <circle
                    r={16}
                    fill="oklch(0.12 0.008 85 / 0.15)"
                    stroke="none"
                  />
                )}
                {branch.isHeadquarters && (
                  <circle
                    r={3}
                    fill="oklch(1 0 0)"
                    stroke="none"
                  />
                )}
              </motion.g>
            </Marker>
          )
        })}
      </ComposableMap>
    </div>
  )
})

export default BranchMap
