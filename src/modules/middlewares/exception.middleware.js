import { exceptionHandler } from '../_.lodaer.js';

export const exceptionMiddleware = (req, res, next) => {

    const formFactory = res.locals.formFactory;
    const error = res.locals.error;

    const except = exceptionHandler(error);

    return res.status(except.statusCode).json(
        formFactory.getFailureForm(except.message, {}));

}

// const error = (err, req, res, next) => {

//     res.locals.message = err.message;
//     res.locals.error = err;
//     res.status(err.status || 500);
//     res.render("error");

// }