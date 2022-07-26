import { createResponse } from 'node-mocks-http';
import { errorHandler } from '../../src/handler/error.handler';


describe('Error Handler', () => {
    
    const mockRes = createResponse();
    const mockErr = new Error('test');

    it ('errHandler', () => {

        const res = errorHandler(mockRes, mockErr);

        expect(mockRes._getStatusCode()).toBe(500);
        expect(mockRes._getJSONData()).toEqual({
            isSuccess: false,
            message: `Error : ${mockErr.message}`,
            result: {}
        });

    });

});