import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import DataProvider from './context';
import HomePage from './pages/HomePage';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Layout>
          <main className='flex-grow-1'>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path=":id" element={<MovieDetail />} />
            </Routes>
          </main>
        </Layout>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
