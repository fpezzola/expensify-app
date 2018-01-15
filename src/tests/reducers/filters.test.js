import moment from 'moment'
import filterReducers from '../../reducers/filters';

test('should setup default filter values',() =>{
    const state = filterReducers(undefined,{tyep: '@@INIT' });
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filterReducers(undefined,{type: 'SORT_BY',sortBy:'amount' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
            text:'',
            sortBy:'amount',
            startDate: moment().startOf('month'),
            endDate: moment().endOf('month')
    }

    const action = { type: 'SORT_BY', sortBy:'date'}

    const state = filterReducers(currentState,action);
    expect(state.sortBy).toBe('date');
});


test('should set text to filters', () => {
    const currentState = {
            text:'currentText',
            sortBy:'amount',
            startDate: moment().startOf('month'),
            endDate: moment().endOf('month')
    }

    const action = { type: 'SET_TEXT_FILTER', text:'newText'}

    const state = filterReducers(currentState,action);
    expect(state.text).toBe('newText');
});

test('should set start date filter', () => {

    const action = { type: 'SET_START_DATE', date:moment(1)};

    const state = filterReducers(undefined,action);
    expect(state.startDate).toEqual(moment(1));
});

test('should set end date filter', () => {

    const action = { type: 'SET_END_DATE', date:moment(1)};

    const state = filterReducers(undefined,action);
    expect(state.endDate).toEqual(moment(1));
});