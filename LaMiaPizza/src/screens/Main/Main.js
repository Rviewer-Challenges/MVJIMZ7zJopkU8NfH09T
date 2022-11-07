import pizzas from './../../data/pizzas';

import * as Styled from './Main.styles';

function Main() {
    const onAddCart= () => {};
    
    const renderItem = ({ item }) => {
        return (
            <Styled.Card>       
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