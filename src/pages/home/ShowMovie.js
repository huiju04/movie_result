import styled from "styled-components";

export const ShowMovie = () => {
  const Wrap = styled.div``;
  const InWrap = styled.div``;
  const Title = styled.div``;
  const Movie_Bg = styled.div``;
  const Movie_Title = styled.div``;
  return (
    <Wrap>
      <InWrap>
        <Title>인기영화</Title>
        <Movie_Bg></Movie_Bg>
        <Movie_Title>아무거나</Movie_Title>
        {/* api 받아와서 map()로 바꾸기 */}
      </InWrap>
    </Wrap>
  );
};
