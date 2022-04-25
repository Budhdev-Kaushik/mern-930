

let BASE_URL = "https://6235ab6a163bf7c4745d3176.mockapi.io";

// //GET Request

// async function getStudents() {
//   try {
//     let resopnse = await fetch(`${BASE_URL}/students`);
//     let data = await resopnse.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// //POST Request (create method)

// async function createStudent(data) {
//   let response = await fetch(`${BASE_URL}/students`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//   console.log(response.status);
// }

// //PUT request (update Method)

// async function updateStudent(data, id) {
//   let url = `${BASE_URL}/students/${id}`;
//   let config = {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   };

//   let response = await fetch(url, config);
//   console.log(response.status);
// }

// //Delete request (deletion mehtod)

// async function deleteStudent(id) {
//   let response = await fetch(`${BASE_URL}/students/${id}`, {
//     method: "DELETE",
//   });
//   console.log(response.status);
// }

/* AXIOS */

let http = axios.create({
  baseURL : BASE_URL,
  timeout: 5000,
  headers: {
    "x-auth-token" : "bsdk0001"
  }
});

//GET Method

async function getStudent() {
  let response = await http(`/students`);
  console.log(response.status);
  console.log(response.data);
}

//POST Method:

async function createStudent(data) {
  let response = await http.post(`/students`, data);
  console.log(response.status);
  console.log(response.data);
}

//PUT Method:

async function updateStudent(data, id) {
  let response = await http.put(`/students/${id}`, data);
  console.log(response.data);
  console.log(response.status);
} 

//DELETE Method:

async function deleteStudent(id) {
  let response = await http.delete(`/students/${id}`);
  console.log(response.data);
  console.log(response.status);
}


