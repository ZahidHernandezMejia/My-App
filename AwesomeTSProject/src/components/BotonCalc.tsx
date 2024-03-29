import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'
interface Props {
    text: string;
    color?: string;
    ancho?: boolean;
    action: (numeroTexto:string)=>void;
    // cambiar:string;
    // borrar:string;
    // dividir:string;
}


export const BotonCalc = ({ text, color = '#2D2D2D', ancho = false ,action}: Props) => {

    return (
        <TouchableOpacity
        onPress={()=>action(text)}
        
        >
            <View >
                <View style={{
                    ...styles.boton,
                    backgroundColor: color
                    , width: (ancho) ? 180 : 80
                }}>

                    <Text
                        // style={styles.botonTexto}
                        style={{
                            ...styles.botonTexto,
                            color: (color === '#ADB8B8') ? 'black' : 'white'

                        }}
                    >{text}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
