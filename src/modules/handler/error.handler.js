export function errorHandler(res, err) {
    
    return res.status(500).json({
        isSuccess: false,
        message: `${err.name} : ${err.message}`,
        result: {}
    });

}