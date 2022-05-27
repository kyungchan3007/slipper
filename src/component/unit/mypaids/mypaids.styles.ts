import styled from "@emotion/styled";

export const WrapperOut = styled.div`
  width: 100%;
  /* padding: 5%; */
`;
export const Head = styled.div`
  font-size: 1.8rem;
  border-bottom: 1px solid gainsboro;
  padding: 5% 1% 2% 2%;
`;
export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BodyHeadWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 5% 5% 0% 5%;
`;
export const BodyHead = styled.div`
  font-size: 1.6rem;
  width: 30%;
  text-align: center;
  padding-right: 4%;
  margin-bottom: 2%;
`;
export const Body = styled.div`
  /* padding: 1%; */
  height: 500px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const RowWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  /* background-color: #f5f7f9; */
  background-color: #f4f7f9b3;
  border-radius: 5px;
  padding: 1% 4% 1% 4%;
  margin: 1%;
  :hover {
    /* position: relative; */
    /* bottom: 2px; */
    color: #008af6;
  }
`;
export const Row = styled.div`
  font-size: 1.4rem;
  width: 30%;
  text-align: center;
  padding-right: 5%;
`;
