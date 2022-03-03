import { FC } from "react"
import { useTypedSelector } from "../../store/selectors"
import { IMatch, MATCHES_SHOW_MODE } from "../../store/match/types"
import MatchTableRow from "./MatchTableRow"
import MatchTableCell from "./MatchTableCeil"
import ErrorTarif from "../ErrorTarif"
import NoResults from "../NoResults"

import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material"
import Loading from "../Loading"

interface IMatchTableProps {
  matchesProps: IMatch[]
}

const MatchTable: FC<IMatchTableProps> = ({ matchesProps }) => {
  // states from store
  const { matches, pages, errorTariff } = useTypedSelector(
    (state) => state.match
  )
  const { loading } = useTypedSelector((state) => state.common)

  // create table of matches
  const createMatchTable = () => {
    const currentPage =
      matches.showMode === MATCHES_SHOW_MODE.FILTERED
        ? pages.filtered.current
        : pages.all.current
    const from = currentPage * matches.showCount - matches.showCount
    const to = from + matches.showCount

    const result = []

    for (let i = from; i < to; i++) {
      if (matchesProps[i]) {
        result.push(<MatchTableRow match={matchesProps[i]} key={i} />)
      } else break
    }

    return result
  }

  if (loading)
    return (
      <>
        <Loading />
      </>
    )

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 730 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {/* table head date*/}
            <MatchTableCell align="left">Дата</MatchTableCell>

            {/* table head time*/}
            <MatchTableCell align="left" size={"small"}>
              Время
              <Typography>(МСК)</Typography>
            </MatchTableCell>

            {/* table head status*/}
            <MatchTableCell
              align="center"
              sx={{ display: { xs: "none", sm: "none", md: "table-cell" } }}
            >
              Статус
            </MatchTableCell>

            {/* table head home team*/}
            <MatchTableCell align="right" size={"small"}>
              Хозяева
            </MatchTableCell>

            {/* table head away team*/}
            <MatchTableCell align="left" size={"small"}>
              Гости
            </MatchTableCell>

            {/* table head score*/}
            <MatchTableCell align="center">
              <Typography>Счет</Typography> О- (Д) - (П)
            </MatchTableCell>
          </TableRow>
        </TableHead>
        <TableBody>{matches.all.length > 0 && createMatchTable()}</TableBody>
      </Table>
      {matches.all.length === 0 && !errorTariff && <NoResults />}
      {errorTariff && <ErrorTarif />}
    </TableContainer>
  )
}

export default MatchTable
