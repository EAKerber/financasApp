import React from 'react';
import { Platform } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import { 
    CalendarContainer, DismissButton,
    DismissContainer, DismissText,
} from './styles';

let dateNow = new Date();

function DatePicker({onClose, onChange}){
    
    return(
        <CalendarContainer>
            {Platform.OS==='ios'&&(
                <DismissContainer>
                    <DismissButton
                        onPress={onClose}
                    >
                        <DismissText>Fechar</DismissText>
                    </DismissButton>
                </DismissContainer>
            )}
            <DateTimePicker
                value={dateNow}
                mode='date'
                display='default'
                onChange={(e, d)=>{
                    const currentDate = d || dateNow;
                    dateNow = currentDate;
                    onChange(currentDate);
                }}
                style={{backgroundColor:'#151515'}}
            />
        </CalendarContainer>
    );
}

export default DatePicker;