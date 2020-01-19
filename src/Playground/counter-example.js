
class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        // component default state declaration
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        const json = localStorage.getItem('count')
        const count = parseInt(json, 10)
        if(!isNaN(count)) {
            this.setState(() => {
                return {
                    count: count
                }
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count)
        }
    }

    componentWillUnmount() {

    }

    handleAddOne() {
        // set the new state by getting the details from the previous state and update the same
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}> +1 </button>
                <button onClick={this.handleMinusOne}> -1 </button>
                <button onClick={this.handleReset}> reset </button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'))

// Component class
// Method on the component class
// Component state

// All the obove will be implemented now


// let count = 0

// const addOne = () => {
//     count++
//     renderCounterApp()
// }

// const subOne = () => {
//     count--
//     renderCounterApp()
// }

// const reset = () => {
//     count = 0
//     renderCounterApp()
// }

// var appRoute = document.getElementById('app')

// ReactDOM.render(template, appRoute)

// const renderCounterApp = () => {

//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={subOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     )

//     ReactDOM.render(templateTwo, appRoute3)

// }

// renderCounterApp()