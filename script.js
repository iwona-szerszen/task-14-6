const Counter = React.createClass({
	propTypes: {
		counter: React.PropTypes.object.isRequired
	},
	getDefaultProps: function() {
		console.log('(only Initialization phase) getDefaultProps method: to set defaults props if there are no specified props at the input');
	},
	getInitialState: function() {
		console.log('(only Initialization phase) getInitialState method: to set initial state of component');
		return {
			counter: 0
		};
	},
	componentWillMount: function() {
		console.log('componentWillMount method called just before rendering component');
	},
	render: function() {
		console.log('render method: to render component, you MUSTN\'T change state or props here')
		return React.createElement('div', {key: this.props.counter.id, className: 'counter'},
			React.createElement('h3', {}, `${this.props.counter.name} Counter: ${this.state.counter}`),
			React.createElement('button', {className: 'btn', onClick: this.increment}, 
				React.createElement('img', {src: 'https://png.icons8.com/ultraviolet/50/000000/plus.png'})),
			React.createElement('button', {className: 'btn', onClick: this.decrement},
				React.createElement('img', {src: 'https://png.icons8.com/ultraviolet/50/000000/minus.png'})));
	},
	componentDidMount: function() {
		console.log('componentDidMount method called after rendering component, e.g. to download data from database or DOM manipulating');
	},
	componentWillReceiveProps: function(nextProps) {
		console.log('componentWillReceiveProps method called when props would be changed, e.g. to compare this.props with nextProps and check if changes have happened');
	},
	shouldComponentUpdate: function(nextProps, nextState) {
		console.log('shouldComponentUpdate method used for optimizing app, called before rendering component to check if rendering is necessary');
		if (nextState !== this.state) {
			return true;
		}
	},
	componentWillUpdate: function(nextProps, nextState) {
		console.log('componentWillUpdate method to prepare for coming changes (setState method doesn\'t work here)');
	},
	componentDidUpdate: function() {
		console.log('componentDidUpdate method called after rendering component, e.g. to DOM manipulating');
	},
	componentWillUnmount: function() {
		console.log('componentWillUnmount method called before removing component, e.g. for cleanig task on DOM');
	},
	increment: function() {
		this.setState({
			counter: this.state.counter + 1
		});
	},
	decrement: function() {
		this.setState({
			counter: this.state.counter - 1
		});
	}
});

const counters = [
	{
		id: 1,
		name: 'First'
	},
	{
		id: 2,
		name: 'Second'
	},
	{
		id: 3,
		name: 'Third'
	},
	{
		id: 4,
		name: 'Fourth'
	}
];

const element = React.createElement('div', {}, counters.map(item => React.createElement(Counter, {key: item.id, counter: item})));

ReactDOM.render(element, document.getElementById('app'));