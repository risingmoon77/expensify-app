import moment from 'moment';
import { setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter } from "../../actions/filters";


test('should generate set START date action object', () =>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set END date action object', () =>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate sort by amount action object', () =>{
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT'});
});

test('should generate sort by Date action object', () =>{
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE'});
});

test('should generate set text filter object with value', () =>{
    const text = 'Something in';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: text
    });
   });

   test('should generate set text filter object with value with default', () =>{
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
   });