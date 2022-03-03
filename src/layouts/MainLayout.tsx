import React, { FC, ReactNode } from "react"
import Head from "next/head"
import { useTypedSelector } from "../store/selectors"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Loading from "../components/Loading"

import { Box, ThemeProvider } from "@mui/material"
import { lightTheme } from "../styles/themes/lightTheme"
import { darkTheme } from "../styles/themes/darkTheme"
import { Theme } from "@mui/system"
import { THEME_MODE } from "../store/common/types"

interface IMainLayoutProps {
  children: ReactNode
  title: string
}

const MainLayout: FC<IMainLayoutProps> = ({ children, title }) => {
  // states from store
  const { loading, currentTheme } = useTypedSelector((state) => state.common)

  // change theme
  const theme: Theme =
    currentTheme === THEME_MODE.LIGHT ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <header>
        <Header />
      </header>

      <main>
        <Box
          width={"100%"}
          minHeight={"calc(100vh - 120px)"}
          bgcolor={theme.palette.background.default}
        >
          {loading ? <Loading /> : children}
        </Box>{" "}
      </main>

      <footer>
        <Footer />
      </footer>
    </ThemeProvider>
  )
}

export default MainLayout
