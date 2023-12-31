import axios from "axios";

const baseUrl = 'http://localhost:3001/persons'

const getAll = () =>
    axios
        .get(baseUrl)
        .then(response => response.data)

const addPerson = object =>
    axios
        .post(baseUrl, object)
        .then(response => response.data)

const deletePerson = id =>
    axios
        .delete(`${baseUrl}/${id}`)
        .then(() => true)


export default { getAll, addPerson, deletePerson }