import React from 'react'

import Header from './Header'
import Action from './Action'
import Options from './Options'
import AddOption from './AddOption'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
    //  New class properties -> insterd of constructr
    state = {
        options: [],
        selectedOption: undefined
    }
    // Function passed as props
    // Event handlerrs
    handleDeleteSelectedOption = () => {
        this.setState(() => {
            return {
                selectedOption: undefined
            }
        })
    }
    handelDeleteOptions = () => {
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option
            })
        }))
    }
    handlePick = () => {
        const randomOption = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomOption]
        this.setState(() => {
            return {
                selectedOption: option
            }
        })
    }
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option is already exists'
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        })
    }
    // Component lifecycle below
    componentDidMount() {
        // When fetching the data
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if (options) {
                this.setState(() => {
                    return {
                        options: options
                    }
                })
            }
        } catch (e) {
            // Do nothing at all
            console.log('Input error wrong');
        }
    }
    componentDidUpdate(prevProps, prevState) {
        // When the state is changed - save the data
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer'

        return (
            <div>
                <Header
                    subtitle={subtitle}
                />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handelDeleteOptions={this.handelDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleDeleteSelectedOption={this.handleDeleteSelectedOption}
                />
            </div>
        )
    }
}