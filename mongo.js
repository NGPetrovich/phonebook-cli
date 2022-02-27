const mongoose = require('mongoose')

const url = 'mongodb+srv://nikita:PASSWORD@phonebook-cli.130n8.mongodb.net/phonebook'
// mongodb+srv://<dbUsername>:<dbPassword>@<clusterAddr>/<dbName>
mongoose.connect(url)

const Contact = mongoose.model('Contact', {
  name: String,
  number: Number
})

Contact
  .find({})
  .then(contacts => {
    contacts.forEach(contact => {
      console.log(contact)
    })
    mongoose.connection.close()
})