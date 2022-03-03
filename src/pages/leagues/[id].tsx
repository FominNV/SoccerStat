import { useCallback, useEffect } from "react"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { useTypedSelector } from "../../store/selectors"
import { useDispatch } from "react-redux"
import { setLoading } from "../../store/common/actions/setLoading"
import { GET_MATCHES_MODE, MATCHES_SHOW_MODE } from "../../store/match/types"
import MainLayout from "../../layouts/MainLayout"
import DateFilter from "../../components/DateFilter/DateFilter"
import MatchTable from "../../components/Matches/MatchTable"
import BreadcrumbsBlock from "../../components/Breadcrumbs/BreadcrumbsBlock"

import { Container, Typography, useTheme } from "@mui/material"
import { getMatches, setMatchCurrentPage } from "../../store/match/actions"

const LeagueMatches: NextPage = () => {
  // state from store
  const { matches } = useTypedSelector((state) => state.match)

  const dispatch = useDispatch()
  const router = useRouter()
  const theme = useTheme()

  // load matches
  const loadMatches = useCallback(async () => {
    dispatch(setLoading(true))
    dispatch(setMatchCurrentPage(1))
    await dispatch(
      getMatches(Number(router.query.id), GET_MATCHES_MODE.COMPETITION_MODE)
    )
    dispatch(setLoading(false))
  }, [dispatch, router.query.id])

  useEffect(() => {
    loadMatches()
  }, [loadMatches])

  return (
    <MainLayout title={`Лиги / ${router.query.name} / Матчи`}>
      <Container maxWidth="xl">
        {/* links */}
        <BreadcrumbsBlock
          links={[
            { title: "Лиги", route: "/" },
            { title: router.query.name as string, route: "#" },
          ]}
        />

        {/* page logo */}
        <Typography
          mb={5}
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

export default LeagueMatches
