# 프로젝트 설명

원티드 프리온보딩 과제: 투자 관리 서비스의 관리자 기능 구현

<br/>

# 데모

<details>
<summary>레이아웃</summary>
<img src="https://user-images.githubusercontent.com/76088728/205435661-e5b5ae6a-53a9-4b77-b71b-83b900e2d15b.gif" />
  - Header: 현재 보고있는 메뉴 와 사용자명 보여줘야 함<br/>
  - Sider: 현재 보고있는 메뉴 하이라이트<br/>
  - Footer: Copyright © December and Company Inc. 가운데 정렬<br/>
</details>

<details>
<summary>계좌목록</summary>
<img src="https://user-images.githubusercontent.com/76088728/205435873-01dea880-c82d-4563-9529-c0b811134ed8.gif" />
  - 브로커명, 계좌 활성화 여부, 계좌 상태 필터링<br/>
  - 검색, 페이지네이션<br/>
  - 고객명 클릭시 사용자 상세화면으로 이동<br/>
  - 계좌번호를 누르면 계좌상세 화면으로 이동<br/>
  - 계좌번호 앞뒤 두글자 제외하고 나머지 `*` 마스킹 처리<br/>
</details>

<details>
<summary>사용자 목록</summary>
<img src="https://user-images.githubusercontent.com/76088728/205435898-d4773f14-acf5-4236-b584-0f05fec99528.gif" />
  - 활성화 여부, 임직원 계좌 여부를 필터링<br/>
  - 검색, 페이지네이션<br/>
  - 고객명: 가운데 글자 마스킹, 두글자일 경우 성을 제외한 이름 마스킹 처리, 4글자 이상일 경우 마스킹 처리 후 앞뒤 한글자만 표기, 고객명을 클릭시 사용자 상세화면으로 이동<br/>
  - 휴대폰 번호 (가운데 4자리 `***` 로 마스킹)<br/>
</details>

<details>
<summary>로그인 & 로그아웃</summary>
<img src="https://user-images.githubusercontent.com/76088728/205435907-8572a051-9163-4362-96a2-9b9a4fc2d6a0.gif" />
</details>

<details>
<summary>토큰 만료</summary>
<img src="https://user-images.githubusercontent.com/76088728/205435918-d5461f57-f1ac-406c-ae36-b38917a6cccf.gif" />
</details>

<br/>

# 실행방법

## 1. repository clone

```
$ git clone https://github.com/seonsy44/investment-management-admin.git
```

## 2. server 실행

```
# server 폴더로 이동
$ cd server

# 의존성 설치
$ npm install

# 서버 실행
$ npm start

# 상위 폴더로 이동
$ cd ..
```

## 3. front 실행

```
# client 폴더로 이동
$ cd client

# env 파일 작성
$ cat > .env.local
NEXT_PUBLIC_SERVER_URL='http://localhost:4000'
NEXT_PUBLIC_CLIENT_URL='http://localhost:3000'
ctrl + z

# 의존성 설치
$ npm install

# 프로젝트 실행
$ npm run dev
```

## 4. test용 아이디

```
id: seon@test.com
password: 1234qwer
```

<br/>

# 기술스택

- TypeScript
- NextJS
- Styled-Components
- Axios
- Redux-toolkit
- React-Query

<br/>

# 폴더구조

```
📦src
 ┣ 📂components
 ┃ ┣ 📂AccountDetail
 ┃ ┃ ┣ 📜Columns.tsx
 ┃ ┃ ┣ 📜Table.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Accounts
 ┃ ┃ ┣ 📜Filters.tsx
 ┃ ┃ ┣ 📜Pagenation.tsx
 ┃ ┃ ┣ 📜Table.tsx
 ┃ ┃ ┣ 📜TableBodyRow.tsx
 ┃ ┃ ┣ 📜TableHeadRow.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Layout
 ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┣ 📜Seo.tsx
 ┃ ┃ ┣ 📜Sider.tsx
 ┃ ┃ ┣ 📜SiderItem.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂UI
 ┃ ┃ ┣ 📜BodyColumn.tsx
 ┃ ┃ ┣ 📜HeadColumn.tsx
 ┃ ┃ ┣ 📜SearchBar.tsx
 ┃ ┃ ┗ 📜SelectBox.tsx
 ┃ ┣ 📂UserDetail
 ┃ ┃ ┣ 📜Columns.tsx
 ┃ ┃ ┣ 📜DeleteModal.tsx
 ┃ ┃ ┣ 📜UserInfoTable.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Users
 ┃ ┃ ┣ 📜Filters.tsx
 ┃ ┃ ┣ 📜Table.tsx
 ┃ ┃ ┣ 📜TableBodyRow.tsx
 ┃ ┃ ┣ 📜TableHeadRow.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┗ 📂signin
 ┃ ┃ ┣ 📜AlertModal.tsx
 ┃ ┃ ┣ 📜Button.tsx
 ┃ ┃ ┣ 📜FormTitle.tsx
 ┃ ┃ ┣ 📜Input.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useAccountNameEdit.ts
 ┃ ┣ 📜useAccountQueryDispatch.ts
 ┃ ┣ 📜useAccountQueryState.ts
 ┃ ┣ 📜useAccountURL.ts
 ┃ ┣ 📜useAccounts.ts
 ┃ ┣ 📜useDeleteModal.ts
 ┃ ┣ 📜useEdit.ts
 ┃ ┣ 📜useHeaderTitleDispatch.ts
 ┃ ┣ 📜useParseAccountData.ts
 ┃ ┣ 📜useParseUserData.ts
 ┃ ┣ 📜useParseUserDetailData.ts
 ┃ ┣ 📜useSignin.ts
 ┃ ┣ 📜useSignout.ts
 ┃ ┣ 📜useUserNameEdit.ts
 ┃ ┣ 📜useUserQueryDispatch.ts
 ┃ ┣ 📜useUserQueryState.ts
 ┃ ┣ 📜useUserURL.ts
 ┃ ┗ 📜useUsers.ts
 ┣ 📂pages
 ┃ ┣ 📂accounts
 ┃ ┃ ┣ 📜[accountId].tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂users
 ┃ ┃ ┣ 📜[userId].tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📜_app.tsx
 ┃ ┣ 📜_document.tsx
 ┃ ┣ 📜index.tsx
 ┃ ┗ 📜signin.tsx
 ┣ 📂repositories
 ┃ ┗ 📜CookieTokenRepository.ts
 ┣ 📂services
 ┃ ┣ 📜AccountService.ts
 ┃ ┣ 📜AuthService.ts
 ┃ ┗ 📜UserService.ts
 ┣ 📂store
 ┃ ┣ 📜accountQuerySlice.ts
 ┃ ┣ 📜alertModalSlice.ts
 ┃ ┣ 📜headerTitleSlice.ts
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜userQuerySlice.ts
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyles.ts
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜mixins.ts
 ┃ ┗ 📜theme.ts
 ┣ 📂type
 ┃ ┣ 📜account.ts
 ┃ ┣ 📜auth.ts
 ┃ ┗ 📜user.ts
 ┣ 📂utils
 ┃ ┣ 📜const.ts
 ┃ ┣ 📜getAxios.ts
 ┃ ┣ 📜getSelectOptions.ts
 ┃ ┣ 📜maskingName.ts
 ┃ ┣ 📜maskingPhoneNum.ts
 ┃ ┣ 📜parseAccountNumber.ts
 ┃ ┣ 📜parseDate.ts
 ┃ ┗ 📜parseDateTime.ts
 ┗ 📜middleware.ts
```
