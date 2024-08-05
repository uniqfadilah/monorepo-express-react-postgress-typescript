import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './lib/layout';
import Routings from './lib/router/Routings';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Routings />
        </Layout>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
