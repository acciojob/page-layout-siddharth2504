import React from "react";

const PageLayout = ({header, children, footer}) =>{
    return(
        <div>
            {header}
            <main>{children}</main>
            {footer}
        </div>
    )
}

export default PageLayout;