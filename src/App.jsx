import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import BudgetPage from './pages/BudgetPage';
import EditBudgetPage from './pages/EditBudgetPage';

function App() {
    return (
        <div className="h-full flex flex-col">
            <Header />
            <main className="p-5">
                <Routes>
                    <Route path="/" element={<BudgetPage />} />
                    <Route path="/edit-budget" element={<EditBudgetPage />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
