/** @jsx React.DOM */

var React = require('react');

var CommentList = require('./comment-list.jsx');
var CommentForm = require('./comment-form.jsx');

var CommentBox = React.createClass({
	render: function() {
		return (
			<div className="commentBox">
				<CommentList />
				<CommentForm />
			</div>
		);
	}
});

React.renderComponent(<CommentBox/>, document.getElementById('content'));