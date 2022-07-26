import { FormFactory } from '../../../../src/modules/_.lodaer';
import { Form, SuccessForm, FailureForm } from '../../../../src/models/_.loader';


describe('Form Factory', () => {

    it('should be defined', () => {

        expect(FormFactory).toBeDefined();

    });

    describe('public methods', () => {

        let formFactory;
        let sampleMessage;
        let sampleReesult;

        beforeEach(() => {
            formFactory = new FormFactory();
            sampleMessage = 'test';
            sampleReesult = { username: 'unchaptered' };
        });

        it ('formFactory should have 2 methods', () => {

            expect(formFactory.getFailureForm).toBeDefined();
            expect(formFactory.getSuccessForm).toBeDefined();
            expect(typeof formFactory.getFailureForm).toBe('function');
            expect(typeof formFactory.getSuccessForm).toBe('function');

        });

        it ('getSuccessForm should return SuccessForm', () => {

            const form = formFactory.getSuccessForm(sampleMessage, sampleReesult);

            expect(form).toBeInstanceOf(Form);
            expect(form).toBeInstanceOf(SuccessForm);
            expect(form).not.toBeInstanceOf(FailureForm);

        });

        it ('getFailureForm should return SuccessForm', () => {

            const form = formFactory.getFailureForm(sampleMessage, sampleReesult);

            expect(form).toBeInstanceOf(Form);
            expect(form).not.toBeInstanceOf(SuccessForm);
            expect(form).toBeInstanceOf(FailureForm);

        });

    });

});