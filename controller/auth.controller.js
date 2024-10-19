const db = require('../config/config')
const secret_key = require('../config/secret_key')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const userlogin = async(req, res) =>{
    let {email, password} = req.body;
    let type = "";
    try{
        let [result] = await db.execute(
            'SELECT email, password, auth_id from user where email = ?',
            [email]
        )

        if(result.length > 0){
            const isValid = await bcrypt.compare(password, result[0].password);

            if(isValid === true){
                const token = jwt.sign(
                    {},
                    secret_key
                )
                return res.status(200).json({
                    token,
                    type,
                    result
                });
            }
        }
        return res.status(403).json({message : "Invalid Credentials"});
    }
    catch(error){
        return res.status(500).json({message : error.message})
    }

}


const userCreate = async(req, res) =>{
    try{
        let { username, email, password, auth_id, mobile_number } = req.body;

        password = await bcrypt.hash(password, 10);

        await db.execute(
            'INSERT into user(username, email, password, auth_id, mobile_number) values (?,?,?,?,?)',
            [username, email, password, auth_id, mobile_number]
        ).then(response =>{
            return res.status(200).json({results : response})
        }).catch(error =>{
            return res.status(401).json({message : error.message})
        })
    }
    catch(error){
        return res.status(500).json({message : error.message})
    }
}


const userUpdate = async(req, res) =>{
    try{
        let { username , password , mobile_number , user_id } = req.body;
        password = await bcrypt.hash(password, 10)
        const [result] = await db.execute(
            "UPDATE user set username = ?, password = ?, mobile_number = ? where user_id = ?",
            [username, password, mobile_number, user_id]
        )

        return res.status(200).json({result})
    }
    catch(error){
        return res.status(500).json({message : error.message})
    }
}


module.exports = {
    userCreate, userlogin , userUpdate
}


