import pizzas from './../../data/pizzas';
import { useNavigation } from '@react-navigation/native';

import * as Styled from './Main.styles';

function Main() {
    const navigation = useNavigation();

    const onAddCart= () => {};

    const renderItem = ({ item }) => {    
        return (
            <Styled.Card> 
                <Styled.ItemTouch 
                    underlayColor={"#eaeaea"} 
                    onPress={() => navigation.navigate('Details', 
                        {
                            image: item.image, 
                            name: item.name, 
                            price: item.price,
                            description: item.description,
                            ingredients: item.ingredients
                        })}
                >
                    <Styled.Container>
                        <Styled.PizzaImage source={item.image} resizeMode={'cover'}/>
                        <Styled.Content>
                            <Styled.Name>{item.name}</Styled.Name>
                            <Styled.Price>{`$${item.price}`}</Styled.Price>
                        </Styled.Content>
                        <Styled.Actions>
                            <Styled.AddCart 
                                name={ true ? 'cart-plus' : 'cart-check' } 
                                onPress={onAddCart}
                            >
                                Add to Cart
                            </Styled.AddCart>
                        </Styled.Actions>
                    </Styled.Container> 
                </Styled.ItemTouch>
            </Styled.Card>
        )
    };

    return (
        <Styled.Container>
            <Styled.List
                data={pizzas}
                renderItem={renderItem}
            />
        </Styled.Container>
    );
};

export default Main;