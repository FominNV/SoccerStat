import { FC, useCallback, useEffect, useState } from "react"
import { useTypedSelector } from "../../store/selectors"
import { useDispatch } from "react-redux"
import { ICompetition } from "../../store/competition/types"
import { Box, TextField, Autocomplete } from "@mui/material"

import {
  setCompetitionCurrentPage,
  setFilteredCompetition,
} from "../../store/competition/actions"

import {
  competitionData,
  ICompetitionDataItem,
} from "../../content/searchData/competitionData"
import Image from "next/image"

const LeagueSearchBlock: FC = () => {
  // states from store
  const { competitions } = useTypedSelector((state) => state.competition)
  const dispatch = useDispatch()

  // searching key
  const [searchKey, setSearchKey] = useState<string>("")

  // find current competition and recent to store
  const findCompetition = useCallback(() => {
    const key = searchKey.split("-")

    competitions.all.map((elem: ICompetition) => {
      if (elem.name === key[0].trim()) {
        dispatch(setFilteredCompetition([elem]))
        dispatch(setCompetitionCurrentPage(1))
      }
    })
  }, [dispatch, competitions.all, searchKey])

  // find the total coincidence if search key has been changed
  useEffect(() => {
    findCompetition()

    // clear searh key
    if (!searchKey.trim() && competitions.filtered !== null) {
      dispatch(setFilteredCompetition(null))
    }
  }, [searchKey, competitions.filtered, dispatch, findCompetition])

  return (
    <Box>
      {/* set searching props */}
      <Autocomplete
        id="country-select-demo"
        sx={{ maxWidth: { xs: "100%", sm: 450 } }}
        options={competitionData}
        autoHighlight
        onInputChange={(e, value) => setSearchKey(value)}
        getOptionLabel={(option: ICompetitionDataItem) =>
          `${option.title} - ${option.country}`
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
              src={`https://flagcdn.com/w20/${option.countryCode.toLowerCase()}.png`}
              alt="flag"
            />
            <Box ml={2}>{option.title}</Box>
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

export default LeagueSearchBlock
