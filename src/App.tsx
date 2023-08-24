import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact/Contact';
import ChartsMaps from './pages/ChartsAndMaps/ChartsMaps';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { store } from './state/store';
import CreateContact from './pages/Contact/CreateContact/CreateContact';
import EditContact from './pages/Contact/EditContact/EditContact';
import Sidebar from './components/Sidebar';

function App() {
  const queryClient = new QueryClient();


  return (
    <div className="grid grid-cols-[20%,80%]">
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Sidebar />
            <Routes>
              <Route path='/' element={<h1 className='p-2 flex items-center font-bold text-2xl'>Welcome to Contact Mangement App</h1>}/>
              <Route path='/contacts' >
                <Route path='' element={<Contact />} />
                <Route path='create' element={<CreateContact />} />
                <Route path='edit/:id' element={<EditContact />} />
              </Route>
              <Route path='/charts-maps' element={<ChartsMaps />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </Provider>
    </div>
  );
}

export default App;
