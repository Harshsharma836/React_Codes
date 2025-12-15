function resetCounter(props){
    return function(event){
        props.setCounter(0)
    }
    
}

export default resetCounter