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
        console.log('is it coming here ', cat)
        const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
        const request = new Request(`http://192.168.1.222:3000/todos`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(cat)
        });
        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
    static uploadTheProduct(productdata) {
        const headers = Object.assign(this.requestHeaders());
        const request = new Request(`http://192.168.11.126:3001/products/product`, {
            method: 'POST',
            headers: headers,
            body: productdata
        });
        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
    static getproducts() {
        const request = new Request(`http://192.168.11.126:3001/product`, {
            method: 'GET'
        });
        return fetch(request).then(response => {
            console.log("response------------------", response)
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
                .then(response => {
                    console.log(response,'kkkkkkkk')
                    if (response.status) {
                    }

                    return response;
                });
    }
 
    static redirectToLogin(productdata) {
        const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
        const request = new Request(`http://192.168.11.126:3001/user/login`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(productdata)
        });
        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}

export default listApi;
