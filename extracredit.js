let app = new Vue({
    el: '#requests',
    data: {
      currentDate: new Date().toLocaleString(),
      jsonResponse: null,
    },
    methods: {
        async handlePostRequest() {
            let id = document.getElementById('id').value;
            let articleName = document.getElementById('article_name').value;
            let articleBody = document.getElementById('article_body').value;
            let date = this.currentDate;
            let input = {
            id,
            articleName,
            articleBody,
            date
            };

        await this.handleRequest('https://httpbin.org/post', 'POST', input);
        },

        async handleGetRequest() {
            await this.handleRequest('https://httpbin.org/get', 'GET');
        },

        async handlePutRequest() {
            let id = document.getElementById('id').value;
            let articleName = document.getElementById('article_name').value;
            let articleBody = document.getElementById('article_body').value;
            let date = this.currentDate;
            let input = {
            id,
            articleName,
            articleBody,
            date
            };

            await this.handleRequest('https://httpbin.org/put', 'PUT', input);
        },

        async handleDeleteRequest() {
            await this.handleRequest('https://httpbin.org/delete', 'DELETE');
        },

        async handleRequest(url, method, data = null) {
            try {
            let response = await fetch(url, {
                method: method,
                headers: {
                'Content-Type': 'application/json'
                },
                body: data ? JSON.stringify(data) : null
            });
            let jsonResponse = await response.json();
            this.jsonResponse = JSON.stringify(jsonResponse, null, 2);
            } catch (error) {
            console.error(error);
            }
        }
    }
});