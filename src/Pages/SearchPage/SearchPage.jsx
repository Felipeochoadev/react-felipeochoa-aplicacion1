import { useNavigate } from 'react-router-dom';
import { Search, Bell, Atom, BookOpen, Briefcase, Globe, Calculator, PenTool } from 'lucide-react';
import './SearchPage.css';

const SearchPage = () => {
    const navigate = useNavigate();
    const categories = [
        { id: 1, title: 'Lorem', courses: '24 Courses', icon: Atom },
        { id: 2, title: 'Sit amet', courses: '12 Courses', icon: BookOpen },
        { id: 3, title: 'Dolor sit', courses: '32 Courses', icon: Briefcase },
        { id: 4, title: 'Ipsum dolor', courses: '24 Courses', icon: Globe },
        { id: 5, title: 'Dolor sit', courses: '32 Courses', icon: Calculator },
        { id: 6, title: 'Ipsum dolor', courses: '24 Courses', icon: PenTool },
    ];

    return (
        <div className="SearchPage_Container seleccion" id="SearchPage_Container">
            <div className="SearchPage_Header">
                <div className="SearchPage_SearchWrapper">
                    <Search size="1.2em" color="white" />
                    <input type="text" placeholder="Search" />
                </div>
                <button className="SearchPage_Bell">
                    <Bell size="1.5em" color="white" />
                </button>
            </div>

            <div className="SearchPage_Grid">
                {categories.map((cat) => (
                    <div
                        key={cat.id}
                        className="SearchPage_Card"
                        onClick={() => navigate('/courses')}
                    >
                        <div className="SearchPage_CardIcon">
                            <cat.icon size="2.5em" color="#4158D0" />
                        </div>
                        <div className="SearchPage_CardInfo">
                            <h4>{cat.title}</h4>
                            <span>{cat.courses}</span>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default SearchPage;
