import { FC } from "react"
import { useTypedSelector } from "../../store/selectors"
import { ITeam } from "../../store/team/types"
import TeamCard from "./TeamCard"
import { Box } from "@mui/material"

interface ILeagueListProps {
  teamProps: ITeam[]
}

const TeamList: FC<ILeagueListProps> = ({ teamProps }) => {
  // states from store
  const { pages, teams } = useTypedSelector((state) => state.team)

  // filter the needable pack of competitions and render ones
  const showLeagues = () => {
    const from = pages.current * teams.showCount - teams.showCount
    const to = from + teams.showCount
    const result = []

    for (let i = from; i < to; i++) {
      if (teamProps[i]) {
        result.push(<TeamCard data={teamProps[i]} key={i} />)
      } else break
    }

    return result
  }

  return (
    <Box
      sx={{
        display: "grid",
        justifyContent: "center",
        gridAutoFlow: "row",
        gap: 2,
        gridTemplateColumns: {
          xl: "repeat(6, 2fr)",
          lg: "repeat(5, 1fr)",
          md: "repeat(4, 1fr)",
          sm: "repeat(3, 1fr)",
          xs: "repeat(2, 1fr)",
        },
      }}
    >
      {teamProps && showLeagues()}
    </Box>
  )
}

export default TeamList
