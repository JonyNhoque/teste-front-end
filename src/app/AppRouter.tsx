import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/home';

export default function AppRouter() {
    const LoadingMessage = () => <div>Loading..,</div>;
  
    return (
      <BrowserRouter>
        <Suspense fallback={<LoadingMessage />}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    );
  }