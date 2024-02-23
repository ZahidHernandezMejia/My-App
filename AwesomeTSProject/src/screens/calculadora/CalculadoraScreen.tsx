import React, { useState } from 'react'
import { StatusBar, Text, View } from 'react-native'
import { styles } from '../../theme/appTheme'
import { BotonCalc } from '../../components/BotonCalc';

const a =()=>{
    console.log("sdaf");
} ;
export const CalculadoraScreen = () => {
    const [numero, setNumero] = useState('100');

    const [numeroAnterior, setNumeroAnterior] = useState('0');
    
    const limpiar =()=>{
        setNumero('0');
    }

    const armarNumero=(numeroTexto:string)=>{
        setNumero(numero+numeroTexto)
    }
    return (
        <View style={styles.calculadoraContainer}>
            <StatusBar
                backgroundColor={'black'}
                barStyle={'light-content'}
            />
            <Text style={styles.resultadoPeque}>{numeroAnterior}</Text>
            <Text style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit

            >{numero} </Text>
            <View style={styles.fila}>
                <BotonCalc text="C" color="#ADB8B8" action={limpiar} />
                <BotonCalc text="+/-" color="#ADB8B8" action={limpiar}/>
                <BotonCalc text="del" color="#ADB8B8" action={limpiar}/>
                <BotonCalc text="/" color="#FF9427" action={limpiar}/>
            </View>
            <View style={styles.fila}>
                <BotonCalc text="7" action={armarNumero} />
                <BotonCalc text="8" action={armarNumero} />
                <BotonCalc text="9" action={armarNumero} />
                <BotonCalc text="X" color="#FF9427" action={limpiar}/>
            </View>
            <View style={styles.fila}>
                <BotonCalc text="4" action={armarNumero} />
                <BotonCalc text="5" action={armarNumero} />  
                <BotonCalc text="6" action={armarNumero} />  
                <BotonCalc text="-" color="#FF9427" action={limpiar}/>
            </View>
            <View style={styles.fila}>
                <BotonCalc text="1" action={armarNumero} />
                <BotonCalc text="2" action={armarNumero} />
                <BotonCalc text="3" action={armarNumero} />
                <BotonCalc text="+" color="#FF9427" action={limpiar}/>
            </View>
            <View style={styles.fila}>
                <BotonCalc text="0" ancho action={armarNumero} />
                <BotonCalc text="." action={limpiar}/>
                <BotonCalc text="=" color="#FF9427" action={limpiar}/>
            </View>
        </View>
    )
}
