import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 490px;
  max-height: 320px;
  border-radius: 20px;
  background-color: #fff;
  padding: 20px;
  position: absolute;
  margin-top: 10px;
`;

export const Text = styled.span`
  color: gray;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const RecommendList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
`;

export const RecommendItem = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ItemText = styled.span`
  font-weight: 700;
`;

export const Empty = styled.span`
  color: gray;
  font-size: 18px;
  font-weight: 700;
`;
