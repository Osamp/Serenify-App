import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface SerenifyTextProps{
    headingL?:boolean
    heading? :boolean
    bodyS?:boolean
    centre?:boolean
    bold?:boolean
    color?:string
    children?:React.ReactNode
}

const SerenifyText = ({
    headingL,
    heading,
    bodyS,
    centre =false,
    bold,
    color,
    children

}: SerenifyTextProps) => {

    let fontSize = 14
    if(headingL){
        fontSize = 40
    }
    if(heading){
        fontSize =35 
    }
    
    if(bodyS){
        fontSize =14 
    }
  return (
     
        <Text
          style={{
             fontSize,
            alignSelf: centre ? 'center' : 'auto',
            fontWeight: bold ? '800' : '400',
            color: color ? color : '#fff',
          }}
        >
          {children}
        </Text>
      );
    };
    
export default SerenifyText;

const styles = StyleSheet.create({
  container: {}
});