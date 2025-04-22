import React from "react";
import PageLayout from "./PageLayout";

const Page = () =>{
    return(
        <div>
            <PageLayout
                header={<h1>Welcome to my website</h1>}
                footer={<h3>&copy 2023 My Website.All rights reserved.</h3>}
            >
                <p>This is content of my website.</p>
            </PageLayout>
        </div>
    )
}

export default Page;