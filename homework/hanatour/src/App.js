import React from 'react';
import Item from './Item';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Item imgSrc="https://static.hanatour.com/product/2019/07/17/0816dvbi79/small.jpg" region="오사카" productName="[오사카] 난카이 라피트 특급열차 편도권/왕복권 #QR코드교환#이티켓#간사이공항" price="11,500" date="2023년 12월 19일" starNum={10} buy="1천" hits="5천" />
      <Item imgSrc="https://static.hanatour.com/product/2023/11/29/0256q5jknt/small.jpg" region="오사카" productName="[간사이] 일본 오사카 주유패스 (1일권/2일권)" price="24,200" date="2023년 12월 18일" starNum={100} buy="5천" hits="60만" />
      <Item imgSrc="https://static.hanatour.com/product/2022/10/17/0650d7kivm/small.jpg" region="오사카" productName="[오사카] 간사이 쓰루패스 (3일권/2일권) #교토 #E바우처 티켓" price="34,000" date="2023년 12월 20일" starNum={50} buy="1천" hits="5만" />
      <Item imgSrc="https://static.hanatour.com/product/2019/09/30/01231ey3ku/small.jpg" region="도쿄" productName="[일본] JR 후지 · 시즈오카 투어리스트 미니패스 #후지산#MINI" price="56,300" date="2023년 12월 22일" starNum={80} buy="100" hits="1천" />
    </div>
  );
}

export default App;
