console.log('app.js is running')

var appObject = {
    title: 'Indecision App',
    subtitle: 'Used to demonstrate the react application',
    options: []
}

const onFormsubmit = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value

    if (option) {
        appObject.options.push(option)
        e.target.elements.option.value = ''
        renderApp()
        console.log(appObject.options);
    }
}

const onRemoveAll = () => {
    appObject.options = []
    renderApp()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * appObject.options.length)
    const option = appObject.options[randomNum]
    alert(option)
}

const renderApp = () => {
    var template = (
        <div>
            <h1>{appObject.title}</h1>
            {appObject.subtitle && <p>{appObject.subtitle}</p>}
            <p>{appObject.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
            {

            }
            <button disabled={appObject.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    appObject.options.map((option) => {
                        return <li key={option}>{option}</li>

                    })
                }
            </ol>
            <form onSubmit={onFormsubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    )

    ReactDOM.render(template, appRoute)

}

var appRoute = document.getElementById('app')

renderApp()
