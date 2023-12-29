import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const handleNewName = event => setNewName(event.target.value)

  const personAdded = event => {
    event.preventDefault()
    const newPersonObject = {
      name: newName
    }
    if (persons.find(person => person.name === newPersonObject.name) !== undefined) {
      alert(`${newPersonObject.name} is alredy added to phonebook`)
    } else {
      setPersons(persons.concat(newPersonObject))
      setNewName('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={personAdded}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
          {persons.map(person => <li key={person.name}>{person.name}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default App