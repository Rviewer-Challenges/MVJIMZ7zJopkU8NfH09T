import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SelectMultiple from 'react-native-select-multiple';
import styled from 'styled-components';

const Container = styled.View`
    flex: 1;
    background-color: #ffffff;
`;

const PizzaImage = styled.Image`
    width: 100%;
    height: 200px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    margin-bottom: 16px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
`; 

const Content = styled.View`
    flex-direction: row;
    align-items: center;
    padding-horizontal: 16px;
    background-color: rgba(0, 0, 0, 0.4);

`;

const Name = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #000000;
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
    padding-horizontal: 16px;
`;

const Ingredients = styled.Text`
    color: #000000;
    font-size: 16px;
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

const AddCartButton = styled(MaterialCommunityIcons.Button)`
    background-color: #b5b8b1;
`;

const SlicesButton = styled(FontAwesome5.Button)`
    background-color: #b5b8b1;
`;

const BackButton = styled(Ionicons)`
    color: #fff;
    font-size: 34px;
    position: relative; 
`;

const BackgroundButton = styled.View`
    background-color: rgba(0, 0, 0, 0.4);
    width: 36px;
    height: 36px;
    border-radius: 18px;
    margin-left: 16px;
    margin-top: 16px;
    align-items: center;
    justify-content: center;
`;

const NextSliceButton = styled.Button`

`;

const ContentButton = styled.View`
    flex: 1;
`;

const Title = styled.Text`
    color: #000000;
    padding-horizontal: 16px;
    margin-bottom: 8px;
    font-size: 20px;
    font-weight: 500;
`;

const ContentList = styled.View`
    flex: 1;
`;

const ContentInfo = styled.View`
background-color: rgba(0, 0, 0, 0.4);
flex: 1
`; 

const List = styled(SelectMultiple).attrs(() => ({
    rowStyle: {
        justifyContent: "space-between", 
        flexDirection: "row-reverse"
    },
    checkboxSource: {
        uri: 'https://th.bing.com/th/id/R.627469623267ab42e9bf862b9e295855?rik=8SyVmB638wdGbA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_349079.png&ehk=3ISHWZ5xOEtk33JGjxnhm98Yk%2fLwqUyoIa0H9eAJTzg%3d&risl=&pid=ImgRaw&r=0',
    },
    selectedCheckboxSource: {
        uri: 'https://th.bing.com/th/id/OIP.Ls_frrVQ6UYxg2vxsO_ZsQHaHa?pid=ImgDet&rs=1',
    }

    }))`
    padding-horizontal: 16px;
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
    AddCartButton,
    SlicesButton,
    NextSliceButton,
    BackButton,
    BackgroundButton,
    ContentButton,
    Title,
    ContentList,
    ContentInfo,
    List
};