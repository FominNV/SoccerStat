import { FC } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import { ICompetition } from "../../store/competition/types"

import neutralEmblem from "../../content/images/neutral_emblem.png"
import { Box, Card, CardContent, Typography, useTheme } from "@mui/material"

interface ILeagueCardProps {
  data: ICompetition
}

const LeagueCard: FC<ILeagueCardProps> = ({ data }) => {
  const router = useRouter()
  const theme = useTheme()

  // link to matches page and pass query(name)
  const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    router.push(`/leagues/${data.id}?name=${data.name}`)
  }

  return (
    <Box
      sx={{
        cursor: "pointer",
        ":hover": {
          boxShadow: `0 0 4px 4px ${theme.palette.primary.contrastText}`,
        },
      }}
      display="inline-block"
      onClick={onClickHandler}
      bgcolor={theme.palette.background.paper}
    >
      <Card sx={{ maxWidth: 500, height: 200 }}>
        {/* image */}
        <Box textAlign={"center"}>
          <Image
            src={data.emblemUrl ? data.emblemUrl : neutralEmblem}
            width={100}
            height={100}
            alt="emblem"
          />
        </Box>
        <CardContent>
          <Box width={"100%"} position={"relative"}>
            {/* name of league */}
            <Typography
              gutterBottom
              variant="h6"
              component="h6"
              textAlign={"center"}
              bgcolor={theme.palette.primary.dark}
              color={theme.palette.text.primary}
            >
              {data.name}
            </Typography>

            {/* country */}
            <Typography
              gutterBottom
              color={theme.palette.text.secondary}
              component="div"
              textAlign={"center"}
              position={"absolute"}
              left={10}
              bottom={-45}
            >
              {data.area.name}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export default LeagueCard
