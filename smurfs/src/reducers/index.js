/*
  Be sure to import in all of the action types from `../actions`
*/
import { GET_SMURFS, ADD_SMURF } from '../actions'
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_SMURFS:
      console.log('getting smurfs!')
      return {
        ...state,
      }
      case ADD_SMURF:
        console.log('smurf added!')
        return {
          ...state,
        }
    default:
      return state;
  }

}

export default reducer;