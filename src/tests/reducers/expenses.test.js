import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should setup default state',() =>{
    const state = expensesReducer(undefined,{tyep: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id',() =>{
    const action = {
        type:'REMOVE_EXPENSE',
        id:expenses[1].id
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]]);
}); 

test('should not remove expense if id not found',() =>{
    const action = {
        type:'REMOVE_EXPENSE',
        id:-1
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
}); 

test('should add an expense ',() =>{
    const expense = { 
        id:'200',
        description:'New one',
        note:'',
        amount: 10000,
        createdAt:moment(0)
    }
    const action = {
        type:'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses,action);
    expect(state[state.length-1]).toEqual(expense);
}); 


test('should edit an expense ',() =>{
    const updates = {
        note:'Adding a note'
    }
    const action = {
        type:'EDIT_EXPENSE',
        id:expenses[0].id,
        updates
    }
    const state = expensesReducer(expenses,action);
    expect(state[0].note).toBe(updates.note);
}); 

test('should NOT edit an expense if id not found',() =>{
    const updates = {
        note:'Adding a note'
    }
    const action = {
        type:'EDIT_EXPENSE',
        id:-1,
        updates
    }
    const state = expensesReducer(expenses,action);
    expect(state[0].note).toBe(expenses[0].note);
}); 