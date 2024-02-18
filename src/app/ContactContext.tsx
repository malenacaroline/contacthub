"use client";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

type ContactContextType = {
  contact: {};
  setContact: (contact: {}) => void;
};

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const ContactProvider = ({ children }: PropsWithChildren) => {
  const [contact, setContact] = useState<{}>({});

  const value = useMemo(() => ({ contact, setContact }), [contact]);

  return (
    <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
  );
};

export const useContactContext = () => useContext(ContactContext);
