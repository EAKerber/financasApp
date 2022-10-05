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
                }}
                selectedValue={type}
                onValueChange={(value)=>{onChange(value)}}
            >
                <RNPickerSelect.Item label='Receita' value='receita'/>
                <RNPickerSelect.Item label='Despesa' value='despesa'/>
            </RNPickerSelect>
        </PickerView>
    );
}

export default Picker;