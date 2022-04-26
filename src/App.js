import 'bootstrap/dist/css/bootstrap.min.css';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import DataProvider from './context';
import HomePage from './pages/HomePage';
import MovieDetail from './pages/MovieDetail';

function App() {
  const location = useLocation();
  return (
      <DataProvider>
        <Layout>
          <main className='flex-grow-1'>
            <AnimatePresence exitBeforeEnter>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path=":id" element={<MovieDetail />} />
              </Routes>
            </AnimatePresence>
          </main>
        </Layout>
      </DataProvider>
  );
}

export default App;
