https://docs.aws.amazon.com/ko_kr/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html

1. EC2 인스턴스 생성
2. SSH 로 ec2-user 로 Linux 인스턴스에 연결
3. nvm 을 설치
4. nvm 활성화
5. node 설치
6. node 테스트

```cmd
<!-- nvm 설치 -->
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

<!-- nvm 활성화 -->
. ~/.nvm/nvm.sh

<!-- node 설치 -->
nvm install --lts

<!-- node 확인 -->
node -e "console.log('Running Node.js ' + process.version)"
```