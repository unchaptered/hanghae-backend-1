export class Form {

    isSuccess;
    message;
    result;

    constructor(isSuccess, message, result) {

        this.isSuccess = isSuccess;
        this.message = message;
        this.result = result;

    }

}

export class SuccessForm {

    constructor(message, result = {}) {

        super(true, message, result);

    }

}

export class FailureForm {

    constructor(message, result = {}) {

        super( false, message, result);

    }

}