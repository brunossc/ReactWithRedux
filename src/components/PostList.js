import React from 'react';
import { connect } from 'react-redux';
import { fetchPostAndUsers } from '../actions';
import PostItem from './PostItem'

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPostAndUsers();
    }

    CreatePostList() {
        return this.props.posts.map(post => {
            return <PostItem post={post} key={post.id} />
        });
    }

    render() {
        return(<div className="ui relaxed divided list">
        {this.CreatePostList()}
        </div>
        );
    }
}

const mapStateToProps = state => {
    return { 
        posts: state.posts
    };
}

export default connect(mapStateToProps, { fetchPostAndUsers })(PostList);