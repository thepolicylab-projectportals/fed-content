import React, { FunctionComponent } from "react"

import {
  Layout as ThemeLayout,
  LayoutProps as ThemeLayoutProps,
} from "@thepolicylab-projectportals/gatsby-theme-project-portal/src/layouts/Layout"

import { GovBanner } from "../../../components/GovBanner"

export const Layout: FunctionComponent<ThemeLayoutProps> = ({
  path,
  data,
  children,
}) => {
  return (
    <>
      <GovBanner />
      <ThemeLayout path={path} data={data}>
        {children}
      </ThemeLayout>
    </>
  )
}
