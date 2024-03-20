import React from 'react'
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
    return (
        <Helmet>
           <title>{title}</title> 
           <meta name='description' content={description} />
           <meta name='keyword' content={keywords} />
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Welcome to AgroConnectHub',
    description: 'Agricultural platform by AgroConnectHub, fostering collaboration with farmers, supported by sustainable practices ',
    keywords: 'farmers, AgroConnectHub, agriculture, sustainable farming'
}

export default Meta
