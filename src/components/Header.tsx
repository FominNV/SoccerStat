import { FC } from "react"
import { useTypedSelector } from "../store/selectors"
import { useDispatch } from "react-redux"
import { setCurrentTheme } from "../store/common/actions/setCurrentTheme"
import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"
import { THEME_MODE } from "../store/common/types"

import logo from "../content/images/logo.png"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import LightModeIcon from "@mui/icons-material/LightMode"
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material"

const Header: FC = () => {
  // states from store
  const { currentTheme } = useTypedSelector((state) => state.common)
  const router = useRouter()
  const dispatch = useDispatch()

  // toggle current theme
  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (currentTheme === THEME_MODE.LIGHT) {
      dispatch(setCurrentTheme(THEME_MODE.DARK))
      return
    }
    if (currentTheme === THEME_MODE.DARK) {
      dispatch(setCurrentTheme(THEME_MODE.LIGHT))
      return
    }
  }

  return (
    <AppBar position="static" color={"primary"}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Stack
            height={70}
            width={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}
            direction={"row"}
          >
            <Stack height={40} direction={"row"} spacing={3}>
              <Image src={logo} width={50} alt="logo" />
              <Link href="/" passHref>
                <Button
                  variant={
                    router.route === "/" || router.route.includes("/leagues")
                      ? "contained"
                      : "text"
                  }
                  color={"secondary"}
                  size={"small"}
                >
                  <Typography fontWeight={700} fontSize={14}>
                    Лиги
                  </Typography>
                </Button>
              </Link>
              <Link href="/teams" passHref>
                <Button
                  variant={
                    router.route.includes("/teams") ? "contained" : "text"
                  }
                  color={"secondary"}
                  size={"small"}
                >
                  <Typography fontWeight={700} fontSize={14}>
                    Команды
                  </Typography>
                </Button>
              </Link>
            </Stack>

            <Box mr={3}>
              <IconButton
                aria-label="theme"
                color="secondary"
                onClick={toggleTheme}
              >
                {currentTheme === THEME_MODE.LIGHT && <DarkModeIcon />}
                {currentTheme === THEME_MODE.DARK && <LightModeIcon />}
              </IconButton>
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
