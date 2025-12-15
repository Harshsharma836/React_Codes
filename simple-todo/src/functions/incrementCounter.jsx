function incrementCounter(props){
    return function(event){
        alert("Button Clicked")
        props.setCounter(props.counter + 1)
    }
}

export default incrementCounter