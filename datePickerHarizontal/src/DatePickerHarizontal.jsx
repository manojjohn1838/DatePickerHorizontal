import { createElement } from "react";
import "./ui/DatePickerHarizontal.css";
import ReactHorizontalDatePicker from './components/ReactHorizontalDatePicker'
import './components/ReactHorizontalDatePickerFinal.css'


export function DatePickerHarizontal(props) {
    const { dateAttribute } = props;
    const { days } = props;
    const { scrollable } = props;
    const { onClickAction } = props;
    // const {Editability}=props;
    const onSelectedDay = (d) => {
        //window.alert({Editability});
        dateAttribute.setValue(new Date(d));
    }
    const onClick = () => {
        if (onClickAction && onClickAction.canExecute) {
            onClickAction.execute();
        }
    }


    return (

        <ReactHorizontalDatePicker
            selectedDay={onSelectedDay}
            enableScroll={scrollable}
            enableDays={days}
            enableDaysBefore={1}
            onClick={onClick}
        //disabled={{Editability}===true?true:false}
        />

    );
}
