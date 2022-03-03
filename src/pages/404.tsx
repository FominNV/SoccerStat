import { useRouter } from "next/router"
import { NextPage } from "next"
import Link from "next/link"
import { Box, Typography } from "@mui/material"

const Page404: NextPage = () => {
  const router = useRouter()

  return (
    <Box
      width={"100%"}
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box>
        <Typography variant="h5">
          <Typography variant="h3">Ошибка:</Typography>
          по запросу{" "}
          <Typography component={"span"} variant="h5" color={"blue"}>
            &quot;{router.asPath}&quot;
          </Typography>{" "}
          ничего не найдено
        </Typography>

        <Box mt={5}>
          <Typography variant="h6">
            Вернуться на <Link href={"/"}>главную страницу</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Page404
