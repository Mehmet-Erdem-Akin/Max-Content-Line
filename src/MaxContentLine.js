import React from 'react';

function MaxContentLine(props) {
    return (
        <p style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitLineClamp: props.maxLine ? props.maxLine : 1,
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical'
        }}>
            {props.content}
        </p>
    );
}

export default MaxContentLine;
