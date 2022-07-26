import { SuccessForm, FailureForm } from '../../models/_.loader.js';


export class FormFactory {

    /**
     * 
     * @param {*} message 
     * @param {*} result 
     * @returns `SuccessForm` : { isSuccess, message, result }
     */
    getSuccessForm(message, result = {}) {

        return new SuccessForm(message, result);

    }

    /**
     * 
     * @param {*} message 
     * @param {*} result 
     * @returns `FailureForm` : { isSuccess, message, result }
     */
    getFailureForm(message, result = {}) {

        return new FailureForm(message, result);

    }

}