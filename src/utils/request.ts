const getUserAccount = () => {
    let data = sessionStorage.getItem('user');
    console.log('data sesionStorage', data);
    if (data) {
        return {
            data: data,
            code: 0
        }
    }
    else {
        return {
            data: '',
            code: 1
        }
    }
}
export {
    getUserAccount
}