import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import BudgetPage from './pages/BudgetPage';
import EditBudgetPage from './pages/EditBudgetPage';
import { useGetBalanceQuery } from './redux/reducers/balanceReducer';

function App() {
    const { data: balance } = useGetBalanceQuery();

    return (
        <div className="h-full flex flex-col">
            <Header balance={balance} />
            <main className="p-5">
                <Routes>
                    <Route path="/" element={<BudgetPage balance={balance} />} />
                    <Route path="/edit-budget" element={<EditBudgetPage />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
