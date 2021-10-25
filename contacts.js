const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");

async function listContacts() {
  const contacts = await fs.readFile(contactsPath, "utf8");
  console.log(contacts);
}

async function getContactById(contactId) {
  // ...твой код

}

async function removeContact(contactId) {
  // ...твой код
}

async function addContact(name, email, phone) {
  // ...твой код
}

// const fileOperation = async (action) => {
//   switch (action) {
//     case "list":
//       const text = await fs.readFile(path, "utf8");
//       console.log(text);
//       break;

//     case "add":
//       await fs.appendFile(path, JSON.stringify(data));
//       break;

//     case "replace":
//       await fs.writeFile(path, JSON.stringify(data));
//       break;

//     default:
//       throw new Error("Unknown action");
//   }
// };

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
