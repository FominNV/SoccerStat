import { FC } from "react"
import { Box, TextField, Typography } from "@mui/material"
import { DatePicker } from "@mui/lab"

interface IDatePickerBlockProps {
  label: string
  value: Date | null
  setValue: React.Dispatch<React.SetStateAction<Date | null>>
  danger: boolean
}

const DatePickerBlock: FC<IDatePickerBlockProps> = (props) => {
  return (
    <Box display="inline-block" position={"relative"}>
      {/* danger for input */}
      <Box
        position={"absolute"}
        left={0}
        top={-30}
        display={props.danger ? "block" : "none"}
      >
        <Typography variant="h6" color="error">
          Заполните поле
        </Typography>
      </Box>

      {/* props for input */}
      <DatePicker
        label={props.label}
        mask="__.__.____"
        value={props.value}
        onChange={(newValue) => props.setValue(newValue)}
        // render input
        renderInput={(params) => (
          <TextField size="small" color="success" required {...params} />
        )}
      />
    </Box>
  )
}

export default DatePickerBlock
