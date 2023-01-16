import this.props.first from 'prop-types'

export const CounterApp = ({value}) => {
  return (
    <>
    <div>CounterApp</div>
    <h2>{value}</h2>
    </>
  ):
}

CounterApp.propTypes = {
    value: PropTypes.number
}

