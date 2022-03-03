import { FC } from "react"
import { useRouter } from "next/router"
import { useTypedSelector } from "../store/selectors"
import { useDispatch } from "react-redux"
import { setCompetitionCurrentPage } from "../store/competition/actions"
import { setMatchCurrentPage } from "../store/match/actions"
import { setTeamCurrentPage } from "../store/team/actions"
import { MATCHES_SHOW_MODE } from "../store/match/types"
import { Pagination } from "@mui/material"

const PaginationBlock: FC = () => {
  // states from store
  const { competition, team, match } = useTypedSelector((state) => state)
  const { loading } = useTypedSelector((state) => state.common)

  const dispatch = useDispatch()
  const router = useRouter()

  if (loading) {
    return <></>
  }

  /* pagination for main(leagues) page */
  if (router.route === "/") {
    return (
      <Pagination
        size="small"
        disabled={competition.competitions.filtered !== null}
        count={competition.pages.total}
        defaultPage={1}
        page={competition.pages.current}
        variant="outlined"
        color="secondary"
        onChange={(_, num) => dispatch(setCompetitionCurrentPage(num))}
      />
    )
  }

  /* pagination for teams page */
  if (router.route === "/teams") {
    return (
      <Pagination
        size="small"
        disabled={team.teams.filtered !== null}
        count={team.pages.total}
        defaultPage={1}
        page={team.pages.current}
        variant="outlined"
        color="secondary"
        onChange={(_, num) => dispatch(setTeamCurrentPage(num))}
      />
    )
  }

  /* pagination for matches page */
  if (
    (router.route.includes("/leagues") && match.matches.all.length > 0) ||
    (router.route.includes("/teams") && match.matches.all.length > 0)
  ) {
    return (
      <Pagination
        size="small"
        count={
          match.matches.showMode === MATCHES_SHOW_MODE.FILTERED
            ? match.pages.filtered.total
            : match.pages.all.total
        }
        defaultPage={1}
        page={
          match.matches.showMode === MATCHES_SHOW_MODE.FILTERED
            ? match.pages.filtered.current
            : match.pages.all.current
        }
        color="secondary"
        disabled={match.matches.all.length === 0 ? true : false}
        onChange={(_, num) => dispatch(setMatchCurrentPage(num))}
      />
    )
  }

  return <></>
}

export default PaginationBlock
