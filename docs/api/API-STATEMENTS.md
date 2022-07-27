# Api Statements

API 명세서입니다.

- List
    - ⚡ Post
    - ⚡ Comment
    - 🎉 Rsepoonse

## List

| Method | Path             | Description                       |
| :----- | :--------------- | :-------------------------------- |
| GET    | /post            | 전체 게시글 조회                   |
| POST   | /post            | 게시글 작성                       |
| PUT    | /post/:id        | 게시글 수정                       |
| DELETE | /post/:id        | 게시글 삭제                       |
| GET    | /post/:id        | 게시글 조회                       |
| GET    | /comment         | 댓글 조회                         | 
| POST   | /comment         | 댓글 작성                         |
| PUT    | /comment/:id     | 댓글 수정                         |
| DELETE | /comment/:id     | 댓글 삭제                         |

### ⚡ Post

| Method , Path (params)    | Query                   | Body                                                                            | Response |
| :------------------------ | :---------------------- | :------------------------------------------------------------------------------ | :-- |
| GET    /post              | sort: 'asc' / 'desc     |                                                                                 | 🎉 Response 를 참고해주세요. |
| POST   /post              |                         | title: String <br> context: String <br> owner: `ObjectId` <br> password: String   | " |
| GET    /post/:id          |                         |                                                                                 | " |
| PUT    /post/:id          |                         | title: String <br> context: String <br> owner: `ObjectId` <br> password: String   | " |
| DELETE /post/:id          |                         | owner: `ObjectId` <br> password: String                                           | " |

### ⚡ Comment

| Method , Path (params)    | Query                   | Body                                    | Response |
| :------------------------ | :---------------------- | :---------------------------------------- | :-------------------------- |
| GET    /comment           | sort: 'asc' / 'desc'    | postId: `ObjectId`                        | 🎉 Response 를 참고해주세요. |
| POST   /comment           |                         | postId: `ObjectId` <br> context: String   | "                           |
| PUT    /comment/:id       | postId: `ObjectId`        | context: String                         | "                           |
| DELETE /comment/:id       | postId: `ObjectId`        |                                         | "                           |

### 🎉 Rsepoonse

Reponse 는 항상 일관된상태로 반환되고 있습니다.

다음의 기준에 따라서 요청 후, 확인하시면 됩니다.

1. statusCode 는 실패 및 성공에 따라서 201, 404 등 적절한 값이 들어있습니다.
    1. 단, 설게 단계 에서 잡아내지 못한 에러는 500 UnkownServerError 로 반환될 예정입니다.
2. result 는 항상 다음과 같은 형태를 구성하고 있습니다.
    ```javascript
    const result = {
        isSuccess: true // or false,
        message: '성공 시의 메세지' // or `${err.name} : ${err.message}` ,
        result: {
            /*
             * 성공 시, 요청의 결과로 변경이 일어난 결과물,
             * 실패 시, 요청의 내용 혹은 빈 객체 리터럴
             */
        }
    }
    ```