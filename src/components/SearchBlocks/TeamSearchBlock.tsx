import { FC, useCallback, useEffect, useState } from "react"
import { useTypedSelector } from "../../store/selectors"
import { useDispatch } from "react-redux"
import { ITeam } from "../../store/team/types"
import { teamData, ITeamDataItem } from "../../content/searchData/teamData"
import { setFilteredTeam, setTeamCurrentPage } from "../../store/team/actions"
import { Box, Autocomplete, TextField } from "@mui/material"
import Image from "next/image"

const TeamSearchBlock: FC = () => {
  // state from store
  const { teams } = useTypedSelector((state) => state.team)
  const dispatch = useDispatch()

  // searching key
  const [searchKey, setSearchKey] = useState<string>("")

  // find current team and recent to store
  const findTeam = useCallback(() => {
    const key = searchKey.split("-")

    teams.all.map((elem: ITeam) => {
      if (elem.name === key[0].trim()) {
        dispatch(setFilteredTeam([elem]))
        dispatch(setTeamCurrentPage(1))
      }
    })
  }, [dispatch, searchKey, teams.all])

  // find the total coincidence if search key has been changed
  useEffect(() => {
    findTeam()

    // clear searh key
    if (!searchKey.trim() && teams.filtered !== null) {
      dispatch(setFilteredTeam(null))
    }
  }, [searchKey, teams.filtered, dispatch, findTeam])

  return (
    <Box>
      {/* set searching props */}
      <Autocomplete
        id="country-select-demo"
        sx={{ maxWidth: { xs: "100%", sm: 450 } }}
        options={teamData}
        autoHighlight
        onInputChange={(e, value) => setSearchKey(value)}
        getOptionLabel={(option: ITeamDataItem) =>
          `${option.name} - ${option.country}`
        }
        // render result list
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <Image
              loading="lazy"
              width="20"
              height="20"
              src={option.crest}
              alt="flag"
            />
            <Box ml={2}>{`${option.name} - ${option.country}`}</Box>
          </Box>
        )}
        // render search input
        renderInput={(params) => (
          <TextField
            {...params}
            label="Поиск"
            variant="outlined"
            margin="normal"
            size="small"
            color="success"
          />
        )}
      />
    </Box>
  )
}

export default TeamSearchBlock
