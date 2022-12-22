import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props) {
    const { children } = props;
    return (
        <div className="flex flex-col min-hscreen relative bg-slate-900">
            <Header />
            <main className="flex-1 bg-nephritis-green flex flex-col p-4">
                {children}
            </main>
            <Footer />
        </div>
    );
}