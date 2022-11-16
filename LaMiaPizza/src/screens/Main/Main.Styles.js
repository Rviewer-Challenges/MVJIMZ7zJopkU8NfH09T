import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components';

const Container = styled.View`
    flex: 1;
`;

const ItemTouch = styled.TouchableHighlight``;

const List = styled.FlatList`
    padding-horizontal: 16px;
`;

const PizzaImage = styled.Image`
    width: 100%;
    height: 200px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
`; 

const Card = styled.View`
    width: 100%;
    border-radius: 4px; 
    background-color: #ffffff;
    margin-vertical: 10px;
    elevation: 6;
    shadowColor: #b5b8b1;
`;

const Name = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #000000;
    margin-bottom: 6px;
`; 

const Price = styled.Text`
    font-size: 18px;
    color: #63b521;
    font-weight: bold;
`;

const Content = styled.View`
    padding: 16px;
`;

const Actions = styled.View`
    padding-bottom: 16px;
    padding-Horizontal: 16px;
    align-items: flex-end;
`;

const AddCart = styled(Icon.Button)`
    background-color: #b5b8b1;
`;

export { 
    Container,
    ItemTouch,
    List,
    PizzaImage,
    Card,
    Name,
    Price,
    Content,
    Actions,
    AddCart
};