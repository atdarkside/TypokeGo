import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'


function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export const container = connect(
  mapStateToProps,
  mapDispatchToProps
)
