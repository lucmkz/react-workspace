import './App.css';
import React, { PureComponent }from 'react';
import { connect } from 'react-redux'

import 'milligram'

class App extends PureComponent {
  render () {
   return(
    <h1>Workspace</h1>
    )
   }
}

//

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
