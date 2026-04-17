import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ThemeProviderProps extends React.PropsWithChildren {
  defaultTheme?: string;
  storageKey?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
