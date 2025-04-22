import React from "react";

const PageLayout = (props) =>{
    return(
        <div>
            {props.header}
            <main>{props.children}</main>
            {props.footer}
        </div>
    )
}

export default PageLayout;