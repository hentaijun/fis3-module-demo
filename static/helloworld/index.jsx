//引入React和HelloMessage模块
var React = require('react');
var HelloMessage = require('/static/common/components/HelloMessage/HelloMessage.react');
var ListDemo = require('/static/common/components/HelloText/listDemo');
React.render(
	<HelloMessage message="React Hello World11" >
		<ListDemo></ListDemo>
	</HelloMessage>, document.getElementById('helloApp')
);