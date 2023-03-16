var dateOutput = document.getElementById("date");
dateOutput.value = new Date().toLocaleString();
document.getElementById('curDate').style.visibility = 'hidden';

// let fetchVal = document.getElementById('fetch');
// let XMLVal = document.getElementById('XMLHttpRequest');
// console.log(fetchVal.checked);
// console.log(XMLVal.checked);

// helper function to format the response data
function formatResponse(response) {
    var result = "<pre>";
    result += JSON.stringify(response, null, 2);
    result += "</pre>";
    return result;
}

// Send a POST request to the endpoint when the post button is clicked
let postBtn = document.getElementById("postBtn");
postBtn.addEventListener("click", () => {
    let ID = document.getElementById("id").value;
    let articleName = document.getElementById("article_name").value;
    let articleBody = document.getElementById("article_body").value;
    let formData = new FormData();
    formData.set("id", ID);
    formData.set("article name", articleName);
    formData.set("article body", articleBody);

    fetch("https://httpbin.org/post", {
    method: "POST",
    body: formData
    })
    .then(response => response.json())
    .then(data => {
    let responseOutput = document.getElementById("response");
    responseOutput.innerHTML = formatResponse(data);
    });
});

// Send a GET request to the endpoint when the get button is clicked
let getBtn = document.getElementById("getBtn");
getBtn.addEventListener("click", () => {
    let ID = document.getElementById("id").value;
    let articleName = document.getElementById("article_name").value;
    let qs = `id=${ID}&name=${articleName}`;
    let url = `https://httpbin.org/get?`;
    url += qs;

    fetch(url, {method: "GET"})
    .then(response => response.json())
    .then(data => {
    let responseOutput = document.getElementById("response");
    responseOutput.innerHTML = formatResponse(data);
    });
});

// Send a PUT request to the endpoint when the put button is clicked
let putBtn = document.getElementById("putBtn");
putBtn.addEventListener("click", () => {
    let ID = document.getElementById("id").value;
    let articleName = document.getElementById("article_name").value;
    let articleBody = document.getElementById("article_body").value;
    let formData = new FormData();
    formData.set("id", ID);
    formData.set("article name", articleName);
    formData.set("article body", articleBody);

    fetch("https://httpbin.org/put", {
    method: "PUT",
    body: formData
    })
    .then(response => response.json())
    .then(data => {
    let responseOutput = document.getElementById("response");
    responseOutput.innerHTML = formatResponse(data);
    });
});

// Send a DELETE request to the endpoint when the put button is clicked
let deleteBtn = document.getElementById("deleteBtn");
deleteBtn.addEventListener("click", () => {
    let ID = document.getElementById("id").value;
    let articleName = document.getElementById("article_name").value;
    let qs = `id=${ID}&name=${articleName}`;
    let url = `https://httpbin.org/delete?`;
    url += qs;

    fetch(url, {method: "DELETE"})
    .then(response => response.json())
    .then(data => {
    let responseOutput = document.getElementById("response");
    responseOutput.innerHTML = formatResponse(data);
    });
});