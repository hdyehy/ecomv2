import axios from "axios";

const BASE_URL = "hhttps://matthewtrigoecomapi.herokuapp.com/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTAwZTVhYWFmOWEzMmU3N2M4YzE4MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1ODg5OTk0NCwiZXhwIjoxNjU5MTU5MTQ0fQ.Tb9VpME8y4oqSCzvknJi_URrYrCjVhzxVMdARbI6RTI";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
