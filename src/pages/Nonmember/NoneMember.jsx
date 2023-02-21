import React from "react";
import styled from "styled-components";
import color from "styles/color";
import Navbar from "component/Navbar";

const { gray6, white, gray2, gray3, gray1 } = color;

const SLayout = styled.div`
  width: 100%;
  height: 90vh;
  background-color: ${gray6};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SItemDiv = styled.div`
  width: 80%;
  height: 80%;
  border-radius: 10px;
  background-color: ${white};
  display: flex;
  justify-content: center;
`;
const SItemInnerDiv = styled.div`
  width: 50%;
  height: 100%;
`;
const SWalletImg = styled.img`
  width: 124px;
  height: 124px;
`;
const SCompleteLetter = styled.div`
  font-family: NotoSansKR;
  font-size: 30px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.67;
  letter-spacing: normal;
  text-align: center;
  color: ${gray2};
  margin-top: 5%;
`;
const SOrderNumberTextDiv = styled.div`
  font-family: NotoSansKR;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.83;
  letter-spacing: normal;
  text-align: center;
  color: ${gray3};
  margin-top: 50px;
`;
const SOrderNumberDiv = styled.div`
  font-size: 40px;
  color: #ff985f;
  display: flex;
  justify-content: center;
`;
const SOrderGuideItemDiv = styled.div`
  font-family: NotoSansKR;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.83;
  letter-spacing: normal;
  text-align: center;
  color: ${gray3};
  margin-bottom: 2%;
`;
const SImgDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10%;
`;
const SOrderGuideDiv = styled.div`
  margin-top: 50px;
`;
const SbuttonDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 7%;
  margin-top: 60px;
`;
const SCheckbutton = styled.button`
  border-radius: 10px;
  background-color: ${gray1};
  width: 30%;
  height: 100%;
  font-family: NotoSans;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${white};
`;
const SCancelButton = styled.button`
  font-family: NotoSans;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${gray1};
  border-radius: 10px;
  border: solid 1px ${gray1};
  background-color: ${white};
  width: 30%;
  height: 100%;
  margin-left: 10px;
`;
function NoneMember() {
  return (
    <div>
      <Navbar />
      <SLayout>
        <SItemDiv>
          <SItemInnerDiv>
            <SImgDiv>
              <SWalletImg src="/asset/지갑.png" />
            </SImgDiv>

            <SCompleteLetter>고객님, 주문이 완료되었습니다.</SCompleteLetter>
            <SOrderNumberTextDiv>
              고객님이 주문하신 주문번호는
            </SOrderNumberTextDiv>
            <SOrderNumberDiv>191005330입니다.</SOrderNumberDiv>
            <SOrderGuideDiv>
              <SOrderGuideItemDiv>
                비회원의 주문내역 확인은 상단의
              </SOrderGuideItemDiv>
              <SOrderGuideItemDiv>
                “My order” 페이지에서 하실 수 있습니다.
              </SOrderGuideItemDiv>
            </SOrderGuideDiv>
            <SbuttonDiv>
              <SCheckbutton> 주문 내역 조회</SCheckbutton>
              <SCancelButton> 주문 취소 요청</SCancelButton>
            </SbuttonDiv>
          </SItemInnerDiv>
        </SItemDiv>
      </SLayout>
    </div>
  );
}

export default NoneMember;
