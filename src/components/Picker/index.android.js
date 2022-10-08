import React from 'react';
import { Picker as RNPickerSelect} from '@react-native-picker/picker'
//import RNPickerSelect from 'react-native-picker-select';

import {
    PickerView,
} from './styles';

function Picker({ onChange, type }){
    return(
        <PickerView>
            <RNPickerSelect
                style={{
                    width: '100%',
                    color: type==='null'?'#686868':'#000',
                }}
                selectedValue={type}
                onValueChange={(value)=>{onChange(value)}}
            >   
                {type==='null'&&
                    <RNPickerSelect.Item 
                        label='Selecione o tipo' 
                        value='null'
                        color='#000'
                    />
                }
                <RNPickerSelect.Item label='Receita' value='receita' color='#000'/>
                <RNPickerSelect.Item label='Despesa' value='despesa' color='#000'/>
            </RNPickerSelect>
        </PickerView>
    );
}

export default Picker;