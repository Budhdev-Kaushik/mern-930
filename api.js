const URL = "https://6235ab6a163bf7c4745d3176.mockapi.io/students";

// fetch(URL)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((er) => er.message);

async function getStudents() {
  try {
    let resopnse = await fetch(URL);
    let data = await resopnse.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}


