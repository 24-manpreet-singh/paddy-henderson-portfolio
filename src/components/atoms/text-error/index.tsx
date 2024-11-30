import React, { memo } from 'react';

type props = {
    children: React.ReactNode
}
const TextError = (props: props) => {
    return (
        <React.Fragment>
            <p className="text-red-500 text-sm">
                {props.children}
            </p>
        </React.Fragment>
    );
};

export default memo(TextError);
