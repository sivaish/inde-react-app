class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: prevState.visibility = !prevState.visibility
            }
        })

    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>This is the hidden message</p>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))


// let visibility = false

// const getDtls = () => {

//     visibility = !visibility
//     renderVisibility()
// }

// const renderVisibility = () => {
//     let vTemp = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={getDtls}>
//                 {visibility ? 'Hide details' : 'Show Details'}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>Hey. These are the hidden details</p>
//                 </div>
//             )}
//         </div>
//     )

//     ReactDOM.render(vTemp, appRoute)

// }

// var appRoute = document.getElementById('app')

// renderVisibility()

