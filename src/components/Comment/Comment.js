import React from 'react';

const Comment = (props) => {
    const {name, email} = props.comment;
    return (
        <div>
            {name}: {email}
        </div>
    );
};

export default Comment;