import { FC } from "react"
import { Box, Typography } from "@mui/material"
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied"

const NoResults: FC = () => {
  return (
    <Box
      width={"100%"}
      height={300}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Typography component={"p"} variant={"h5"} textAlign={"center"}>
        <SentimentVeryDissatisfiedIcon color="error" /> Нет результатов
      </Typography>
    </Box>
  )
}

export default NoResults
