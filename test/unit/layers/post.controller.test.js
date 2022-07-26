import * as postController from '../../../src/layers/controllers/post.controller';


describe('Post Controller', () => {

    it ('should be defined', () => {

        expect(postController).toBeDefined();

    });

    it ('should be 5 length', () => {

        expect(Object.keys(postController).length).toBe(5);

        expect(typeof postController.getPostsByQuery).toBe('function');
        expect(typeof postController.createPost).toBe('function');
        expect(typeof postController.getPostById).toBe('function');
        expect(typeof postController.putPostById).toBe('function');
        expect(typeof postController.deletePostById).toBe('function');
        
    });

});