import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import BodyComp from './components/BodyComponent';
import Footer from './components/Footer'

const AppLayout = () =>{
    return(
        <div>
            <Header />
            <BodyComp/>
            <Footer/>
        </div>
    )
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<AppLayout></AppLayout>);