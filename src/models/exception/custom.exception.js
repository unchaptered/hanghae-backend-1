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

export class UnauthorizedException extends CustomException {
    
    constructor(message) {

        super(message);

        this.name = 'UnauthorizedException';
        this.statusCode = 401;

    }

}

export class NotFoundException extends CustomException {

    constructor(message) {

        super(message);

        this.name = 'NotFoundException';
        this.statusCode = 404;

    }

}