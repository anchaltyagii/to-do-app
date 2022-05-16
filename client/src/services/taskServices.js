import axios from 'axios';
const apiUrl = "http://localhost:8080";

export function getTasks() {
    return axios.get( apiUrl + "/todo/items");
}

export function addTask(task) {
    return axios.post(apiUrl + "/todo/item" , task);
}

export function updateTask(id, task) {
    return axios.put(apiUrl + "/todo/item/" + id, task);
}

export function deleteTask(id) {
    return axios.delete(apiUrl + "/todo/item/" + id);
}