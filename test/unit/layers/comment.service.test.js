import * as commentService from '../../../src/layers/services/comment.service';

describe('Comment Service', () => {

    it ('should be defined', () => {

        expect(commentService).toBeDefined();

    });

    it ('should be 4 length', () => {

        expect(Object.keys(commentService).length).toBe(4);
        
        expect(typeof commentService.getComment).toBe('function');
        expect(typeof commentService.createComment).toBe('function');
        expect(typeof commentService.putCommentById).toBe('function');
        expect(typeof commentService.deleteCommentById).toBe('function');
        
    });

});