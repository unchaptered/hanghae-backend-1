import { CustomException, UnkownServerError } from '../../models/_.loader.js';

export function exceptionHandler(err) {

    if (err instanceof CustomException) return err;
    else return new UnkownServerError(err.message);

}