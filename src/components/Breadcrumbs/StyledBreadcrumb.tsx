import { useTypedSelector } from "../../store/selectors"
import { THEME_MODE } from "../../store/common/types"

import Chip from "@mui/material/Chip"
import { emphasize, styled } from "@mui/material/styles"

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  // states from store
  const { currentTheme } = useTypedSelector((state) => state.common)

  // set background on a current theme
  const backgroundColor =
    currentTheme === THEME_MODE.LIGHT
      ? theme.palette.grey[100]
      : theme.palette.grey[800]

  return {
    // styles
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  }
}) as typeof Chip

export default StyledBreadcrumb
