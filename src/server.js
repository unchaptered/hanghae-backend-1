import Express from 'express';

import { indexRouter, postRouter, commentRouter } from './routes/_.loader.js';

/**
 * `App` class is craeted for single instance.
 * 
 * If you don't know Singleton Pattern.
 * 
 * Please visit : https://github.com/Boiler-Express/.github/blob/main/notes/design/SINGLETON.md
 */
export default class App {

    static app;

    constructor() {}

    /**
     * getAppInstance should return `Express Instance`
     * 
     * @param {*} MODE 
     * @param {*} PORT 
     * @returns `Express Instance`
     */
    static getAppInstance(MODE, PORT) {

        if (this.app) return this.app;

        this.app = Express();

        this.app.use('/', indexRouter);
        this.app.use('/post', postRouter);
        this.app.use('/comment', commentRouter);

        this.app.route('*').get((req, res ) => {
            return res.json('Hello, worlds');
        });

        this.app.listen(PORT, () => {
            if (MODE !== 'test') console.log(`Server is running on ${PORT}, in ${MODE}`);
        });

        return this.app;

    }

}