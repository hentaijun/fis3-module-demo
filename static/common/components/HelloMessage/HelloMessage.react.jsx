var React = require('react');
var ListDemo = require('/static/common/components/HelloText/listDemo');
var HelloMessage = React.createClass({
  	render: function() {
	    return (
	    	<div className="hello" style={styles.hello}>
	    		<h1 className="test" style={styles.test} onClick={this.handlerClick}>Hello, {this.props.message}</h1>
	    		<ListDemo />
	    	</div>
	    );
	},
	handlerClick:() => {
		alert('click event');
	}
});


var styles =  {
	hello:{
		fontSize: 30,
		background: "#999"
	},
	test:{
		color:"red"
	}
}

module.exports = HelloMessage;