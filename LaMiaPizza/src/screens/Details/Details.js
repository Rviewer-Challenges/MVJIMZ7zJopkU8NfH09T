import * as Styled from './Details.styles';

function Details({ route }) {
    const { image, name, price, description, ingredients } = route.params;

    // const renderItem = ({ item }) => {    
    //     return (
    //         <Styled.Card> 
    //         </Styled.Card>
    //     )
    // };

    return (
        <Styled.Container>
             <Styled.PizzaImage source={image} resizeMode={'cover'}/>
             <Styled.Content>
                <Styled.Name>{name}</Styled.Name>
                <Styled.Price>{`$${price}`}</Styled.Price>
             </Styled.Content>
             <Styled.Description>{description}</Styled.Description>
             <Styled.Actions>
                <Styled.ChooseSlices
                    name={ true ? 'cart-plus' : 'cart-check' } 
                    onPress={()=>{}}
                >
                    4 slices
                </Styled.ChooseSlices>
                <Styled.AddCartContent>
                    <Styled.AddCart 
                        name={ true ? 'cart-plus' : 'cart-check' } 
                        onPress={()=>{}}
                    >
                        Add to Cart
                    </Styled.AddCart>
                </Styled.AddCartContent>
            </Styled.Actions>
            {/* <Styled.List
                data={pizzas}
                renderItem={renderItem}
            /> */}
        </Styled.Container>
    );
}

export default Details;