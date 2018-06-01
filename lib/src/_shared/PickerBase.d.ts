import { MaterialUiPickersDate } from '../typings/date'
import { DateTextFieldProps } from './ModalDialog';
import { DateType } from '../constants/prop-types'

export interface PickerBaseProps {
    onChange: (date: MaterialUiPickersDate) => void;
    autoOk?: boolean;
    ampm?: boolean;
    pickerRef?: (e: Element) => void;
    value: DateType;
}