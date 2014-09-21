/** @jsx React.DOM */

var React = require('react');

var CommentList = React.createClass({displayName: 'CommentList',
	render: function() {
		return (
			React.DOM.div({className: "commentList"}, 
				"comment list"
			)
		);
	}
});

module.exports = CommentList;