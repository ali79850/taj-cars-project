const Contact = require("../models/contact.model");

const createContact = async (contactData) => {
  try {
    const contact = new Contact(contactData);
    await contact.save();
    return contact;
  } catch (error) {
    throw new Error("Error creating contact: " + error.message);
  }
};

const getAllContacts = async () => {
  try {
    const contacts = await Contact.find();
    return contacts;
  } catch (error) {
    throw new Error("Error fetching contacts: " + error.message);
  }
};

const markAsReadAndReturn = async (id) => {
  return await Contact.findByIdAndUpdate(id, { isRead: true }, { new: true });
};

const markAllAsRead = async () => {
  return await Contact.find().updateMany({ isRead: true });
};

const deleteContact = async (id) => {
  return await Contact.deleteOne({ _id: id });
};

const deleteAll = async () => {
  return await Contact.deleteMany();
};
module.exports = {
  createContact,
  getAllContacts,
  deleteContact,
  markAsReadAndReturn,
  markAllAsRead,
  deleteAll,
};
