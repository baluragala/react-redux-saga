export default (state={isFetching:false},action) =>{
  switch(action.type){
    case 'GET_REPOS':
      return Object.assign({},state,{isFetching:true});
    case 'LOAD_REPOS':
      return Object.assign({},state,{username:action.username,repos:action.repos.data})
    case 'CHANGE_USERNAME':
      return Object.assign({},state,{username:action.username})
    default:
      return state;
  }
}