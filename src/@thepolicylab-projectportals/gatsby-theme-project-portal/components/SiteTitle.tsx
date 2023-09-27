import React, { FunctionComponent } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { SiteTitleProps } from "@thepolicylab-projectportals/gatsby-theme-project-portal/src/components/SiteTitle"

export const SiteTitle: FunctionComponent<SiteTitleProps> = ({ image }) => {
  return (
    <>
      {image && (
        <GatsbyImage
          className="xl:inline-block logotype"
          image={getImage(image)}
          alt={"nav_logo"}
        />
      )}
    </>
  )
}
