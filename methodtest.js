var dateOutput = document.getElementById("date");
dateOutput.value = new Date().toLocaleString();
document.getElementById('curDate').style.visibility = 'hidden';

let fetchVal = document.getElementById('fetch');
let XMLVal = document.getElementById('XMLHttpRequest');

// Send a POST request to the endpoint when the post button is clicked
let postBtn = document.getElementById("postBtn");
postBtn.addEventListener("click", () => {
    if(fetchVal.checked){
        let ID = document.getElementById("id").value;
        let articleName = document.getElementById("article_name").value;
        let articleBody = document.getElementById("article_body").value;
        let date = document.getElementById("date").value;
        let formData = new FormData();
        formData.set("id", ID);
        formData.set("article name", articleName);
        formData.set("article body", articleBody);
        formData.set("date", date);
    
        fetch("https://httpbin.org/post", {
        method: "POST",
        body: formData
        })
        .then(response => response.json())
        .then(data => {
        let responseOutput = document.getElementById("response");
        responseOutput.innerHTML = JSON.stringify(data, null, 2);
        });
    }
    else if(XMLVal.checked){
        let request = new XMLHttpRequest();
        request.open("POST", "https://httpbin.org/post");
        let ID = document.getElementById("id").value;
        let articleName = document.getElementById("article_name").value;
        let articleBody = document.getElementById("article_body").value;
        let date = document.getElementById("date").value;
        let formData = new FormData();
        formData.set("id", ID);
        formData.set("article name", articleName);
        formData.set("article body", articleBody);
        formData.set("date", date);

        request.responseType = "json";
        request.send(formData);
        request.addEventListener("load", function(){
            // clear();
            let response = document.getElementById("response");
            response.innerText = JSON.stringify(request.response, null, 2);
        })
    }
});

// Send a GET request to the endpoint when the get button is clicked
let getBtn = document.getElementById("getBtn");
getBtn.addEventListener("click", () => {
    if(fetchVal.checked){
        let ID = document.getElementById("id").value;
        let articleName = document.getElementById("article_name").value;
        let qs = `id=${ID}&name=${articleName}`;
        let url = `https://httpbin.org/get?`;
        url += qs;
    
        fetch(url, {method: "GET"})
        .then(response => response.json())
        .then(data => {
        let responseOutput = document.getElementById("response");
        responseOutput.innerHTML = JSON.stringify(data, null, 2);
        });
    }
    else if(XMLVal.checked){
        let request = new XMLHttpRequest();
        let ID = document.getElementById("id").value;
        let url = `https://httpbin.org/get`;
        let qs = `?id=${ID}`;
        url += qs;
        request.open("GET", url);
        request.responseType = "json";
        request.send();
        request.addEventListener("load", function(){
            // clear();
            let res = document.getElementById("response");
            res.innerText = JSON.stringify(request.response, null, 2);
        })
    }
});

// Send a PUT request to the endpoint when the put button is clicked
let putBtn = document.getElementById("putBtn");
putBtn.addEventListener("click", () => {
    if(fetchVal.checked){
        let ID = document.getElementById("id").value;
        let articleName = document.getElementById("article_name").value;
        let articleBody = document.getElementById("article_body").value;
        let date = document.getElementById("date").value;
        let formData = new FormData();
        formData.set("id", ID);
        formData.set("article name", articleName);
        formData.set("article body", articleBody);
        formData.set("date", date);
    
        fetch("https://httpbin.org/put", {
        method: "PUT",
        body: formData
        })
        .then(response => response.json())
        .then(data => {
        let responseOutput = document.getElementById("response");
        responseOutput.innerHTML = JSON.stringify(data, null, 2);
        });
    }
    else if(XMLVal.checked){
        let request = new XMLHttpRequest();
        request.open("PUT", "https://httpbin.org/put");
        let ID = document.getElementById("id").value;
        let articleName = document.getElementById("article_name").value;
        let articleBody = document.getElementById("article_body").value;
        let date = document.getElementById("date").value;
        let formData = new FormData();
        formData.set("id", ID);
        formData.set("article name", articleName);
        formData.set("article body", articleBody);
        formData.set("date", date);

        request.responseType = "json";
        request.send(formData);
        request.addEventListener("load", function(){
            // clear();
            let response = document.getElementById("response");
            response.innerText = JSON.stringify(request.response, null, 2);
        })
    }
});

// Send a DELETE request to the endpoint when the put button is clicked
let deleteBtn = document.getElementById("deleteBtn");
deleteBtn.addEventListener("click", () => {
    if(fetchVal.checked){
        let ID = document.getElementById("id").value;
        let articleName = document.getElementById("article_name").value;
        let qs = `id=${ID}&name=${articleName}`;
        let url = `https://httpbin.org/delete?`;
        url += qs;
    
        fetch(url, {method: "DELETE"})
        .then(response => response.json())
        .then(data => {
        let responseOutput = document.getElementById("response");
        responseOutput.innerHTML = JSON.stringify(data, null, 2);
        });
    }
    else if(XMLVal.checked){
        let request = new XMLHttpRequest();
        let ID = document.getElementById("id").value;
        let url = `https://httpbin.org/delete`;
        let qs = `?id=${ID}`;
        url += qs;
        request.open("DELETE", url);
        request.responseType = "json";
        request.send();
        request.addEventListener("load", function(){
            // clear();
            let res = document.getElementById("response");
            res.innerText = JSON.stringify(request.response, null, 2);
        })
    }
});