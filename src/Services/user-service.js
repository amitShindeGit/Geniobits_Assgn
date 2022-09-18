import axios from 'axios';

export default class Users {

    static getUser = async () => {
        return axios.get("https://gorest.co.in/public/v2/users/", {}, {
            headers : {
                'Authorization': `Bearer c14b43d1d466ddda41f5cdb208380c7acf8edd367e9d7f328bf6b03cec84e502`
            }
        });
    }

    static createUser = async (user) => {
        console.log(user.email,";;;;;;;;;;;;;;;;;;")
        const email = user.email;
        const name = user.name;
        const gender = user.gender;
        const status = user.status;

        // console.log(email, pass, gender, status, name)
        return axios.post("https://gorest.co.in/public/v2/users", { email, gender, status, name},{ 
                headers : {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Authorization': `Bearer c14b43d1d466ddda41f5cdb208380c7acf8edd367e9d7f328bf6b03cec84e502`
                }
            }
            )
    }

}