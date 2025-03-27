import { createContext, useState, ReactNode } from "react";

// Context interfeysi
interface AppContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Context yaratish (default qiymatni undefined qilib turamiz)
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider komponenti
const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
