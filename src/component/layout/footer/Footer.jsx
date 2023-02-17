import React from "react";
import styled from "styled-components";
import color from "../../../styles/color";

const SlayOut = styled.footer`
  width: 100%;
  height: 360px;
  padding: 35px 0 0;
  background-color: ${color.gray6};
  color: ${color.gray1};
`;

const Sfooter = styled.div`
  display: flex;
  flex-direction: space-between;
  justify-content: space-between;
  padding: 0 2%;
  line-height: 1.5;

  h2 {
    font-family: "Playfair Display", serif;
    font-weight: 700;
    font-size: 60px;
    align-items: center;
  }
`;

const SfooterUl = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  font-size: 14px;

  li {
    padding-left: 40px;
  }

  b {
    font-size: 24px;
    font-weight: 600;
  }
`;
const Snav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 60px 0 20px 0;
  line-height: 2;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
    font-size: 20px;
    font-weight: 600;
    border-bottom: 1px solid ${color.gray1};
    padding: 0 20px;
  }
`;

const Sfooter2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding: 0 !impotant;

  ul {
    width: 100%;
    display: flex;
    list-style: none;
    justify-content: space-between;
    padding: 0 20px;
  }
`;

function Footer() {
  return (
    <SlayOut>
      <Sfooter>
        <h2>value shop</h2>
        <SfooterUl>
          <li>
            고객센터 <br />
            <b>1234-1234</b>
            <br />
            운영시간 : 09:00~17:30
            <br />
            점심시간 12:00~13:00
            <br />
            (공휴일, 주말은 휴무입니다.)
          </li>
          <li>
            상호 : ㈜valueshare | 대표 : 엘리스
            <br />
            개인정보보호책임자 : 엘리스 | elice@test.com
            <br />
            주소 : 세종특별자치시 엘리스면 토끼동 <br />
            사업자등록번호 : 123-12-12345 [사업자정보확인] <br />
            통신판매업신고번호 : 2023-엘리스-0213
          </li>
        </SfooterUl>
      </Sfooter>
      <Snav>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Product</li>
          <li>Membership</li>
        </ul>
      </Snav>
      <Sfooter2>
        <ul>
          <li>ⓒCopyright 2023. All rights reserved.</li>
          <li>개인정보취급방침 소비자피해보상보험 청소년보호정책 이용정책</li>
        </ul>
      </Sfooter2>
    </SlayOut>
  );
}

export default Footer;
