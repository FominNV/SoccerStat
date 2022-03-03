import { FC } from "react"
import ReactLoading from "react-loading"

import { Box } from "@mui/material"

const Loading: FC = () => {
  return (
    <Box
      position={"fixed"}
      width={"100%"}
      height={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <ReactLoading
        type={"spinningBubbles"}
        color={"green"}
        height={200}
        width={100}
      />
    </Box>
  )
}

export default Loading
