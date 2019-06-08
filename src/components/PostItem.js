import React from 'react';
import UserHeader from './UserHeader';

const PostItem = ({ post }) => {
    return (
        <div className="item">
            <i className="large middel alingned icon user" />
            <div className="content">
                <div className="description">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
                <strong>
                    <UserHeader userId={post.userId} />
                </strong>
            </div>
        </div>
    );
}

export default PostItem;