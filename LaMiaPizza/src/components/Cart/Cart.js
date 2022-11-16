import * as Styled from './Cart.styles';

function Cart(props) {
 
    return (
        <Styled.Button 
            name="cart"
            onPress={props.onPress}
        />
    );
};

export default Cart;