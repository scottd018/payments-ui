import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Navigation from './Navigation';

import Payments from './components/Payments';
import Categories from './components/Categories';

function Main() {
    return (
        <div className="main">
            <Navigation/>
            <Container className="window">
                <Router>
                    <Routes>
                        <Route exact path='/' element={<Payments />} />
                        <Route path="/payments" element={<Payments />} />
                        <Route path="/categories" element={<Categories />} />
                    </Routes>
                </Router>
            </Container>
        </div>
    );
}

export default Main;
