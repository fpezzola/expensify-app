import moment from 'moment';
import {setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount} from '../../actions/filters';


test('should generate set start date action object',()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        date: moment(0)
    })
});


test('should generate set end date action object',()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        date: moment(0)
    })
});

test('should generate sort by date action object',()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type:'SORT_BY',
        sortBy: 'date'
    })
});

test('should generate sort by amount action object',()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY',
        sortBy: 'amount'
    })
});

test('should generate set text filter action object',()=>{
    const action = setTextFilter("Rent");
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:'Rent'
    })
});

test('should generate default set text filter action object',()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    })
});