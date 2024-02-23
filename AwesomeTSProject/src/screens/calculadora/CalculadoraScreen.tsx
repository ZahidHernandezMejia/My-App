import React, { useRef, useState } from 'react'
import { StatusBar, Text, View } from 'react-native'
import { styles } from '../../theme/appTheme'
import { BotonCalc } from '../../components/BotonCalc';

// Operadores 

enum Operadores {
    sumar,restar,multiplicar,dividir
}



// No necesito que el cambio de esa constante no impacta el aspecto visual para no renderizar de nuevo el componente  
export const CalculadoraScreen = () => {
    const [numero, setNumero] = useState('100');

    const [numeroAnterior, setNumeroAnterior] = useState('0');

    const ultimaOperacion = useRef<Operadores>()


    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
    }

    // NUMERO TEXTO ES EL QUE TOCA EL USUARIO 
    // pone el numero en la calc 
    const armarNumero = (numeroTexto: string) => {
        // No agregar doble punto 
        if (numero.includes('.') && numeroTexto === '.') return;

        // SI EL NUMERO EMPIEZA EN 0 O -0
        if (numero.startsWith('0') || numero.startsWith('-0')) {
            // Primer punto decimal 
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto);
                // Evaluar si es otro 0 y hay otro punto  
            }else if(numeroTexto==='0' && numero.includes('.')){
                setNumero(numero + numeroTexto);
                // Evaluar si es diferente de 0 y no tiene un }
            }else if (numeroTexto!=='0' && !numero.includes('.')){
                setNumero(numeroTexto);
                // EVITAR EL 0000.0000
            }else if(numeroTexto==='0' && !numero.includes('.')){} 
        } else {

            setNumero(numero + numeroTexto)
        }
    }
    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''));
        }
        else {
            setNumero('-' + numero);
        }
    }

    const btnDelete=()=>{
        let negativo ='';
        let numeroTemp= numero;
        if(numero.includes('-')){
            negativo='-';
            numeroTemp= numero.substring(1);
        }
        if (numeroTemp.length>1){
            setNumero(negativo+numeroTemp.slice(0,-1))
        }else{
            setNumero('0');
        }
    }

    const cambiarNumPorAnterior=()=>{
        if(numero.endsWith('.')){
            setNumero(numero.slice(0,-1));
        }
        else{
            setNumeroAnterior(numero);
        }
        setNumero('0');
    }

    const btnDividir = ()=>{
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.dividir;

    }
    const btnMultiplicar = ()=>{
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar;

    }
    const btnSumar = ()=>{
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.sumar;

    }
    const btnRestar = ()=>{
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.restar;

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
                <BotonCalc text="+/-" color="#ADB8B8" action={positivoNegativo} />
                <BotonCalc text="del" color="#ADB8B8" action={btnDelete} />
                <BotonCalc text="/" color="#FF9427" action={btnDividir} />
            </View>
            <View style={styles.fila}>
                <BotonCalc text="7" action={armarNumero} />
                <BotonCalc text="8" action={armarNumero} />
                <BotonCalc text="9" action={armarNumero} />
                <BotonCalc text="X" color="#FF9427" action={btnMultiplicar} />
            </View>
            <View style={styles.fila}>
                <BotonCalc text="4" action={armarNumero} />
                <BotonCalc text="5" action={armarNumero} />
                <BotonCalc text="6" action={armarNumero} />
                <BotonCalc text="-" color="#FF9427" action={limpiar} />
            </View>
            <View style={styles.fila}>
                <BotonCalc text="1" action={armarNumero} />
                <BotonCalc text="2" action={armarNumero} />
                <BotonCalc text="3" action={armarNumero} />
                <BotonCalc text="+" color="#FF9427" action={btnSumar} />
            </View>
            <View style={styles.fila}>
                <BotonCalc text="0" ancho action={armarNumero} />
                <BotonCalc text="." action={armarNumero} />
                <BotonCalc text="=" color="#FF9427" action={btnRestar} />
            </View>
        </View>
    )
}
