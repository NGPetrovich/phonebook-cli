const mongoose = require('mongoose')

const url = 'mongodb+srv://nikita:PASSWORD@phonebook-cli.130n8.mongodb.net/phonebook'
// mongodb+srv://<dbUsername>:<dbPassword>@<clusterAddr>/<dbName>
mongoose.connect(url)

const Contact = mongoose.model('Contact', {
  name: String,
  number: String
})

const { argv } = process;
const [, , inputName, inputNumber] = argv;

const contact = new Contact({
  name: inputName,
  number: inputNumber
})

// console.log(contact.name)
// console.log(contact.number)

if (!contact.name && !contact.number) {
  Contact
    .find({})
    .then(contacts => {
      console.log("Contacts:")
      contacts.forEach(contact => {
        console.log(contact.name, contact.number)
      })
      mongoose.connection.close()
    })
} else {
  contact
    .save()
    .then(result => {
      console.log(`adding person ${contact.name} number ${contact.number} to the directory`);
      mongoose.connection.close()
    })
}