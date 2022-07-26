import { Form, SuccessForm, FailureForm } from '../../../src/models/_.loader';


describe('Form', () => {

    it('Form is defined', () => {

        expect(Form).toBeDefined();
        
    });

    describe('The others extends Form', () => {

        const sampleMessage = 'text';
        const sampleResult = { username: 'unchaptered' };

        it ('SuccessForm is { true, message, result }', () => {

            const successForm = new SuccessForm(sampleMessage, sampleResult);

            expect(successForm).toBeInstanceOf(Form);

            expect(successForm.isSuccess).toBeTruthy();
            expect(successForm.message).toBe(sampleMessage);
            expect(successForm.result).toEqual(sampleResult);


        });

        it ('FailureForm is { false, message, result }', () => {

            const failureForm = new FailureForm(sampleMessage, sampleResult);

            expect(failureForm).toBeInstanceOf(Form);

            expect(failureForm.isSuccess).toBeFalsy();
            expect(failureForm.message).toBe(sampleMessage);
            expect(failureForm.result).toEqual(sampleResult);

        });
    })

});