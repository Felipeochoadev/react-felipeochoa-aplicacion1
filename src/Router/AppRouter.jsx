import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import MainLayout from '../Shared/MainLayout/MainLayout';

const SiteIndexPage = lazy(() => import('../Pages/SiteIndexPage/SiteIndexPage'));
const SplashPage = lazy(() => import('../Pages/SplashPage/SplashPage'));
const AuthPage = lazy(() => import('../Pages/AuthPage/AuthPage'));
const DashboardPage = lazy(() => import('../Pages/DashboardPage/DashboardPage'));
const ProfilePage = lazy(() => import('../Pages/ProfilePage/ProfilePage'));
const SearchPage = lazy(() => import('../Pages/SearchPage/SearchPage'));
const CoursesPage = lazy(() => import('../Pages/CoursesPage/CoursesPage'));
const SubjectDetailPage = lazy(() => import('../Pages/SubjectDetailPage/SubjectDetailPage'));
const LessonListPage = lazy(() => import('../Pages/LessonListPage/LessonListPage'));
const LessonDetailPage = lazy(() => import('../Pages/LessonDetailPage/LessonDetailPage'));
const QuizPage = lazy(() => import('../Pages/QuizPage/QuizPage'));
const CalendarPage = lazy(() => import('../Pages/CalendarPage/CalendarPage'));
const ReviewsPage = lazy(() => import('../Pages/ReviewsPage/ReviewsPage'));
const ProgressDetailPage = lazy(() => import('../Pages/ProgressDetailPage/ProgressDetailPage'));
const Inicio1 = lazy(() => import('../Pages/Inicio1/Inicio1'));
const DemoPage = lazy(() => import('../Pages/SiteIndexPage/DemoPage'));

const AppRouter = () => {
    return (
        <Router>
            <Suspense fallback={<div className="loading-global" style={{ padding: '2em', textAlign: 'center' }}>Loading...</div>}>
                <Routes>
                    {/* Páginas Independientes (Sin MainLayout) */}
                    <Route path="/splash" element={<SplashPage />} />
                    <Route path="/auth" element={<AuthPage />} />
                    <Route path="/inicio1" element={<Inicio1 />} />

                    {/* Páginas con Layout Estándar */}
                    <Route
                        path="/*"
                        element={
                            <MainLayout>
                                <Routes>
                                    <Route path="/" element={<SiteIndexPage />} />
                                    <Route
                                        path="/dashboard"
                                        element={
                                            <PrivateRoute>
                                                <DashboardPage />
                                            </PrivateRoute>
                                        }
                                    />
                                    <Route
                                        path="/search"
                                        element={
                                            <PrivateRoute>
                                                <SearchPage />
                                            </PrivateRoute>
                                        }
                                    />
                                    <Route
                                        path="/courses"
                                        element={
                                            <PrivateRoute>
                                                <CoursesPage />
                                            </PrivateRoute>
                                        }
                                    />
                                    <Route
                                        path="/profile"
                                        element={
                                            <PrivateRoute>
                                                <ProfilePage />
                                            </PrivateRoute>
                                        }
                                    />
                                    <Route
                                        path="/subject-detail"
                                        element={
                                            <PrivateRoute>
                                                <SubjectDetailPage />
                                            </PrivateRoute>
                                        }
                                    />
                                    <Route
                                        path="/lessons"
                                        element={
                                            <PrivateRoute>
                                                <LessonListPage />
                                            </PrivateRoute>
                                        }
                                    />
                                    <Route
                                        path="/lesson-detail"
                                        element={
                                            <PrivateRoute>
                                                <LessonDetailPage />
                                            </PrivateRoute>
                                        }
                                    />
                                    <Route
                                        path="/quiz"
                                        element={
                                            <PrivateRoute>
                                                <QuizPage />
                                            </PrivateRoute>
                                        }
                                    />
                                    <Route
                                        path="/calendar"
                                        element={
                                            <PrivateRoute>
                                                <CalendarPage />
                                            </PrivateRoute>
                                        }
                                    />
                                    <Route
                                        path="/reviews"
                                        element={
                                            <PrivateRoute>
                                                <ReviewsPage />
                                            </PrivateRoute>
                                        }
                                    />
                                    <Route
                                        path="/progress-detail"
                                        element={
                                            <PrivateRoute>
                                                <ProgressDetailPage />
                                            </PrivateRoute>
                                        }
                                    />
                                    <Route path="/inicio2" element={<DemoPage title="Inicio Versión 2" />} />
                                    <Route path="/inicio3" element={<DemoPage title="Inicio Versión 3" />} />
                                    <Route path="*" element={<SplashPage />} />
                                </Routes>
                            </MainLayout>
                        }
                    />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default AppRouter;
