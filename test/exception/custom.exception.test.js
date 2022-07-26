import { BadRequestException, CustomException } from '../../src/exception/custom.exception';


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

    })

});