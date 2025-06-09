function authorizeRole(...roles) {
    return (req, res, next) => {
        try {
            if (!roles.includes(req.user.role)) {
                return res.status(403).json({ message: "You don't have permission to access this resource" });
            }
            next();
        } catch (err) {
            res.status(400).send({
                message: 'Error in role authorization',
                success: false,
                err,
            });
        }
    };
}

module.exports = { authorizeRole };
