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
};

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const ContactProvider = ({ children }: PropsWithChildren) => {
  const [contacts, setContacts] = useState<ContactType[]>([]);

  useEffect(() => {
    const handleContactStorage = () => {
      const lsContacts = localStorage.getItem("contacts");
      if (!lsContacts) return;
      setContacts(JSON.parse(lsContacts));
    };
    
    handleContactStorage();

    window.addEventListener("contactStorageEvent", handleContactStorage);
    return () =>
      window.removeEventListener("contactStorageEvent", handleContactStorage);
  }, []);

  return (
    <ContactContext.Provider value={{ contacts }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContactContext = () => useContext(ContactContext);
