import { useNavigate } from 'react-router-dom';
import { Search, Bell, Atom, BookOpen, Briefcase, Globe } from 'lucide-react';
import TabBar from '../../Shared/TabBar/TabBar';
import './CoursesPage.css';

const CoursesPage = () => {
    const navigate = useNavigate();

    const courses = [
        { id: 1, title: 'LOREM IPSUM', subtitle: 'Lorem ipsum dolor', icon: Atom },
        { id: 2, title: 'LOREM IPSUM', subtitle: 'Lorem ipsum dolor', icon: BookOpen },
        { id: 3, title: 'LOREM IPSUM', subtitle: 'Lorem ipsum dolor', icon: Briefcase },
        { id: 4, title: 'LOREM IPSUM', subtitle: 'Lorem ipsum dolor', icon: Globe },
    ];

    return (
        <div className="CoursesPage_Container seleccion" id="CoursesPage_Container">
            <div className="CoursesPage_Header">
                <div className="CoursesPage_SearchWrapper">
                    <Search size="1.2em" color="white" />
                    <input type="text" placeholder="Search" />
                </div>
                <button className="CoursesPage_Bell">
                    <Bell size="1.5em" color="white" />
                </button>
            </div>

            <div className="CoursesPage_List">
                {courses.map((course) => (
                    <div
                        key={course.id}
                        className="CoursesPage_Item"
                        onClick={() => navigate('/subject-detail')}
                    >
                        <div className="CoursesPage_ItemLeft">
                            <div className="CoursesPage_Icon">
                                <course.icon size="2em" color="#4158D0" />
                            </div>
                            <div className="CoursesPage_Text">
                                <h4>{course.title}</h4>
                                <p>{course.subtitle}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <TabBar />
        </div>
    );
};

export default CoursesPage;
