import axios from 'axios';

export const register = newUser => {
    // return axios
    // .post('users/register',{
    //     name: newUser.name,
    //     address: newUser.address,
    //     age: newUser.age,
    //     contact: newUser.contact,
    //     email_id: newUser.email_id,
    //     password: newUser.password,
    //     eid: newUser.eid,
    //     role_id: newUser.role_id
    // })
    // .then(res =>{
    //     console.log("Registered")
    // })

    // newUser.forEach(element => {
    //     console.log(element)
    // });
    let formData = new FormData();
    formData.append('name',newUser.name);
    formData.append('address', newUser.address);
    formData.append('contact', newUser.contact);
    formData.append('email_id', newUser.email_id);
    formData.append('password', newUser.password);
    formData.append('role_id', newUser.role_id);
    return axios    
        .post('users/register',formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        }).then(res=>{
            console.log('Registered')
        })
}

export const login = user => {
    return axios
    .post('users/login',{
        email_id: user.email_id,
        password: user.password
    })
    .then(res => {
        localStorage.setItem('usertoken',res.data)
        return res.data
    })
    .catch(err=>{
        console.log(err)
    })
}
