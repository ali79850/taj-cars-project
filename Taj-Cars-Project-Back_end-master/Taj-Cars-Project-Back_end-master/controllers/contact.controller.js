const contactService = require("../services/contact.service");

const createContact = async (req, res) => {
  try {
    const contactData = req.body;
    const newContact = await contactService.createContact(contactData);
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getAllContacts = async (req, res) => {
  try {
    const contacts = await contactService.getAllContacts();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getContactById = async (req, res) => {
  try {
    const contactId = req.params.id;

    const contact = await contactService.markAsReadAndReturn(contactId);

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const markAllAsRead = async (req, res) => {
  try {
    const result = await contactService.markAllAsRead();
    res.status(200).json({
      message: "All unread messages have been marked as read.",
      updatedCount: result.modifiedCount,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteContact = async (req, res) => {
  try {
    const contactId = req.params.id;
    const deletedContact = await contactService.deleteContact(contactId);
    res.status(200).json({ msg: "deleted contact", contact: deletedContact });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteAll = async (req, res) => {
  try {
    const result = await contactService.deleteAll();
    res.status(200).json({ message: result });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createContact,
  getAllContacts,
  getContactById,
  markAllAsRead,
  deleteContact,
  deleteAll,
};
