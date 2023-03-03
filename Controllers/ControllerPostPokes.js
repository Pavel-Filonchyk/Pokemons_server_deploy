import Pokes from "../Schemes/Pokes.js"

class ControllerPostPokes {                                       
    async postAll(req, res) { 
        //console.log(req.body)  

        try {
            const post = await Pokes.create({
                Pokes: req.body
            }) 
            console.log(post.Pokes)                           
            res.status(200).json(post.Pokes)                                    
        } catch (e){
            res.status(500).json(e)                                       
        }
    }
}
export default new ControllerPostPokes()