import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchFilter, setSearchFilter] = useState('')

  const handleNewName = event => setNewName(event.target.value)

  const handleNewNumber = event => setNewNumber(event.target.value)

  const handleSearchFilter = event => setSearchFilter(event.target.value)

  const shownPersons = persons.filter(person => person.name.toLocaleLowerCase().includes(searchFilter.toLowerCase()))

  console.log('rendering');

  const personAdded = event => {
    event.preventDefault()
    const newPersonObject = {
      name: newName,
      number: newNumber
    }
    if (persons.find(person => person.name === newPersonObject.name) !== undefined) {
      alert(`${newPersonObject.name} is alredy added to phonebook`)
    } else {
      setPersons(persons.concat(newPersonObject))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchFilter={searchFilter} handleSearchFilter={handleSearchFilter} />
      <h3>Add a new</h3>
      <PersonForm
        handlers={{
          personAdded: personAdded,
          handleNewName: handleNewName,
          handleNewNumber: handleNewNumber
        }}
        values={{
          newName: newName,
          newNumber: newNumber
        }}
      />
      <h3>Numbers</h3>
      <Persons persons={shownPersons} />
    </div>
  )
}

const Person = ({ person }) => <p>{person.name} {person.number}</p>

const Persons = ({ persons }) => (
  <div>
    {persons.map(person => <Person key={person.name} person={person} />)}
  </div>
)

const PersonForm = ({ handlers, values }) => (
  <form onSubmit={handlers.personAdded}>
    <div>
      name: <input value={values.newName} onChange={handlers.handleNewName} />
      <br />
      number: <input value={values.newNumber} onChange={handlers.handleNewNumber} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
)

const Filter = ({ searchFilter, handleSearchFilter }) => (
  <div>
    filter shown with <input value={searchFilter} onChange={handleSearchFilter} />
  </div>
)

export default App