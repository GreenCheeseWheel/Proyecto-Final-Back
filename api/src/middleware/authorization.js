const prisma = require("../db");
const {ADMIN_PAGES} = require("../utils/utils")
const noAuthorization = require("./no_authorization");


async function authorization(req, res, next)
{
    try
    {

        if(noAuthorization.includes(req.path))
        {
            console.log("NO SE DEBE AUTORIZAR")
            return next();
        }

        const token = req.headers.authorization?.split(" ")[1];
        
        // This obtains token payload
        let payload = token.split(".")

        if(payload.length <= 1)
        {
            res.status(401).json({error: "Token malformed"});
        }
        
        payload = payload[1];

        const email = JSON.parse(Buffer.from(payload, "base64").toString()).email;

        const user = await prisma.user.findFirst({
            where: {
                email,
            }            
        });

        // We check user is in the data base
        if(!user) throw Error("No such user in the database");
        
        
        // If everything went well, then we check privileges
        if(ADMIN_PAGES.includes(req.path))
        {
            if(user.rol !== "ADMIN") 
            {
                return res.status(401).json({message: "Not sufficient privileges"})
            }

        }


        next();
    }
    catch(err)
    {
        res.status(500).json({error: err.message});
    }

}

module.exports = authorization;