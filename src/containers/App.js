import React from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchText: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> {
                return response.json()
            })
            .then(users => {
                this.setState(() => ({
                    robots: users
                }))
            })
    }

    handleSearchTextChange = (event) => {
        this.setState(() => ({ searchText: event.target.value}))
    }

    render () {
        const { robots, searchText } = this.state
        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchText.toLowerCase())
        })
            
        if (!robots.length) {
            return <h3>Loading...</h3>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends - Redux version</h1>
                    <SearchBox searchChange = { this.handleSearchTextChange } />
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

export default App