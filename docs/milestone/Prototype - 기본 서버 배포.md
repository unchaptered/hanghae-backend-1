# 기본 서버 배포

> 마일스톤 : [Prototype : 기본 서버 배포](https://github.com/unchaptered/hanghae-backend-1/milestone/4)

- EC2 인스턴스 생성 및 설정
    - 별도의 보안그룹 설정
        - SSH 22 port Anywhere IPv4
        - HTTP 80 port Anywhere IPv4
    - 별도의 pem 키 발급 및 저장
        - chmod 400 혹은 Window 개별 파일 보안 설정
<br><br>
- Windows 에 penSSH 설치
<br><br>
- 우분투에 접속
    - OpenSSH, pem 을 이용 | `ssh -i pem-key-경로 ubuntu@EC2인스턴스-public-IPv4`
<br><br>
- 우분투에 기본 파일 셋팅
    - nvm, git 설치 | `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash`        
    - nvm 활성화 | `. ~/.nvm/nvm.sh`
    - node 설치 | `nvm install --lts`
    - node 확인 | `node -e "console.log('Running Node.js ' + process.version)"`
    - pm2 설치 | `npm install -g pm2`
    - iptables 설정 | `sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000`
<br><br>
- 우분투에 프로젝트 셋팅
    - 프로젝트 가져오기 | `git clone 레포지토리`
    - 프로젝트 모듈 설치 | `npm ci`
    - 프로젝트 테스트 | `npm run test`
    - 프로젝트 실행 | `pm2 start src/app.js`

## 참고 자료

### 리눅스 디렉토리 설명

1. [AWS로 서버를 시작하기 위해 필요한 Linux 지식 2-리눅스 기본조작](https://medium.com/jaewoo/aws%EB%A1%9C-%EC%84%9C%EB%B2%84%EB%A5%BC-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-%EC%9C%84%ED%95%B4-%ED%95%84%EC%9A%94%ED%95%9C-linux-%EC%A7%80%EC%8B%9D-2-%EB%A6%AC%EB%88%85%EC%8A%A4-%EA%B8%B0%EB%B3%B8%EC%A1%B0%EC%9E%91-40ba64a10ead)
2. [[LINUX] 리넥스 디렉토리 구조 100 정리](https://inpa.tistory.com/entry/LINUX-%F0%9F%93%9A-%EB%A6%AC%EB%88%85%EC%8A%A4-%EB%94%94%EB%A0%89%ED%86%A0%EB%A6%AC-%EA%B5%AC%EC%A1%B0#6dde)

### EC2 인스턴스 배포 관련

1. [AWS EC2 Node.js 배포](https://velog.io/@rheey90/AWS-EC2-Node.js-%EC%84%9C%EB%B2%84-%EB%B0%B0%ED%8F%AC#aws-ec2-%EB%B0%B0%ED%8F%AC%EB%A5%BC-%EC%9C%84%ED%95%9C-%EA%B0%84%EB%8B%A8%ED%95%9C-nodejs-%EC%84%9C%EB%B2%84-%EB%A7%8C%EB%93%A4%EA%B8%B0)
2. [EC2 express 배포](https://velog.io/@ksh4820/AWS-EC2-express-%EB%B0%B0%ED%8F%AC)
