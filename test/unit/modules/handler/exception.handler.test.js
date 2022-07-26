import { CustomException } from '../../../../src/models/_.loader';
import { exceptionHandler } from '../../../../src/modules/_.lodaer';


describe('Exception Handler', () => {
    
    it ('would pass CustomExcpetion', () => {

        const exception = exceptionHandler(new CustomException('a', 1));

        expect(exception).toBeInstanceOf(CustomException);

    });

    it ('would repackage from Error to CustomException', () => {

        const exception = exceptionHandler(new Error('a'));

        expect(exception).toBeInstanceOf(CustomException);

    });

});