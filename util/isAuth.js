module.exports = (request, response, next) => {
    const user = request.session.username; 
    if (!user) {
        response.redirect("/")
    } else {
        next();
    }
}