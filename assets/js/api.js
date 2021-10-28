async function getUsers() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();
  if (data) {
    document.write(JSON.stringify(data));
  } else {
    document.write("Data tidak ada");
  }
}
document.write("<br><br><p>Mengambil API JSON<p>");
getUsers();

async function getPosts() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await response.json();
  if (data) {
    console.log("ketiga");
    console.log(JSON.stringify(data));
  } else {
    console.log("Data tidak ada");
  }
}
//getPosts();

async function getComments() {
  let response = await fetch("https://jsonplaceholder.typicode.com/comments");
  let data = await response.json();
  if (data) {
    console.log("keempat");
    console.log(JSON.stringify(data));
  } else {
    console.log("Data tidak ada");
  }
}
//getComments();
