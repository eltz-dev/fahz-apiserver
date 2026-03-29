export default async function handler(req, res) {

const { endpoint } = req.query

if(!endpoint){
return res.status(400).json({error:"endpoint required"})
}

try{

const api = await fetch(endpoint)
const data = await api.json()

res.setHeader("Access-Control-Allow-Origin","*")

res.status(200).json(data)

}catch(e){

res.status(500).json({
error:"proxy error",
message:e.toString()
})

}
}

