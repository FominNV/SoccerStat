import { FC } from "react"
import PaginationBlock from "./PaginationBlock"
import { Box, Container, useTheme } from "@mui/material"

const Footer: FC = () => {
  const theme = useTheme()
  return (
    <Box position="static" width={"100%"} bgcolor={theme.palette.primary.main}>
      <Container maxWidth="xl">
        <Box
          height={50}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <PaginationBlock />
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
