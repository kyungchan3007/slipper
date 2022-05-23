// 해리 작업 5/13
import MyinformationPresenter from "../myinformation/myinformation.presenter";
import MyBoardsPresenter from "../myboards/myboards.presenter";
import MypicksPresenter from "../mypicks/mypicks.presenter";
import MypaidsPresenter from "../mypaids/mypaids.presenter";
import * as S from "./mypage.styles";
import { IMyPagePresenter } from "./mypage.types";

export default function MyPagePresenter(props: IMyPagePresenter) {
  // console.log(props.hamMypageRight);
  return (
    // <S.Wrapper>
    <S.WrapperOut>
      <S.WrapperLeft>
        <S.NicknameWrapper>
          <S.NicknameFront>부천토박이 </S.NicknameFront>
          <S.Nickname>님의 신발장</S.Nickname>
        </S.NicknameWrapper>
        <S.ProfileImage></S.ProfileImage>
        <S.MenuWrapper
          id="myinfoBtn"
          onClick={props.onClickMyinfo}
          mypageRight={props.mypageRight === "myinformation"}
        >
          <S.Icon src="/image/myinfoColored.png"></S.Icon>
          <S.MenuButton>개인 정보</S.MenuButton>
        </S.MenuWrapper>
        <S.MenuWrapper
          onClick={props.onClickMypicks}
          mypageRight={props.mypageRight === "mypicks"}
        >
          <S.Icon src="/image/mypicksColored.png"></S.Icon>
          <S.MenuButton>찜한 글</S.MenuButton>
        </S.MenuWrapper>
        <S.MenuWrapper
          onClick={props.onClickMyboards}
          mypageRight={props.mypageRight === "myboards"}
        >
          <S.Icon src="/image/myboardsColored.png"></S.Icon>
          <S.MenuButton>내가 쓴 글</S.MenuButton>
        </S.MenuWrapper>
        <S.MenuWrapper
          onClick={props.onClickMypaids}
          mypageRight={props.mypageRight === "mypaids"}
        >
          <S.Icon src="/image/mypaidsColored.png"></S.Icon>
          <S.MenuButton>결제내역</S.MenuButton>
        </S.MenuWrapper>
      </S.WrapperLeft>
      <S.WrapperRight>
        {/* <S.NicknameWrapper>
          <S.NicknameFront>부천토박이 </S.NicknameFront>
          <S.Nickname>님의 신발장</S.Nickname>
        </S.NicknameWrapper> */}
        <S.Right>
          {props.mypageRight === "myinformation" && <MyinformationPresenter />}
          {props.mypageRight === "mypicks" && <MypicksPresenter />}
          {props.mypageRight === "myboards" && <MyBoardsPresenter />}
          {props.mypageRight === "mypaids" && <MypaidsPresenter />}
        </S.Right>
      </S.WrapperRight>
    </S.WrapperOut>
    // </S.Wrapper>
  );
}
