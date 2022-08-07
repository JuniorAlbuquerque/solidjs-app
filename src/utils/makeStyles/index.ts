import { useTheme, DefaultTheme as Theme } from 'solid-styled-components'

type StylesType<T> = {
  [key in keyof T]: string
}

const useStyles = <T>(styles: (theme: Theme, props?: T) => StylesType<typeof styles>, props?: T) => {
  const theme = useTheme()
  return styles(theme, props)
}

export default useStyles

