import Env from './env.js';
import App from './server.js';
import Db from './db.js';


(
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
        if (result.isSuccess) {

            console.log('데이터 베이스 연결에 성공했습니다.');
            const app = await App.getAppInstance(MODE, PORT);

        } else {

            console.log('데이터 베이스 연결에 실패했습니다.');
            console.log(result.message);

        }
    
    }
)()