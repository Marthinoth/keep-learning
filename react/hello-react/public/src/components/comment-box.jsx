/** @jsx React.DOM */

var React = require('react');

var CommentList = require('./comment-list.jsx');
var CommentForm = require('./comment-form.jsx');

var CommentBox = React.createClass({
	loadCommentsFromServer: function() {
    	$.ajax({
    		url: this.props.url,
    		dataType: 'json',
    		success: function(data) {
    			this.setState({data: data});
    		}.bind(this)
    	});
	},
    handleCommentSubmit: function(comment) {
    $.ajax({
          url: this.props.url,
          contentType: "application/json",
          dataType: 'json',
          type: 'POST',
          data: comment,
          success: function(data) {
            data.push(comment);
            this.setState({data: data});
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(xhr, err.toString());
          }.bind(this)
        });
    },
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
    	this.loadCommentsFromServer();
    },
	render: function() {
		return (
			<div className="commentBox">
				<CommentList data={this.state.data}/>
				<CommentForm onCommentSubmit={this.handleCommentSubmit} />
			</div>
		);
	}
});

React.renderComponent(
	<CommentBox url="/api/comments/" pollInterval={2000} />,
	document.getElementById('content')
);