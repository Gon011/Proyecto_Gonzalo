module.exports = (request, response, next) => {
    const user = request.session.username; 
    if (!user) {
        return response.redirect("/")
    } else {
        next();
    }
}