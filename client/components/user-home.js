import React from 'react'
import {connect} from 'react-redux'
import {Table, Button} from 'semantic-ui-react'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {user} = props
  console.log('user??????? ', user)

  return (
    <div>
      <h3>Portfolio</h3>
      <Table inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Ticker</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell>Value</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {/* {user.portfolio ? (
          <>
            {user.portfolio.map(currUser => {
              return (
                <Table.Body key={currUser.id}>
                  <Table.Row>
                    <Table.Cell>{currUser.id}</Table.Cell>
                    <Table.Cell>{currUser.name}</Table.Cell>
                    <Table.Cell>{currUser.email}</Table.Cell>
                    <Table.Cell>{currUser.company}</Table.Cell>
                    <Table.Cell>{currUser.access}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              )
            })}
          </>
        ) : null} */}
      </Table>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user
  }
}

export default connect(mapState)(UserHome)
