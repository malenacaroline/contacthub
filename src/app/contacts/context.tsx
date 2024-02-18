"use client";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ContactType } from ".";

type ContactContextType = {
  contacts: ContactType[];
  isLoading: boolean;
};

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const ContactProvider = ({ children }: PropsWithChildren) => {
  const [contacts, setContacts] = useState<ContactType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleContactStorage = () => {
      setIsLoading(true);
      const lsContacts = localStorage.getItem("contacts");
      if (!lsContacts) return setIsLoading(false);
      setContacts(JSON.parse(lsContacts));
      setIsLoading(false);
    };
    
    handleContactStorage();

    window.addEventListener("contactStorageEvent", handleContactStorage);
    return () =>
      window.removeEventListener("contactStorageEvent", handleContactStorage);
  }, []);

  return (
    <ContactContext.Provider value={{ contacts, isLoading }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContactContext = () => useContext(ContactContext);
