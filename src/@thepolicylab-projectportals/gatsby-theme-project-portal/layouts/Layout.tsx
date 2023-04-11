import React, { FunctionComponent, ReactNode } from "react"
import {
  Footer,
  BottomBanner,
  Navbar,
  SiteMetadata,
} from "@thepolicylab-projectportals/gatsby-theme-project-portal/src/components"

import { GovBanner } from "../../GovBanner"

import { useProjectPortalConfig } from "@thepolicylab-projectportals/gatsby-theme-project-portal/src/hooks"

interface LayoutProps {
  activePage?: string
  title: string
  description: string
  children: ReactNode
  showDevBanner?: boolean
}

function getShowDevBannerSetting(showDevBanner?: boolean) {
  // Checks whether the "showDevBanner" argument is explicitly set and use it if it is (i.e. not null),
  // else use the showDevBannerThemeSetting.
  const { showDevBanner: showDevBannerThemeSetting } = useProjectPortalConfig()
  return showDevBanner ?? showDevBannerThemeSetting
}

export const Layout: FunctionComponent<LayoutProps> = ({
  activePage,
  title,
  description,
  showDevBanner,
  children,
}) => {
  const coalescedShowDevBanner = getShowDevBannerSetting(showDevBanner)

  return (
    <div className="w-full mx-0 bg-white border-0 xl:container xl:p-0 xl:mx-auto xl:border-l xl:border-r xl:border-gray-200 flex flex-col min-h-screen">
      <GovBanner/>
      <SiteMetadata title={title} description={description} />
      <Navbar activePage={activePage} />
      <div className="flex-1">{children}</div>
      <BottomBanner />
      <Footer />
    </div>
  )
}
