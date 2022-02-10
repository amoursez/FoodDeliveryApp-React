import React from 'react';
import AddComments from './AddComments';
import CommentsList from './CommentsList';
import CommentList from './CommentsList';


const Comments = () => {

    return (
        <div style={{backgroundColor:'#fee8d9'}}>
           <AddComments/>
           <CommentsList/>
        </div>
    );
};

export default Comments;