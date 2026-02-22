import Navbar from './components/Navbar';
import Home from './pages/Home';
import SoftBackdrop from './components/SoftBackdrop';
import Footer from './components/Footer';
import LenisScroll from './components/lenis';
import { Route, Routes } from 'react-router-dom';
import Generatior from './pages/Generatior';
import Result from './pages/Result';
import Mygeneration from './pages/Mygeneration';
import Community from './pages/Community';
import Plans from './pages/Plans';
import Loading from './pages/Loading';

function App() {
	return (
		<>
			<SoftBackdrop />
			<LenisScroll />
			<Navbar />
            <Routes>

            <Route path="/" element={<Home />}/>
			<Route path="/generate" element={<Generatior />}/>
			<Route path="/result" element={<Result />}/>
			<Route path="/my-generation" element={<Mygeneration />}/>
			<Route path="community" element={<Community/>}/>
            <Route path="plans" element={< Plans />}/>
            <Route path="loading" element={<Loading/>}/>

			</Routes>
			<Footer />
		</>
	);
}
export default App;