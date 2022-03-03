import { useCallback, useEffect } from "react"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { useTypedSelector } from "../../store/selectors"
import { useDispatch } from "react-redux"
import { getMatches, setMatchCurrentPage } from "../../store/match/actions"
import { GET_MATCHES_MODE, MATCHES_SHOW_MODE } from "../../store/match/types"
import MainLayout from "../../layouts/MainLayout"
import DateFilter from "../../components/DateFilter/DateFilter"
import MatchTable from "../../components/Matches/MatchTable"
import BreadcrumbsBlock from "../../components/Breadcrumbs/BreadcrumbsBlock"

import { Container, Typography, useTheme } from "@mui/material"
import { setLoading } from "../../store/common/actions/setLoading"

const TeamMatches: NextPage = () => {
  // state from store
  const { matches } = useTypedSelector((state) => state.match)

  const dispatch = useDispatch()
  const router = useRouter()
  const theme = useTheme()

  // load matches
  const loadMatches = useCallback(async () => {
    dispatch(setLoading(true))
    await dispatch(
      getMatches(Number(router.query.id), GET_MATCHES_MODE.TEAM_MODE)
    )
    dispatch(setMatchCurrentPage(1))
    dispatch(setLoading(false))
  }, [dispatch, router.query.id])

  useEffect(() => {
    loadMatches()
  }, [loadMatches])

  return (
    <MainLayout title={`Команды / ${router.query.name} / Матчи`}>
      <Container maxWidth="xl">
        {/* links */}
        <BreadcrumbsBlock
          links={[
            { title: "Команды", route: "/teams" },
            { title: router.query.name as string, route: "#" },
          ]}
        />

        {/* page logo */}
        <Typography
          gutterBottom
          variant="h4"
          component="h4"
          color={theme.palette.error.main}
        >
          Матчи
        </Typography>

        {/* filter date */}
        <DateFilter />

        {/* all matches table */}
        {matches.all && matches.showMode === MATCHES_SHOW_MODE.ALL && (
          <MatchTable matchesProps={matches.all} />
        )}

        {/* filter matches table */}
        {matches.all && matches.showMode === MATCHES_SHOW_MODE.FILTERED && (
          <MatchTable matchesProps={matches.filtered} />
        )}
      </Container>
    </MainLayout>
  )
}

export default TeamMatches
