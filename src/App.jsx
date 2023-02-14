import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import BudgetPage from './pages/BudgetPage';
import EditBudgetPage from './pages/EditBudgetPage';

function App() {
    return (
        <div className="h-full flex flex-col">
            <Header />
            <Routes>
                <Route path="/" element={<BudgetPage />} />
                <Route path="/edit-budget" element={<EditBudgetPage />} />
            </Routes>
        </div>
    );
}

export default App;
