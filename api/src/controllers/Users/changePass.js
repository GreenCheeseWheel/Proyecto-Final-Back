const prisma = require("../../db");

const changePass = async (id, password) => {
    const user = await prisma.user.findFirst({
        where: {
            id
        }
    });

    if(!user) throw Error("Invalid user");

    if(user.password == password) throw Error("Password must be different");
    
    const updatedUser = await prisma.user.update(
        {
            where: {
                id,
            },
            data: {
                password
            }
        }
    );

    return updatedUser;
}

module.exports = changePass;