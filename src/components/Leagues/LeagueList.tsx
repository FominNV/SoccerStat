import { FC } from "react"
import { useTypedSelector } from "../../store/selectors"
import LeagueCard from "./LeagueCard"
import { ICompetition } from "../../store/competition/types"
import { Box } from "@mui/material"

interface ILeagueListProps {
  leagues: ICompetition[]
}

const LeagueList: FC<ILeagueListProps> = ({ leagues }) => {
  // states from store
  const { pages, competitions } = useTypedSelector((state) => state.competition)

  // filter the needable pack of competitions and render ones
  const showCompetitions = () => {
    const from = pages.current * competitions.showCount - competitions.showCount
    const to = from + competitions.showCount
    const result = []

    for (let i = from; i < to; i++) {
      if (leagues[i]) {
        result.push(<LeagueCard data={leagues[i]} key={i} />)
      } else break
    }

    return result
  }

  return (
    <Box
      sx={{
        display: "grid",
        justifyContent: "space-around",
        gridAutoFlow: "row",
        gap: 2,
        gridTemplateColumns: {
          xl: "repeat(4, 2fr)",
          lg: "repeat(3, 2fr)",
          md: "repeat(2, 2fr)",
          sm: "repeat(2, 2fr)",
          xs: "repeat(1, 2fr)",
        },
      }}
    >
      {leagues && showCompetitions()}
    </Box>
  )
}

export default LeagueList
