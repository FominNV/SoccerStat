import { FC } from "react"
import MatchStatus, { MATCH_STATUS } from "./MatchStatus"
import MatchTableCell from "./MatchTableCeil"
import { IMatch } from "../../store/match/types"

import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium"
import { Box, Typography, TableRow } from "@mui/material"
import { styled } from "@mui/material/styles"
import { format } from "date-fns"

interface IMatchTableRowProps {
  match: IMatch
}

const MatchTableRow: FC<IMatchTableRowProps> = ({ match }) => {
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }))

  return (
    <StyledTableRow>
      {/* Date */}
      <MatchTableCell component="th" scope="row" align="left">
        {format(new Date(match.utcDate), "dd-MM-yyyy")}
      </MatchTableCell>

      {/* Time */}
      <MatchTableCell align="left" size={"small"}>
        {match.status === "SCHEDULED" ? (
          <Typography color={"success"}>
            {format(new Date(match.utcDate), "H-mm")}
          </Typography>
        ) : (
          <Typography color={"brown"} sx={{ fontSize: 14 }}>
            {format(new Date(match.utcDate), "H-mm")}
          </Typography>
        )}
      </MatchTableCell>

      {/* Status */}
      <MatchTableCell
        align="center"
        sx={{ display: { xs: "none", sm: "none", md: "table-cell" } }}
      >
        <MatchStatus status={match.status as MATCH_STATUS} />
      </MatchTableCell>

      {/* Home team */}
      <MatchTableCell align="right" size={"small"}>
        <Typography
          component="div"
          position={"relative"}
          display={"inline-block"}
          sx={{ fontSize: 13 }}
        >
          <Box
            component={"div"}
            display={"inline-block"}
            position={"absolute"}
            left={-30}
            color="orange"
          >
            {match.score.winner === "HOME_TEAM" && <WorkspacePremiumIcon />}
          </Box>

          {match.homeTeam.name}
        </Typography>
      </MatchTableCell>

      {/* Away team */}
      <MatchTableCell align="left" size={"small"}>
        <Typography
          component="div"
          position={"relative"}
          display={"inline-block"}
          sx={{ fontSize: 13 }}
        >
          <Box
            component={"div"}
            display={"inline-block"}
            position={"absolute"}
            right={-30}
            color="orange"
          >
            {match.score.winner === "AWAY_TEAM" && <WorkspacePremiumIcon />}
          </Box>

          {match.awayTeam.name}
        </Typography>
      </MatchTableCell>

      {/* Score */}
      <MatchTableCell align="center">
        {/* Full time */}
        {match.score.fullTime.homeTeam !== null && (
          <>
            {match.score.fullTime.homeTeam}
            {" : "}
            {match.score.fullTime.awayTeam}
          </>
        )}

        {/* Extra time */}
        {match.score.extraTime.homeTeam !== null && (
          <>
            {" - ("}
            {match.score.extraTime.homeTeam}
            {" : "}
            {match.score.extraTime.awayTeam}
            {") "}
          </>
        )}

        {/* Penalties */}
        {match.score.penalties.homeTeam !== null && (
          <>
            {" - ("}
            {match.score.penalties.homeTeam}
            {" : "}
            {match.score.penalties.awayTeam}
            {") "}
          </>
        )}
      </MatchTableCell>
    </StyledTableRow>
  )
}

export default MatchTableRow
