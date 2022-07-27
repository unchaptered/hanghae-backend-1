import Env from './env.js';
import App from './server.js';
import Db from './db.js';

export default (
    /**
     * I want to hide Logic of `index.js`.
     * 
     * This skill for protect Singleton Pattern.
     * 
     * Please visit : https://github.com/Boiler-Express/.github/blob/main/notes/design/SINGLETON.md
     */
    async () => {

        const { MODE, PORT, DB_ADDRESS } = Env.getEnvInstance();
        const result = await Db.setConnection(MODE, DB_ADDRESS);
        const app = await App.getAppInstance(MODE, PORT);

        return app;
    
    }
)()