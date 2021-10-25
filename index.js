const { Command } = require("commander");
const chalk = require("chalk");

const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./contacts");

const program = new Command();

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторить
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await listContacts();
      console.table(contacts);
      break;

    case "get":
      const contactById = await getContactById(id);
      if (contactById) {
        console.log(chalk.green("Contact found"));
        console.log(contactById);
      } else {
        console.log(chalk.yellow("Contact not found"));
      }
      break;

    case "add":
      const addedContact = await addContact(name, email, phone);
      console.log(chalk.green("Contact added"));
      console.log(addedContact);
      break;

    case "remove":
      const removedContact = await removeContact(id);
      if (removedContact) {
        console.log(chalk.green("Contact removed"));
        console.log(removedContact);
      } else {
        console.log(chalk.yellow("Contact not found"));
      }
      break;

    default:
      console.warn(chalk.red("Unknown action type!"));
  }
}

invokeAction(argv);
