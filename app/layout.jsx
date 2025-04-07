"use client";
import "./globals.css";
import Nav from "../Components/Mens/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import { Provider } from 'react-redux';
import store from '../store/store'; // تأكد من صحة المسار

export default function RootLayout({ children }) {
    return (
        <Provider store={store}>
            <html lang="en">
                <body>
                    <Nav />
                    {children}
                    <Footer />
                </body>
            </html>
        </Provider>
    );
}