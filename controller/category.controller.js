

const createCategory = async (req, res) => {
    try{
        const { name } = req.body;
        const response = await db.execute(
            'INSERT into category(name) values(?)',
            [name]
        )
        return res.status(200).json(response)
    }catch(error){
        return res.status(500).json({message : error.message})  
    }
}

const getAllCategory = async (req, res) => {
    try{
        const response = await db.execute(
            'SELECT * from category'
        )
        return res.status(200).json({response})
    }
    catch(error){
        return res.status(500).json({message : error.message})
    }
}

const getCategory = async (req, res) => {
    try{
        const { category_id } = req.params;
        const response = await db.execute(
            'SELECT * from category where category_id = ?',
            [ category_id ]
        )
        return res.status(200).json({response})

    }
    catch(error){
        return res.status(500).json({message : error.message})
    }
}


module.exports = {
    createCategory,
    getCategory,
    getAllCategory
}