import React, { createContext, useContext } from "react";

const ThemeProvideContext = createContext<string | undefined>(undefined);
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvideContext.Provider value="hello">
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
