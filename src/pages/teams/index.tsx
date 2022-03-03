import { useCallback, useEffect } from "react"
import { NextPage } from "next"
import { useTypedSelector } from "../../store/selectors"
import { useDispatch } from "react-redux"
import { getTeams, setFilteredTeam } from "../../store/team/actions"
import { setLoading } from "../../store/common/actions/setLoading"
import TeamSearchBlock from "../../components/SearchBlocks/TeamSearchBlock"
import TeamList from "../../components/Teams/TeamList"
import MainLayout from "../../layouts/MainLayout"

import { Container } from "@mui/material"

const Teams: NextPage = () => {
  //states from store
  const { teams } = useTypedSelector((state) => state.team)
  const dispatch = useDispatch()

  // load teams
  const loadTeams = useCallback(async () => {
    dispatch(setLoading(true))
    await dispatch(getTeams())
    dispatch(setLoading(false))
    dispatch(setFilteredTeam(null))
  }, [dispatch])

  useEffect(() => {
    loadTeams()
  }, [loadTeams])

  return (
    <MainLayout title={"Команды"}>
      <Container maxWidth={"xl"}>
        <TeamSearchBlock />
        {teams.all && (
          <TeamList teamProps={teams.filtered ? teams.filtered : teams.all} />
        )}
      </Container>
    </MainLayout>
  )
}

export default Teams
