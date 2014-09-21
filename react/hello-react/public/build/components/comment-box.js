/** @jsx React.DOM */

var React = require('react');

var CommentList = require('../../build/components/comment-list');
var CommentForm = require('../../build/components/comment-form');

var CommentBox = React.createClass({displayName: 'CommentBox',
	render: function() {
		return (
			React.DOM.div({className: "commentBox"}, 
				CommentList(null), 
				CommentForm(null)
			)
		);
	}
});

React.renderComponent(CommentBox(null), document.getElementById('content'));