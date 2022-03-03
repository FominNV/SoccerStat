import { FC } from "react"
import Link from "next/link"
import StyledBreadcrumb from "./StyledBreadcrumb"

import { Box, Breadcrumbs } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer"

interface IBreadLink {
  title: string
  route: string
}

interface IBreadcrumbsBlockProps {
  links: IBreadLink[]
}

const BreadcrumbsBlock: FC<IBreadcrumbsBlockProps> = ({ links }) => {
  return (
    <Box padding={"1rem"}>
      <Breadcrumbs aria-label="breadcrumb" separator="›">
        {links &&
          links.map((elem: IBreadLink, index: number) => (
            <Link href={elem.route} key={index / 1000}>
              {/* first link-crumb */}
              {index === 0 ? (
                <StyledBreadcrumb
                  component="a"
                  color="primary"
                  label={elem.title}
                  icon={<HomeIcon fontSize="small" />}
                  key={index}
                />
              ) : (
                // second and more crumb
                <StyledBreadcrumb
                  component="a"
                  label={elem.title}
                  color="primary"
                  icon={<SportsSoccerIcon fontSize="small" />}
                  key={index}
                />
              )}
            </Link>
          ))}
      </Breadcrumbs>
    </Box>
  )
}

export default BreadcrumbsBlock
