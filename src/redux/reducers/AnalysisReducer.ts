// This Reducer is specfically used for storing the Analysis Information for the specific turn.

interface AnalysisItems{
    reason:string,
    steps:string,
    llm_label:string,
    context_short:string
}
interface AnalysisTypes{
    collection:{[key:string]:AnalysisItems},
    analysis_turn_rank_number:string | null
}

interface actionTypes{
    type:string,
    payload:{
        reason:string,
        turn_rank:string,
        steps:string,
        llm_label:string,
        context_short:string
    }
}

let initialState:AnalysisTypes={collection:{}, analysis_turn_rank_number:null}

const AnalysisReducer=(state:AnalysisTypes=initialState,action:actionTypes)=>{

    switch(action.type){
        case 'add analysis information':
            state={...state,collection:{...state.collection,[String(action.payload.turn_rank)]:{reason:action.payload.reason,steps:action.payload.steps,llm_label:action.payload.llm_label,context_short:action.payload.context_short}}}
            return state
        case 'current turn_rank':
            console.log(state)
            state={...state,analysis_turn_rank_number:String(action.payload)}
            return state
        default:
            return state;
    }
}

export default AnalysisReducer