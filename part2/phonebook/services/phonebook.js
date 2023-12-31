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


export default { getAll, addPerson }