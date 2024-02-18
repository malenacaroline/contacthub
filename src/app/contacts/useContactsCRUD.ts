import { ContactType, useContactContext } from ".";

const setContactsLocalStorage = (contacts: ContactType[]) => {
  localStorage.setItem("contacts", JSON.stringify(contacts));
  window.dispatchEvent(new Event("contactStorageEvent"));
};

export const useContactsCRUD = () => {
  const contactContext = useContactContext();
  const contacts = contactContext?.contacts || [];

  const addContact = (newContact: ContactType) =>
    setContactsLocalStorage([...contacts, newContact]);

  const editContact = (newContact: ContactType) =>
    setContactsLocalStorage(
      contacts.map((contact) =>
        contact.email === newContact.email ? newContact : contact
      )
    );

  const deleteContact = (email: ContactType["email"]) =>
    setContactsLocalStorage(
      contacts.filter((contact) => contact.email !== email)
    );

  return {
    addContact,
    editContact,
    deleteContact,
  };
};
