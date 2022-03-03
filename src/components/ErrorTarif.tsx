import { FC } from "react"
import { Box, Link, Typography } from "@mui/material"
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied"

const ErrorTarif: FC = () => {
  return (
    <Box
      width={"100%"}
      height={300}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      {/* line 1 */}
      <Typography component={"p"} variant={"h5"} textAlign={"center"}>
        <SentimentVeryDissatisfiedIcon color="error" /> К сожалению ваш тариф не
        позволяет просматривать данный контент...
      </Typography>

      {/* line 2 */}
      <Typography component={"p"} variant={"h6"}>
        Подробности{" "}
        <Link href="https://www.football-data.org/coverage" color="secondary">
          здесь
        </Link>
      </Typography>
    </Box>
  )
}

export default ErrorTarif
