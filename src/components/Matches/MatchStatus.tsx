import { FC } from "react"
import { Typography } from "@mui/material"

export enum MATCH_STATUS {
  SCHEDULED = "SCHEDULED",
  LIVE = "LIVE",
  IN_PLAY = "IN_PLAY",
  PAUSED = "PAUSED",
  FINISHED = "FINISHED",
  POSTPONED = "POSTPONED",
  SUSPENDED = "SUSPENDED",
  CANCELED = "CANCELED",
}

interface IMatchStatusProps {
  status: MATCH_STATUS
}

const MatchStatus: FC<IMatchStatusProps> = ({ status }) => {
  // translate current string and return this one
  switch (status) {
    case MATCH_STATUS.SCHEDULED:
      return (
        <Typography color={"green"} sx={{ fontSize: 13 }}>
          {"Запланирован"}
        </Typography>
      )

    case MATCH_STATUS.LIVE:
      return (
        <Typography color={"red"} sx={{ fontSize: 13 }}>
          {"В прямом эфире"}
        </Typography>
      )

    case MATCH_STATUS.IN_PLAY:
      return (
        <Typography color={"rebeccapurple"} sx={{ fontSize: 13 }}>
          {"В игре"}
        </Typography>
      )

    case MATCH_STATUS.PAUSED:
      return (
        <Typography color={"yellow"} sx={{ fontSize: 13 }}>
          {"Пауза"}
        </Typography>
      )

    case MATCH_STATUS.FINISHED:
      return (
        <Typography color={"brown"} sx={{ fontSize: 13 }}>
          {"Завершен"}
        </Typography>
      )

    case MATCH_STATUS.POSTPONED:
      return (
        <Typography color={"greenyellow"} sx={{ fontSize: 13 }}>
          {"Отложен"}
        </Typography>
      )

    case MATCH_STATUS.SUSPENDED:
      return (
        <Typography color={"blue"} sx={{ fontSize: 13 }}>
          {"Приостановлен"}
        </Typography>
      )

    case MATCH_STATUS.CANCELED:
      return (
        <Typography color={"gray"} sx={{ fontSize: 13 }}>
          {"Отменен"}
        </Typography>
      )
  }
}

export default MatchStatus
