import {HashRouter, Routes, Route} from 'react-router-dom';
import {BlogPage} from './BlogPage';
import {BlogPost} from './BlogPost';
import {HomePage} from './HomePage';
import {LoginPage} from './LoginPage';
import {LogoutPage} from './LogoutPage';
import {Menu} from './Menu';
import {ProfilePage} from './ProfilePage';
import {AuthProvider, AuthRoute} from './auth';

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
						<Route
							path='/login'
							element={
								<AuthRoute type='public'>
									<LoginPage />
								</AuthRoute>
							}
						/>
						<Route
							path='/logout'
							element={
								<AuthRoute type='private'>
									<LogoutPage />
								</AuthRoute>
							}
						/>
						<Route
							path='/profile'
							element={
								<AuthRoute type='private'>
									<ProfilePage />
								</AuthRoute>
							}
						/>
						<Route path='*' element={<p>Not Found</p>} />
					</Routes>
				</AuthProvider>
			</HashRouter>
		</>
	);
}

export default App;
