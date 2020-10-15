exports.logout = (req, res) => {

    if (req.session) {

        res.header('Cache-Control', 'no-cache');
        req.session.destroy((err) => {
            if (err) return console.log(err);
            console.log('logout success');
        })

        res.send({
                "result": "Succesfully Loggedout"
            })
            // res.redirect('/');
    }
}