/** @jsx React.DOM */

var React = require('react');

var CommentList = require('../../build/components/comment-list');
var CommentForm = require('../../build/components/comment-form');

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