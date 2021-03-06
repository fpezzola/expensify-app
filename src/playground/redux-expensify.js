import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


//ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense:{
        id : uuid(),
        description,
        note,
        amount,
        createdAt
    }
}); 


//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
}); 



//EDIT_EXPENSE
const editExpense = (id,updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
}); 




//SET_TEXT_FILTER
const setTextFilter = (text='')=> ({
    type:'SET_TEXT_FILTER',
    text
});

//SORT_BY_AMOUNT
const sortByAmount = () => ({
    type:'SORT_BY',
    sortBy: 'amount'
});


//SORT_BY_DATE
const sortByAmount = () => ({
    type:'SORT_BY',
    sortBy: 'date'
});

//SET_START_DATE
const setStartDate = (date = undefined) ({
    type:'SET_START_DATE',
    date
});

//SET_END_DATE
const setEndDate = (date = undefined) ({
    type:'SET_END_DATE',
    date
})

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }else{
                    return expense;
                }
            })
        default:
            return state;  
    }
}

// Filters Reducer

const filtersReducerDefaultState = {
    text:'',
    sortBy:'date', //date or amount
    startDate:undefined,
    endDate:undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text:action.text
            }
        case 'SORT_BY':
            return {
                ...state,
                sortBy: action.sortBy
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            }
        default:
            return state;  
    }
}


const getVisibleExpenses = (expenses,{ text, sortBy, startDate, endDate}) =>{
    return expenses.filter((expense)=> {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;  // ? b first : a first
        }
        if(sortBy === 'amount'){
            return a.amount < b.createdAt ? 1 : -1; // ? b first : a first
        }
    })
}


const store = createStore(
    combineReducers({
        expenses:expensesReducer,
        filters: filtersReducer
    }
))


store.subscribe(()=>{
    console.log(store.getState());
})

const expenseOne = store.dispatch(addExpense({description:'Rent', amount:100}));
const expenseTwo = store.dispatch(addExpense({description:'Coffee', amount:300}));

store.dispatch(removeExpense({id:expenseOne.expense.id}));

sotre.dispatch(editExpense(expenseTwo.expense.id,{amount:500}));

const demoState = {
    expenses:[{
        id: 'sdsadsdsad',
        description: 'January Rent',
        note: 'This was de final payment for the address',
        amount : 54500, //penies,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount', //date or amount
        startDate:undefined,
        endDate:undefined
    }

}