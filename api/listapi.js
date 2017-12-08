class listApi {

    static requestHeaders() {
        return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
    }

    static getAllList() {
        const headers = this.requestHeaders();
        const request = new Request(`http://192.168.1.222:3000/todos`, {
            method: 'GET',
            //headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static updateCat(cat) {
        const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
        const request = new Request(`${process.env.API_HOST}/api/v1/cats/${cat.id}`, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify({cat: cat})
        });


        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
    static deleteFromList(cat) {
        const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
        const request = new Request(`http://192.168.1.222:3000/todos/${cat.id}`, {
            method: 'DELETE',
        });
        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static createCat(cat) {
        const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
        const request = new Request(`${process.env.API_HOST}/api/v1/cats`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({cat: cat})
        });


        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static addintoList(cat) {
        console.log('is it coming here ',cat)
        const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
        const request = new Request(`http://192.168.1.222:3000/todos`, {
            method: 'POST',
            headers: headers,
            body:JSON.stringify(cat)
        });
        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}

export default listApi;
