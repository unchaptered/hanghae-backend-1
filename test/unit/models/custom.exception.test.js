import {
    CustomException,
    BadRequestException,
    UnauthorizedException,
    NotFoundException
} from '../../../src/models/_.loader';


describe('Custom Exception List', () => {

    it ('Custom Exception extends Error', () => {

        const sampleMessage = 'Message';
        const sampleStatusCode = 500;

        const exception = new CustomException(sampleMessage, sampleStatusCode);

        expect(exception).toBeInstanceOf(Error);
        expect(exception).toBeInstanceOf(CustomException);
        expect(exception).not.toBeInstanceOf(BadRequestException);

        expect(exception.name).toBe('Error');
        expect(exception.message).toBe(sampleMessage);
        expect(exception.statusCode).toBe(sampleStatusCode);

    });

    describe('The others extends Custom Exception', () => {

        it ('BadRequestException is 400, BadRequestException', () => {

            const sampleMessage = 'Message';
    
            const exception = new BadRequestException(sampleMessage);
            
            expect(exception).toBeInstanceOf(Error);
            expect(exception).toBeInstanceOf(CustomException);
            expect(exception).toBeInstanceOf(BadRequestException);
            
            expect(exception.name).toBe('BadRequestException');
            expect(exception.message).toBe(sampleMessage);
            expect(exception.statusCode).toBe(400);
        });

        it ('UnauthorizedException is 400, UnauthorizedException', () => {

            const sampleMessage = 'Message';
    
            const exception = new UnauthorizedException(sampleMessage);
            
            expect(exception).toBeInstanceOf(Error);
            expect(exception).toBeInstanceOf(CustomException);
            expect(exception).toBeInstanceOf(UnauthorizedException);
            
            expect(exception.name).toBe('UnauthorizedException');
            expect(exception.message).toBe(sampleMessage);
            expect(exception.statusCode).toBe(401);
        });

        it ('NotFoundException is 400, NotFoundException', () => {

            const sampleMessage = 'Message';
    
            const exception = new NotFoundException(sampleMessage);
            
            expect(exception).toBeInstanceOf(Error);
            expect(exception).toBeInstanceOf(CustomException);
            expect(exception).toBeInstanceOf(NotFoundException);
            
            expect(exception.name).toBe('NotFoundException');
            expect(exception.message).toBe(sampleMessage);
            expect(exception.statusCode).toBe(404);
        });

    })

});