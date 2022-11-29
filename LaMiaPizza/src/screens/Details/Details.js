import { useState, useEffect } from 'react';
import { ScrollView, ToastAndroid } from "react-native";
import { useNavigation } from '@react-navigation/native';

import * as Styled from './Details.styles';

function Details({ route }) {
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const { image, name, price, description, ingredients } = route.params;
    const totalIngredients = ingredients.length;
    //const totalPrice = selectedIngredients.length  

    // falta el total de precio al eliminar ingredientes
    // if(selectedIngredients.length  !== ingredients.length ) {
    //     if (totalPrice -1) {
    //         return result = price - 50
    //     }
    // }
    const navigation = useNavigation();

    useEffect(()=> {
        setSelectedIngredients(message)
    },[])

    const onMaxSelect = () => {
        switch (totalIngredients) {
            case 3:
                return 1
                break;
            case 2 || 1:
                return 0
                break;
            default:
                return 2
                break;
        }
    }

    const message = () => {
        switch (totalIngredients) {
            case 3:
                ToastAndroid.show("Solo puedes eliminar 1 ingrediente", ToastAndroid.SHORT);
                break;
            case 2 || 1:
                ToastAndroid.show("No puedes eliminar ningun ingrediente", ToastAndroid.SHORT);
                break;
            default:
                ToastAndroid.show("Solo puedes eliminar 2 ingredientes", ToastAndroid.SHORT);
                break;
        }
    };

    const onSelectSlices = () => {


    };

    const onNextSlice = () => {


    };

    const renderLabel = (label) => {
        return (
            <Styled.Ingredients>{label}</Styled.Ingredients>
        )
    };

    return (
        <Styled.Container>
            <Styled.ContentButton>
                <Styled.PizzaImage source={image} resizeMode={'cover'}/>
                <Styled.BackgroundButton>
                    <Styled.BackButton
                        name= {'chevron-back-outline'}
                        onPress= {()=> {navigation.goBack()}}
                    />
                </Styled.BackgroundButton>
            </Styled.ContentButton>
            <Styled.ContentInfo>
                <Styled.Content>
                    <Styled.Name>{name}</Styled.Name>
                    <Styled.Price>{`$${price}`}</Styled.Price>
                </Styled.Content>
            <Styled.Description>{description}</Styled.Description>
            </Styled.ContentInfo>
            <Styled.Actions>
                <Styled.SlicesButton
                    name= {'pizza-slice'}
                    onPress={onSelectSlices}
                >
                    4 slices
                </Styled.SlicesButton>
                <Styled.AddCartContent>
                    <Styled.AddCartButton
                        name={ true ? 'cart-plus' : 'cart-check' } 
                        onPress={()=>{}}
                    >
                        Add to Cart
                    </Styled.AddCartButton> 
                </Styled.AddCartContent>
            </Styled.Actions>
            {/*  remplazar title por slice 1 a 4 cuando de clic en 4 slices */}
            <Styled.Title>{'Ingredients'}</Styled.Title> 
            <Styled.ContentList>
                <Styled.List
                    items={ingredients}
                    renderLabel={renderLabel}
                    selectedItems={selectedIngredients}
                    onSelectionsChange={setSelectedIngredients}
                    maxSelect={onMaxSelect()}
                />
            </Styled.ContentList>
            {/*  remplazar title por slice 1 a 4 cuando de clic en 4 slices */}
            {/* <Styled.NextSliceButton
                 title={`slice ${1}`} 
                 color={"#841584"}
                 onPress={onNextSlice}
            /> */}
        </Styled.Container>
    );
}

export default Details;