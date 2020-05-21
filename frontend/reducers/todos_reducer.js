import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';


const initialState = {
    1: {
        id: 1,
        title: "wash car",
        body: "with soap",
        done: false
    },
    2: {
        id: 2,
        title: "wash dog",
        body: "with shampoo",
        done: true
    }
};

const todosReducer = (state = initialState, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_TODOS:
            const newState = {};
            action.todos.forEach(todo => {
                let { id, title, body, done } = todo;
                newState[id] = {
                    id,
                    title,
                    body,
                    done
                }
            })
            console.log(newState)
            return newState;

        case RECEIVE_TODO:
            const {id, title, body, done} = action.todo;
            const newEntry = {
               [id]: {
                   id,
                   title,
                   body,
                   done
               }
            }
            return newEntry;

        default:
            return state;
    }
};

export default todosReducer;