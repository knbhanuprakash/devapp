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
    static uploadTheProduct(productdata) {
        const headers = Object.assign(this.requestHeaders());
        const request = new Request(`http://192.168.11.126:4000/users123`, {
            method: 'POST',
            headers: headers,
            body:productdata
        });
        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
    static getproducts(productdata) {
        const headers = Object.assign({'x-access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwiX2lkIjoiNWExNjkyYjU1NTBmMDAxMjZiYjhjZGY3IiwicG9wdWxhdGVkIjp7InVzZXJSb2xlIjp7InZhbHVlIjoiNTljNGQ3OTVkMDNhMWMxNGE3NzQ2ZWE2Iiwib3B0aW9ucyI6eyJwYXRoIjoidXNlclJvbGUiLCJfZG9jcyI6eyI1YTE2OTJiNTU1MGYwMDEyNmJiOGNkZjciOiI1OWM0ZDc5NWQwM2ExYzE0YTc3NDZlYTYifSwiaXNWaXJ0dWFsIjpmYWxzZX19fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwiZW1haWwiOiJpbml0IiwiaXNBY3RpdmUiOiJpbml0IiwiaXNEZWxldGUiOiJpbml0IiwiYWdlIjoiaW5pdCIsImdlbmRlciI6ImluaXQiLCJ1c2VyUm9sZSI6ImluaXQiLCJuYW1lIjoiaW5pdCIsImNyZWF0ZWRBdCI6ImluaXQiLCJ1cGRhdGVkQXQiOiJpbml0IiwiX2lkIjoiaW5pdCJ9LCJzdGF0ZXMiOnsiaWdub3JlIjp7fSwiZGVmYXVsdCI6e30sImluaXQiOnsiaXNBY3RpdmUiOnRydWUsImlzRGVsZXRlIjp0cnVlLCJhZ2UiOnRydWUsImdlbmRlciI6dHJ1ZSwidXNlclJvbGUiOnRydWUsInBhc3N3b3JkIjp0cnVlLCJlbWFpbCI6dHJ1ZSwibmFtZSI6dHJ1ZSwiY3JlYXRlZEF0Ijp0cnVlLCJ1cGRhdGVkQXQiOnRydWUsIl9pZCI6dHJ1ZX0sIm1vZGlmeSI6e30sInJlcXVpcmUiOnt9fSwic3RhdGVOYW1lcyI6WyJyZXF1aXJlIiwibW9kaWZ5IiwiaW5pdCIsImRlZmF1bHQiLCJpZ25vcmUiXX0sInBhdGhzVG9TY29wZXMiOnt9LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH19LCJpc05ldyI6ZmFsc2UsIl9kb2MiOnsicHJvZmlsZXBpYyI6e30sImlzQWN0aXZlIjp0cnVlLCJpc0RlbGV0ZSI6ZmFsc2UsImFnZSI6MjAsImdlbmRlciI6IkYiLCJ1c2VyUm9sZSI6eyJfaWQiOiI1OWM0ZDc5NWQwM2ExYzE0YTc3NDZlYTYiLCJ1cGRhdGVkQXQiOiIyMDE3LTA5LTIyVDA5OjI3OjQ5LjQzMFoiLCJjcmVhdGVkQXQiOiIyMDE3LTA5LTIyVDA5OjI3OjQ5LjQzMFoiLCJyb2xlTmFtZSI6IkFkbWluIiwiaXNEZWxldGUiOmZhbHNlLCJpc0FjdGl2ZSI6dHJ1ZX0sInBhc3N3b3JkIjoiJDJhJDEwJERKT2hXZ1owdDVTVEkuVzdXVDJEbk9rSmQ2cjFyaVlFUkFreGVPd0JTS0UxVWJrSUh2RGRTIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJuYW1lIjoiYWRtaW4iLCJjcmVhdGVkQXQiOiIyMDE3LTExLTIzVDA5OjE5OjQ5Ljc4NVoiLCJ1cGRhdGVkQXQiOiIyMDE3LTExLTIzVDA5OjE5OjQ5Ljc4NVoiLCJfaWQiOiI1YTE2OTJiNTU1MGYwMDEyNmJiOGNkZjcifSwiJGluaXQiOnRydWUsImlhdCI6MTUxMTQyODgwM30.WLOTc6ZhaSIqyqQtAEwy4Yg5zukxNsICsKFUE3UiIHo' } , this.requestHeaders());
        const request = new Request(`http://192.168.11.71:3000/product`, {
            method: 'GET',
            headers: headers,
            body:productdata
        });
        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}

export default listApi;
