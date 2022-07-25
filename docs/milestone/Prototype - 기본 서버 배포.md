# 기본 서버 배포

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