import React, { FunctionComponent, ReactNode } from "react"
import { ImageDataLike } from "gatsby-plugin-image"

import {
  Footer,
  BottomBanner,
  DevelopmentBanner,
  Navbar,
} from "@thepolicylab-projectportals/gatsby-theme-project-portal/src/components"

import { GovBanner } from "../../../components/GovBanner"

export interface ThemeLayoutProps {
  path: string
  title: string
  description: string
  children: ReactNode
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    projectPortalConfig: {
      showDevBanner?: boolean
      pages: {
        name: string
        link: string
        show: boolean
      }[]
      staticText: {
        bottomBanner: {
          text: string
          link: string
        }
        footer: {
          copyright: string
          links: {
            title: string
            link: string
          }[]
          heading: {
            title: string
            link: string
          }
        }
      }
    }
    navbarLogo?: ImageDataLike
    bottomBannerLogo?: ImageDataLike
    footerLogo?: ImageDataLike
  }
}

export const Layout: FunctionComponent<ThemeLayoutProps> = ({
  path,
  data: {
    site: {
      siteMetadata: { title: siteTitle },
    },
    projectPortalConfig: {
      showDevBanner,
      pages,
      staticText: { bottomBanner, footer },
    },
    navbarLogo,
    bottomBannerLogo,
    footerLogo,
  },
  children,
}) => {
  return (
    <>
      <GovBanner />
      <div className="w-full mx-0 bg-white border-0 xl:container xl:p-0 xl:mx-auto xl:border-l xl:border-r xl:border-gray-200 flex flex-col min-h-screen">
        {showDevBanner && <DevelopmentBanner />}
        <Navbar
          title={siteTitle}
          image={navbarLogo}
          pages={pages}
          activePage={path}
        />
        <div className="flex-1">{children}</div>
        <BottomBanner
          text={bottomBanner.text}
          link={bottomBanner.link}
          linkId={"bottomBannerLink"}
          image={bottomBannerLogo}
        />
        <Footer
          heading={footer.heading}
          copyright={footer.copyright}
          links={footer.links}
          image={{
            imageData: footerLogo,
            altText: siteTitle + " logo",
          }}
        />
      </div>
    </>
  )
}
