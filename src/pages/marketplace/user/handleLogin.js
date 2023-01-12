import React from "react";


const handleLogin = async googleData => {
    const res = await fetch("/api/v1/auth/google", {
        method: "POST",
        body: JSON.stringify({
            token: googleData.tokenId
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await res.json()
    // store returned user somehow
}

export default handleLogin;


// const server = app.listen(port, function () {
//     console.log('Server Active on', port);
// });

// const { OAuth2Client } = require('google-auth-library')
// const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID)
// server.post("/api/v1/auth/google", async (req, res) => {
//     const { token } = req.body
//     const ticket = await client.verifyIdToken({
//         idToken: token,
//         audience: process.env.CLIENT_ID
//     });
//     const { name, email, picture } = ticket.getPayload();
//     const user = await db.user.upsert({
//         where: { email: email },
//         update: { name, picture },
//         create: { name, email, picture }
//     })
//     req.session.userId = user.id
//     res.status(201)
//     res.json(user)
// })