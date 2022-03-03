import { FC } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import { ITeam } from "../../store/team/types"
import { Box, Card, CardContent, Typography, useTheme } from "@mui/material"

interface ITeamCardProps {
  data: ITeam
}

const TeamCard: FC<ITeamCardProps> = ({ data }) => {
  const router = useRouter()
  const theme = useTheme()

  // link to matches page and pass query(name)
  const onClickHandler = (e: React.MouseEvent<HTMLDivElement>): void => {
    router.push(`/teams/${data.id}?name=${data.name}`)
  }

  return (
    <Box
      sx={{
        cursor: "pointer",
        ":hover": {
          boxShadow: `0 0 4px 4px ${theme.palette.secondary.light}`,
        },
      }}
      display="inline-block"
      onClick={onClickHandler}
      bgcolor={theme.palette.background.paper}
      position={"relative"}
    >
      <Card sx={{ maxWidth: 250, maxHeight: 300 }}>
        {/* image */}
        <Box textAlign={"center"} mt={1}>
          <Image src={data.crestUrl} width={80} height={80} alt="crest" />
        </Box>
        <CardContent>
          {/* name of league */}
          <Typography
            gutterBottom
            color={theme.palette.text.primary}
            variant="h6"
            component="h6"
            textAlign={"center"}
            height={60}
          >
            {data.name}
          </Typography>

          {/* country */}
          <Typography
            gutterBottom
            color={theme.palette.text.secondary}
            component="span"
            textAlign={"center"}
            position={"absolute"}
            left={10}
            bottom={0}
          >
            {data.area.name}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default TeamCard
