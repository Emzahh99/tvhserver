const db = require('../config/config')


const createAttraction = async(req, res)=>{
    try{
        const { name, location, picture, category_id, open_time, close_time, days_closed } = req.body;

        const response = await db.execute(
            'INSERT into attraction(name, location, picture, category_id, open_time, close_time, days_closed) values(?,?,?,?,?,?,?)',
            [name, location, picture, category_id, open_time, close_time, days_closed]
        )
        return res.status(200).json(response)
    }
    catch(error){
        return res.status(500).json({message : error.message})
    }
}

const getAllAttraction = async(req, res)=>{
    try{
        const response = await db.execute(
            'SELECT * from attraction'
        )
        return res.status(200).json({response})
    }
    catch(error){
        return res.status(500).json({message : error.message})
    }
}

const getAttraction = async(req, res)=>{
    try{
        const { attraction_id } = req.params;
        const response = await db.execute(
            'SELECT * from attraction where attraction_id = ?',
            [ attraction_id ]
        )
        return res.status(200).json({response})

    }
    catch(error){
        return res.status(500).json({message : error.message})
    }
}


module.exports = {
    createAttraction,
    getAllAttraction,
    getAttraction
}