import * as commentController from '../../../src/layers/controllers/comment.controller';

describe('Comment Controller', () => {

    it ('should be defined', () => {

        expect(commentController).toBeDefined();

    });

    it ('should be 4 length', () => {

        expect(Object.keys(commentController).length).toBe(4);

        expect(typeof commentController.getComment).toBe('function');
        expect(typeof commentController.createComment).toBe('function');
        expect(typeof commentController.putCommentById).toBe('function');
        expect(typeof commentController.deleteCommentById).toBe('function');
        
    });

});