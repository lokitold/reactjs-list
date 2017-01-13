import React from 'react'
import EmpleadoList from '../empleado-list'

class EmpleadoApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = { empleados: [] }
  }

  componentWillMount() {

		//this.setState({ empleados: empleados });

    /*fetch('http://taller-angular.carlosazaustre.es/empleados')
      .then((response) => {
        return response.json()
      })
      .then((empleados) => {
        this.setState({ empleados: empleados })
      })*/
  }

  render() {
    if (this.props.listado.length > 0) {
      return (
        <div className="container-fluid">
          <EmpleadoList listado={this.props.listado} />
        </div>
      )
    } else {
      return <p className="text-center">Cargando empleados...</p>
    }
  }

}

export default EmpleadoApp
