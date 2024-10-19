


const getUser = async(req, res) =>{
    return res.status(200).json({message : "Gets all users"})
}


module.exports = {
    getUser
}