import React from 'react'
import { connect } from 'react-redux'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'

// Import the actions required by this component
import { setSearchText, requestRobots } from '../actions'
// import { requestRobots } from '../reducers'

// This links the pieces of state that are relevant to the App (in this case) component
// and should be listened for by sending them down as props
const mapStateToProps = (state) => {
    return {
        // state . reducer . state element
        searchText: state.searchRobots.searchText,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}
// Normally the searchText: line above would read:
// searchText: state.searchRobots.searchText
// But in this case we only have one reducer (at the top level) so it is not required making 'state.searchText' work OK


// Lists the actions that will be required by App (in this case) and dispatches them
// as props
// setSearchText() is defined in actions.js - and sets event.target.value into 
// the state field of searchText, as defined by the reducer
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchTextChange: (event) => dispatch(setSearchText(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         robots: []
    //         // searchText: ''
    //     }
    // }

    componentDidMount() {
        this.props.onRequestRobots()
    }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response=> {
    //             return response.json()
    //         })
    //         .then(users => {
    //             this.setState(() => ({
    //                 robots: users
    //             }))
    //         })
    // }

    // handleSearchTextChange = (event) => {
    //     this.setState(() => ({ searchText: event.target.value}))
    // }

    render () {
        // const { robots  } = this.state
        const { searchText, onSearchTextChange, robots, isPending } = this.props
        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchText.toLowerCase())
        })
            
        if (isPending) {
            return <h3>Loading...</h3>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends - Redux version</h1>
                    <SearchBox searchChange = { onSearchTextChange } />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots = { filteredRobots } />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
        }
    }
}

// Redux standards recommend the following two parameters for connect() are named thus:
// (Which state changes should I listen to, which actions should I listen for)
export default connect(mapStateToProps, mapDispatchToProps)(App)