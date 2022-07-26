import * as postService from '../../../src/layers/services/post.service';


describe('Post Service', () => {

    it ('should be defined', () => {

        expect(postService).toBeDefined();

    });

    it ('should be 5 length', () => {

        expect(Object.keys(postService).length).toBe(5);

        expect(typeof postService.getPostsByQuery).toBe('function');
        expect(typeof postService.createPost).toBe('function');
        expect(typeof postService.getPostById).toBe('function');
        expect(typeof postService.putPostById).toBe('function');
        expect(typeof postService.deletePostById).toBe('function');
        
    });

});