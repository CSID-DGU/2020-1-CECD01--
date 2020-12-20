
# 2020-1-CECD01-SupremeTeam-5
2020년도 1학기 컴퓨터종합설계01 02분반 슈프림팀


## Project
* 2020년 컴퓨터공학 종합설계프로젝트 슈프림팀
* 온라인 시큐어 코딩 훈련시스템 secubook

## 참여 인원
|이름|역할|
|------|---|
|조인택|secubook 백엔드 개발|
|양시연|secubook 프론트, 백엔드 개발|
|이승민|secubook 프론트 개발|


## Feature
- 시큐어코딩 교육 자료 제공
- 실습 환경 제공
- 레벨 테스트 기능
- 게시판 기능


## Screens

#### 교육 자료
![그림1](https://user-images.githubusercontent.com/37260938/102711985-13bb4380-4301-11eb-91c7-591260dcb874.png)


#### 실습 환경
![그림2](https://user-images.githubusercontent.com/37260938/102711987-1c137e80-4301-11eb-8c35-ec32db2a89fe.png)


## 시스템 구성도

![image](https://user-images.githubusercontent.com/37260938/102711969-eff7fd80-4300-11eb-9c5d-39926713253b.png)



## 사용된 도구
* InteliJ
* Eclipse
* vim
* React
* Docker
* AWS EC2
* AWS RDS
* VSCode
* Javascript
* Node.js
* MYSQL


## 사용된 라이브러리
- Monaco-editor
- Express
- Sequelize
- Passport
- ShellJS
- PM2


## 서버 설치 가이드(Mac PC 기준)

1. `Node`, `mysql` 설치
2. GitHub 레포 다운받기
3. `server` 폴더에 `.env` 파일 생성 후, 아래 내용 작성

    ```jsx
    COOKIE_SECRET=secubooksecret
    // 아래 값은 mysql 설치 시 설정한 비밀번호로 사용
    SEQUELIZE_PASSWORD=???
    SEQUELIZE_USERNAME=root
    ```

4. 터미널에서 `server` 폴더까지 들어간 뒤, 아래 명령어 입력

    ```jsx
    npm i
    sudo npm i -g pm2 sequelize-cli
    sequelize db:create
    npm run dev
    ```

5. 서버 설정 완료
