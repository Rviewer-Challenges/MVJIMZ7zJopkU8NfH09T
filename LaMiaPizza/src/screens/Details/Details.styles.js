import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components';

const Container = styled.View`
    flex: 1;
    padding-vertical: 16px;
`;

const PizzaImage = styled.Image`
    width: 100%;
    height: 200px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    margin-bottom: 16px;
`; 

const Content = styled.View`
    flex-direction: row;
    align-items: center;
    padding-horizontal: 16px;
`;

const Name = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #000000;
    margin-bottom: 10px;
`; 

const Price = styled.Text`
    font-size: 18px;
    color: #63b521;
    margin-horizontal: 16px;
    font-weight: bold;
`;

const Description = styled.Text`
    color: #000000;
    font-size: 16px;
    margin-bottom: 16px;
    padding-horizontal: 16px;
`;

const Ingredients = styled.Text`
    color: #000000;
`;

const Actions = styled.View`
    padding-vertical: 16px;
    padding-Horizontal: 16px;
    justify-content: flex-end;
    flex-direction: row;
`;

const AddCartContent = styled.View`
    margin-left: 20px;
`;

const AddCart = styled(Icon.Button)`
    background-color: #b5b8b1;

`;

const ChooseSlices = styled(Icon.Button)`
    background-color: #b5b8b1;
`;

export { 
    Container,
    PizzaImage,
    Content,
    Name,
    Price,
    Description,
    Ingredients,
    Actions,
    AddCartContent,
    AddCart,
    ChooseSlices
};