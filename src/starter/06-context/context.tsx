import React, { createContext, useContext, useState } from "react";

type Theme = "light" | "dark" | "system";
type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeProvideContext = createContext<ThemeProviderState | undefined>(
  undefined,
);

type ThemeProviderProp = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};

export function ThemeProvider({
  children,
  defaultTheme = "system",
}: ThemeProviderProp) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  return (
    <ThemeProvideContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProvideContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProvideContext);
  if (context === undefined)
    throw new Error("useTheme must be used within the ThemeProvider");
  return context;
};
