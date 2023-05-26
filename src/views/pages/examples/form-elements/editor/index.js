// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Demo Components
import EditorControlled from './EditorControlled'
import EditorUncontrolled from './EditorUncontrolled'

// ** Styles
import '@styles/react/libs/editor/editor.scss'

const Editor = () => {
  return (
    <Fragment>

      <Row>
        <Col sm={12}>
          <EditorUncontrolled />
        </Col>
        <Col sm={12}>
          <EditorControlled />
        </Col>
      </Row>
    </Fragment>
  )
}

export default Editor
