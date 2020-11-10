import React from 'react';
import '../src/styles/index.css';
import '../public/static/fonts/inter/font.css';

const Layout = ({ children }) => {
    return <div className="px-20 py-10">{children}</div>;
};

export default Layout;
