export class CustomException extends Error {

    statusCode;

    constructor(message, statusCode) {

        super(message);
        this.statusCode = statusCode;

    }
}

export class BadRequestException extends CustomException {

    constructor(message) {
        super(message);
        this.name = 'BadRequestException';
        this.statusCode = 400;
    }

}