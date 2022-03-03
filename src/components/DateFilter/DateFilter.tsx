import React, { FC, useEffect, useState } from "react"
import { useTypedSelector } from "../../store/selectors"
import { useDispatch } from "react-redux"
import { filterMatches, setMatchesShowMode } from "../../store/match/actions"
import { MATCHES_SHOW_MODE } from "../../store/match/types"

import FilterListIcon from "@mui/icons-material/FilterList"
import { Button, Stack } from "@mui/material"
import ruLocale from "date-fns/locale/ru"
import ClearIcon from "@mui/icons-material/Clear"
import { LoadingButton } from "@mui/lab"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import DatePickerBlock from "./DatePickerBlock"

const DateFilter: FC = () => {
  // state from store
  const { matches } = useTypedSelector((state) => state.match)
  const dispatch = useDispatch()

  // date-filter states
  const [from, setFrom] = useState<Date | null>(null)
  const [to, setTo] = useState<Date | null>(null)

  // input dangers
  const [dangerFrom, setDangerFrom] = useState<boolean>(false)
  const [dangerTo, setDangerTo] = useState<boolean>(false)

  // fill the filter inputs
  useEffect(() => {
    if (matches.all.length > 0) {
      setFrom(new Date(matches.all[0].utcDate))
      setTo(new Date(matches.all[matches.all.length - 1].utcDate))
    }
  }, [matches.all])

  // check date inputs and set filter date
  const setFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!from) {
      setDangerFrom(true)
      return false
    }
    if (!to) {
      setDangerTo(true)
      return false
    }
    setDangerFrom(false)
    setDangerTo(false)
    dispatch(filterMatches(matches.all, from, to))
  }

  // turn off filter mode
  const clearFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(setMatchesShowMode(MATCHES_SHOW_MODE.ALL))
  }

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      spacing={1}
      sx={{ maxWidth: { xs: "100%", sm: 650 } }}
      mb={2}
    >
      <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
          <DatePickerBlock
            label={"С"}
            value={from}
            setValue={setFrom}
            danger={dangerFrom}
          />

          <DatePickerBlock
            label={"По"}
            value={to}
            setValue={setTo}
            danger={dangerTo}
          />
        </LocalizationProvider>
      </Stack>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
        {/* set filter */}
        <LoadingButton
          disabled={matches.all.length > 0 ? false : true}
          loadingPosition="start"
          color="success"
          startIcon={<FilterListIcon />}
          variant="contained"
          size="medium"
          onClick={setFilter}
        >
          Фильтр
        </LoadingButton>

        {/* clear filter */}
        <Button
          color="secondary"
          variant="contained"
          size="medium"
          startIcon={<ClearIcon />}
          onClick={clearFilter}
          disabled={
            matches.showMode === MATCHES_SHOW_MODE.FILTERED ? false : true
          }
        >
          Сбросить
        </Button>
      </Stack>
    </Stack>
  )
}

export default DateFilter
