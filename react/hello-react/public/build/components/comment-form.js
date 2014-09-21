/** @jsx React.DOM */

var React = require('react');

var CommentForm = React.createClass({displayName: 'CommentForm',
	render: function() {
		return (
			React.DOM.div({className: "commentForm"}, 
				"comment form"
			)
		);
	}
});

module.exports = CommentForm;