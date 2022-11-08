import {HashRouter, Routes, Route} from 'react-router-dom';
import {BlogPage} from './BlogPage';
import {BlogPost} from './BlogPost';
import {HomePage} from './HomePage';
import {LoginPage} from './LoginPage';
import {LogoutPage} from './LogoutPage';
import {Menu} from './Menu';
import {ProfilePage} from './ProfilePage';
import {AuthProvider} from './auth';

function App() {
	return (
		<>
			<HashRouter>
				<AuthProvider>
					<Menu />
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/blog' element={<BlogPage />}>
							<Route path=':slug' element={<BlogPost />} />
						</Route>
						<Route path='/login' element={<LoginPage />} />
						<Route path='/logout' element={<LogoutPage />} />
						<Route path='/profile' element={<ProfilePage />} />
						<Route path='*' element={<p>Not Found</p>} />
					</Routes>
				</AuthProvider>
			</HashRouter>
		</>
	);
}

export default App;
