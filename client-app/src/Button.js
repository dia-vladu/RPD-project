import * as React from 'react';

function Button({onClick, children, value}) {
    return (
        <button type="button" onClick={onClick} value={value}>
            {children}
        </button>
    );
}

export default Button;