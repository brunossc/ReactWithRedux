import React from 'react';
import { fetchUser } from '../actions';
import { connect } from 'react-redux';

class UserHeader extends React.Component
{
    componentDidMount() {
    }

    render()
    {
        const { user } = this.props;

        if (!user)
        {
            return (<div>Loading...</div>);;
        }

        return (<div>{user.name}</div>);
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId)};
}

export default connect(mapStateToProps)(UserHeader);