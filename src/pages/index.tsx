import { useCallback, useEffect } from "react"
import { NextPage } from "next"
import { useTypedSelector } from "../store/selectors"
import { useDispatch } from "react-redux"
import { setLoading } from "../store/common/actions/setLoading"
import LeagueList from "../components/Leagues/LeagueList"
import LeagueSearchBlock from "../components/SearchBlocks/LeagueSearchBlock"
import MainLayout from "../layouts/MainLayout"
import {
  getCompetitions,
  setFilteredCompetition,
} from "../store/competition/actions"

import { Container } from "@mui/material"

const Home: NextPage = () => {
  // states from store
  const { competitions } = useTypedSelector((state) => state.competition)
  const dispatch = useDispatch()

  // load competitions
  const loadCompetitions = useCallback(async () => {
    dispatch(setLoading(true))
    await dispatch(getCompetitions())
    dispatch(setLoading(false))
    dispatch(setFilteredCompetition(null))
  }, [dispatch])

  useEffect(() => {
    loadCompetitions()
  }, [loadCompetitions])

  return (
    <MainLayout title={"Лиги"}>
      <Container maxWidth={"xl"}>
        <LeagueSearchBlock />
        {competitions.all && (
          <LeagueList
            leagues={
              competitions.filtered ? competitions.filtered : competitions.all
            }
          />
        )}
      </Container>
    </MainLayout>
  )
}

export default Home
